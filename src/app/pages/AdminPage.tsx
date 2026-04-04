import { useState, useEffect, useCallback, useRef } from 'react';
import { Lock, LogOut, Plus, Pencil, Trash2, Eye, Car, Check, X, Save, ChevronDown, ChevronUp, RefreshCw, Upload, ImageIcon, GripVertical, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const IMAGES_API = '/api/images';

interface Vehicule {
  id: string;
  marque: string;
  modele: string;
  version: string;
  annee: number;
  kilometrage: number;
  energie: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique';
  boite: 'Manuelle' | 'Automatique';
  puissanceDin: number;
  puissanceFiscale: number;
  couleur: string;
  portes: number;
  places: number;
  finition: string;
  prix: number;
  statut: 'en_vente' | 'vendu';
  description: string;
  pointsForts: string[];
  equipements: string[];
  lienLeboncoin?: string;
  lienLaCentrale?: string;
  images: string[];
  miseEnCirculation: string;
  critAir?: string;
}

const API_URL = '/api/vehicules';
const AUTH_URL = '/api/auth';
const AVIS_DATA_URL = '/data/avis.json';

interface Avis {
  id: string;
  nom: string;
  note: number;
  texte: string;
  vehicule: string;
  date: string;
  visible: boolean;
}

const emptyAvis: Omit<Avis, 'id'> = {
  nom: '',
  note: 5,
  texte: '',
  vehicule: '',
  date: new Date().toISOString().split('T')[0],
  visible: true,
};

const emptyVehicule: Omit<Vehicule, 'id'> = {
  marque: '',
  modele: '',
  version: '',
  annee: new Date().getFullYear(),
  kilometrage: 0,
  energie: 'Diesel',
  boite: 'Manuelle',
  puissanceDin: 0,
  puissanceFiscale: 0,
  couleur: '',
  portes: 5,
  places: 5,
  finition: '',
  prix: 0,
  statut: 'en_vente',
  description: '',
  pointsForts: [],
  equipements: [],
  lienLeboncoin: '',
  lienLaCentrale: '',
  images: [],
  miseEnCirculation: '',
  critAir: '',
};

// ==================== LOGIN COMPONENT ====================
function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem('admin_token', data.token);
        onLogin(data.token);
      } else {
        setError(data.error || 'Mot de passe incorrect');
      }
    } catch {
      setError('Erreur de connexion au serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="bg-white/10 rounded-full size-16 flex items-center justify-center mx-auto mb-4">
              <Lock className="size-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Administration</h1>
            <p className="text-gray-400 mt-2">M3 Automobile - Gestion du stock</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 bg-white/5 border border-white/10 rounded-lg px-4 text-white placeholder-gray-500 focus:border-white/30 focus:outline-none"
                placeholder="Entrez le mot de passe admin"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold h-12"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ==================== VEHICLE FORM COMPONENT ====================
function VehiculeForm({
  vehicule,
  onSave,
  onCancel,
  loading,
  token,
}: {
  vehicule?: Vehicule;
  onSave: (data: any) => void;
  onCancel: () => void;
  loading: boolean;
  token: string;
}) {
  const [form, setForm] = useState<any>(vehicule || { ...emptyVehicule });
  const [pointsForts, setPointsForts] = useState(form.pointsForts?.join('\n') || '');
  const [equipements, setEquipements] = useState(form.equipements?.join('\n') || '');
  const [images, setImages] = useState(form.images?.join('\n') || '');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEditing = !!vehicule;

  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  // Compress and convert image to WebP, return base64
  const compressImage = (file: File): Promise<{ filename: string; data: string }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1600;
          const MAX_HEIGHT = 1200;
          let { width, height } = img;
          if (width > MAX_WIDTH) { height = (height * MAX_WIDTH) / width; width = MAX_WIDTH; }
          if (height > MAX_HEIGHT) { width = (width * MAX_HEIGHT) / height; height = MAX_HEIGHT; }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d')!;
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/webp', 0.8);
          const base64 = dataUrl.split(',')[1];
          const filename = file.name.replace(/\.[^.]+$/, '.webp');
          resolve({ filename, data: base64 });
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  // Upload photos to server
  const handlePhotoUpload = async (files: File[]) => {
    // Determine vehicle ID
    const vehiculeId = form.id || (form.marque && form.modele
      ? `${form.marque}-${form.modele}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + form.annee
      : '');

    if (!vehiculeId) {
      alert('Remplissez au moins Marque, Modèle et Année avant d\'uploader des photos');
      return;
    }

    setUploading(true);
    try {
      const compressedImages = [];
      for (let i = 0; i < files.length; i++) {
        setUploadProgress(`Compression ${i + 1}/${files.length}...`);
        const compressed = await compressImage(files[i]);
        compressedImages.push(compressed);
      }

      setUploadProgress(`Upload de ${compressedImages.length} photo(s)...`);

      const res = await fetch(IMAGES_API + '/' + vehiculeId, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          vehiculeId,
          images: compressedImages,
        }),
      });

      if (res.ok) {
        const result = await res.json();
        // Add new paths to existing images
        const currentImages = images.split('\n').filter((s: string) => s.trim());
        const allImages = [...currentImages, ...result.uploaded];
        setImages(allImages.join('\n'));
        setUploadProgress('');
      } else {
        const err = await res.json();
        alert('Erreur upload: ' + (err.error || 'Erreur inconnue'));
      }
    } catch (err: any) {
      alert('Erreur: ' + err.message);
    } finally {
      setUploading(false);
      setUploadProgress('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...form,
      annee: Number(form.annee),
      kilometrage: Number(form.kilometrage),
      puissanceDin: Number(form.puissanceDin),
      puissanceFiscale: Number(form.puissanceFiscale),
      portes: Number(form.portes),
      places: Number(form.places),
      prix: Number(form.prix),
      pointsForts: pointsForts.split('\n').filter((s: string) => s.trim()),
      equipements: equipements.split('\n').filter((s: string) => s.trim()),
      images: images.split('\n').filter((s: string) => s.trim()),
    };
    onSave(data);
  };

  const inputClass = "w-full h-10 bg-white/5 border border-white/10 rounded-lg px-3 text-white placeholder-gray-500 focus:border-white/30 focus:outline-none text-sm";
  const labelClass = "text-xs text-gray-400 block mb-1";
  const textareaClass = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-white/30 focus:outline-none text-sm resize-y";

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        {isEditing ? `Modifier : ${form.marque} ${form.modele}` : 'Ajouter un véhicule'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Infos principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Marque *</label>
            <input className={inputClass} value={form.marque} onChange={(e) => handleChange('marque', e.target.value)} required placeholder="Audi" />
          </div>
          <div>
            <label className={labelClass}>Modèle *</label>
            <input className={inputClass} value={form.modele} onChange={(e) => handleChange('modele', e.target.value)} required placeholder="A3 Sportback" />
          </div>
          <div>
            <label className={labelClass}>Version *</label>
            <input className={inputClass} value={form.version} onChange={(e) => handleChange('version', e.target.value)} required placeholder="1.6 TDI 110ch" />
          </div>
          <div>
            <label className={labelClass}>Finition</label>
            <input className={inputClass} value={form.finition} onChange={(e) => handleChange('finition', e.target.value)} placeholder="Ambiente" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Année *</label>
            <input type="number" className={inputClass} value={form.annee} onChange={(e) => handleChange('annee', e.target.value)} required />
          </div>
          <div>
            <label className={labelClass}>Kilométrage *</label>
            <input type="number" className={inputClass} value={form.kilometrage} onChange={(e) => handleChange('kilometrage', e.target.value)} required />
          </div>
          <div>
            <label className={labelClass}>Prix (€) *</label>
            <input type="number" className={inputClass} value={form.prix} onChange={(e) => handleChange('prix', e.target.value)} required />
          </div>
          <div>
            <label className={labelClass}>Mise en circulation</label>
            <input className={inputClass} value={form.miseEnCirculation} onChange={(e) => handleChange('miseEnCirculation', e.target.value)} placeholder="08/2015" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Énergie</label>
            <select className={inputClass} value={form.energie} onChange={(e) => handleChange('energie', e.target.value)}>
              <option value="Diesel">Diesel</option>
              <option value="Essence">Essence</option>
              <option value="Hybride">Hybride</option>
              <option value="Électrique">Électrique</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Boîte</label>
            <select className={inputClass} value={form.boite} onChange={(e) => handleChange('boite', e.target.value)}>
              <option value="Manuelle">Manuelle</option>
              <option value="Automatique">Automatique</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Puissance DIN (ch)</label>
            <input type="number" className={inputClass} value={form.puissanceDin} onChange={(e) => handleChange('puissanceDin', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Puissance fiscale (CV)</label>
            <input type="number" className={inputClass} value={form.puissanceFiscale} onChange={(e) => handleChange('puissanceFiscale', e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Couleur</label>
            <input className={inputClass} value={form.couleur} onChange={(e) => handleChange('couleur', e.target.value)} placeholder="Noir" />
          </div>
          <div>
            <label className={labelClass}>Portes</label>
            <input type="number" className={inputClass} value={form.portes} onChange={(e) => handleChange('portes', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Places</label>
            <input type="number" className={inputClass} value={form.places} onChange={(e) => handleChange('places', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Crit'Air</label>
            <input className={inputClass} value={form.critAir || ''} onChange={(e) => handleChange('critAir', e.target.value)} placeholder="2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Statut</label>
            <select className={inputClass} value={form.statut} onChange={(e) => handleChange('statut', e.target.value)}>
              <option value="en_vente">En vente</option>
              <option value="vendu">Vendu</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Lien Leboncoin</label>
            <input className={inputClass} value={form.lienLeboncoin || ''} onChange={(e) => handleChange('lienLeboncoin', e.target.value)} placeholder="https://www.leboncoin.fr/..." />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className={labelClass}>Description</label>
          <textarea className={textareaClass} rows={3} value={form.description} onChange={(e) => handleChange('description', e.target.value)} placeholder="Description du véhicule..." />
        </div>

        {/* Points forts - un par ligne */}
        <div>
          <label className={labelClass}>Points forts (un par ligne)</label>
          <textarea className={textareaClass} rows={4} value={pointsForts} onChange={(e) => setPointsForts(e.target.value)} placeholder="Distribution neuve&#10;Sièges chauffants&#10;Bluetooth" />
        </div>

        {/* Équipements - un par ligne */}
        <div>
          <label className={labelClass}>Équipements (un par ligne)</label>
          <textarea className={textareaClass} rows={3} value={equipements} onChange={(e) => setEquipements(e.target.value)} placeholder="Climatisation&#10;Bluetooth&#10;GPS" />
        </div>

        {/* Photos section */}
        <div>
          <label className={labelClass}>Photos du véhicule</label>

          {/* Upload zone */}
          <div
            className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-white/40 transition-colors cursor-pointer mb-4"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-white/50', 'bg-white/5'); }}
            onDragLeave={(e) => { e.currentTarget.classList.remove('border-white/50', 'bg-white/5'); }}
            onDrop={async (e) => {
              e.preventDefault();
              e.currentTarget.classList.remove('border-white/50', 'bg-white/5');
              const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
              if (files.length > 0) await handlePhotoUpload(files);
            }}
          >
            <Upload className="size-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">
              {uploading ? uploadProgress : 'Glissez vos photos ici ou cliquez pour sélectionner'}
            </p>
            <p className="text-gray-500 text-xs mt-1">JPG, PNG ou WebP — compression automatique</p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const files = Array.from(e.target.files || []);
              if (files.length > 0) await handlePhotoUpload(files);
              e.target.value = '';
            }}
          />

          {/* Photo previews */}
          {images.trim() && (
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mb-4">
              {images.split('\n').filter((s: string) => s.trim()).map((imgPath: string, idx: number) => (
                <div key={idx} className="relative group aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10">
                  <img src={imgPath} alt="" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => {
                      const list = images.split('\n').filter((s: string) => s.trim());
                      list.splice(idx, 1);
                      setImages(list.join('\n'));
                    }}
                    className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-500 text-white rounded-full size-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="size-3" />
                  </button>
                  {idx === 0 && (
                    <span className="absolute bottom-1 left-1 bg-green-500/80 text-white text-[10px] px-1.5 py-0.5 rounded">
                      Vitrine
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Fallback textarea for manual paths */}
          <details className="text-xs">
            <summary className="text-gray-500 cursor-pointer hover:text-gray-300">Modifier les chemins manuellement</summary>
            <textarea className={textareaClass + ' mt-2'} rows={3} value={images} onChange={(e) => setImages(e.target.value)} placeholder="/images/vehicules/dossier/photo.webp" />
          </details>
        </div>

        {/* Boutons */}
        <div className="flex gap-3 pt-2">
          <Button type="submit" disabled={loading} className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
            <Save className="size-4 mr-2" />
            {loading ? 'Enregistrement...' : isEditing ? 'Mettre à jour' : 'Ajouter le véhicule'}
          </Button>
          <Button type="button" onClick={onCancel} variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
}

// ==================== MAIN ADMIN DASHBOARD ====================
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem('admin_token'));
  const [vehicules, setVehicules] = useState<Vehicule[]>([]);
  const [avis, setAvis] = useState<Avis[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingVehicule, setEditingVehicule] = useState<Vehicule | undefined>();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAvisForm, setShowAvisForm] = useState(false);
  const [editingAvis, setEditingAvis] = useState<Avis | undefined>();
  const [expandedAvisId, setExpandedAvisId] = useState<string | null>(null);

  const authHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  // Fetch vehicles
  const fetchVehicules = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const data = await res.json();
        setVehicules(data);
      } else {
        // Fallback to static JSON
        const fallbackRes = await fetch('/data/vehicules.json');
        if (fallbackRes.ok) {
          setVehicules(await fallbackRes.json());
        }
      }
    } catch {
      // Fallback to static JSON
      try {
        const fallbackRes = await fetch('/data/vehicules.json');
        if (fallbackRes.ok) {
          setVehicules(await fallbackRes.json());
        }
      } catch {
        showMessage('error', 'Impossible de charger les véhicules');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch reviews
  const fetchAvis = useCallback(async () => {
    try {
      const res = await fetch(AVIS_DATA_URL);
      if (res.ok) {
        const data = await res.json();
        // Merge with localStorage edits
        const savedAvis = localStorage.getItem('avis_edits');
        if (savedAvis) {
          const edits = JSON.parse(savedAvis);
          const merged = data.map((a: Avis) => ({ ...a, ...edits[a.id] }));
          setAvis(merged);
        } else {
          setAvis(data);
        }
      }
    } catch {
      console.log('Erreur lors du chargement des avis');
      const savedAvis = localStorage.getItem('avis_edits');
      if (savedAvis) {
        const edits = JSON.parse(savedAvis);
        setAvis(Object.values(edits) as Avis[]);
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchVehicules();
      fetchAvis();
    }
  }, [token, fetchVehicules, fetchAvis]);

  // Toggle vehicle status
  const toggleStatus = async (vehicule: Vehicule) => {
    const newStatus = vehicule.statut === 'en_vente' ? 'vendu' : 'en_vente';
    try {
      const res = await fetch(`${API_URL}?id=${vehicule.id}`, {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify({ id: vehicule.id, statut: newStatus }),
      });

      if (res.ok) {
        setVehicules((prev) =>
          prev.map((v) => (v.id === vehicule.id ? { ...v, statut: newStatus } : v))
        );
        showMessage('success', `${vehicule.marque} ${vehicule.modele} marqué comme "${newStatus === 'en_vente' ? 'En vente' : 'Vendu'}"`);
      } else {
        const err = await res.json();
        showMessage('error', err.error || 'Erreur lors de la mise à jour');
      }
    } catch {
      showMessage('error', 'Erreur de connexion');
    }
  };

  // Save vehicle (create or update)
  const saveVehicule = async (data: any) => {
    setLoading(true);
    try {
      const isEditing = !!editingVehicule;
      const url = isEditing ? `${API_URL}?id=${editingVehicule.id}` : API_URL;
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: authHeaders,
        body: JSON.stringify(data),
      });

      if (res.ok) {
        showMessage('success', isEditing ? 'Véhicule mis à jour !' : 'Véhicule ajouté !');
        setShowForm(false);
        setEditingVehicule(undefined);
        fetchVehicules();
      } else {
        const err = await res.json();
        showMessage('error', err.error || 'Erreur lors de la sauvegarde');
      }
    } catch {
      showMessage('error', 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  // Delete vehicle
  const deleteVehicule = async (vehicule: Vehicule) => {
    if (!confirm(`Supprimer définitivement "${vehicule.marque} ${vehicule.modele}" ?`)) return;

    try {
      const res = await fetch(`${API_URL}?id=${vehicule.id}`, {
        method: 'DELETE',
        headers: authHeaders,
      });

      if (res.ok) {
        setVehicules((prev) => prev.filter((v) => v.id !== vehicule.id));
        showMessage('success', 'Véhicule supprimé');
      } else {
        showMessage('error', 'Erreur lors de la suppression');
      }
    } catch {
      showMessage('error', 'Erreur de connexion');
    }
  };

  // Save avis (create or update)
  const saveAvis = async (data: any) => {
    try {
      const savedAvis = localStorage.getItem('avis_edits') || '{}';
      const edits = JSON.parse(savedAvis);

      if (!data.id) {
        data.id = Date.now().toString();
      }

      edits[data.id] = data;
      localStorage.setItem('avis_edits', JSON.stringify(edits));

      const newAvis = avis.map(a => a.id === data.id ? data : a);
      if (!avis.some(a => a.id === data.id)) {
        newAvis.push(data);
      }
      setAvis(newAvis);

      showMessage('success', editingAvis ? 'Avis mis à jour !' : 'Avis ajouté !');
      setShowAvisForm(false);
      setEditingAvis(undefined);
    } catch {
      showMessage('error', 'Erreur lors de la sauvegarde de l\'avis');
    }
  };

  // Delete avis
  const deleteAvis = async (avisSupprime: Avis) => {
    if (!confirm(`Supprimer définitivement l'avis de "${avisSupprime.nom}" ?`)) return;

    try {
      const savedAvis = localStorage.getItem('avis_edits') || '{}';
      const edits = JSON.parse(savedAvis);
      delete edits[avisSupprime.id];
      localStorage.setItem('avis_edits', JSON.stringify(edits));

      setAvis((prev) => prev.filter((a) => a.id !== avisSupprime.id));
      showMessage('success', 'Avis supprimé');
    } catch {
      showMessage('error', 'Erreur lors de la suppression');
    }
  };

  // Toggle avis visibility
  const toggleAvisVisibility = (avisSupprime: Avis) => {
    const updated = { ...avisSupprime, visible: !avisSupprime.visible };
    saveAvis(updated);
  };

  // Logout
  const logout = () => {
    sessionStorage.removeItem('admin_token');
    setToken(null);
  };

  // Not logged in
  if (!token) {
    return <LoginForm onLogin={setToken} />;
  }

  const enVente = vehicules.filter((v) => v.statut === 'en_vente');
  const vendus = vehicules.filter((v) => v.statut === 'vendu');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-black/50 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Car className="size-6" />
            <h1 className="text-lg font-bold">Admin M3 Automobile</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={fetchVehicules} variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              <RefreshCw className="size-4 mr-1" />
              Actualiser
            </Button>
            <Button onClick={logout} variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              <LogOut className="size-4 mr-1" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Message notification */}
        {message && (
          <div className={`mb-6 p-4 rounded-xl border ${message.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
            {message.text}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold">{vehicules.length}</p>
            <p className="text-gray-400 text-sm">Total</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-green-400">{enVente.length}</p>
            <p className="text-gray-400 text-sm">En vente</p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-red-400">{vendus.length}</p>
            <p className="text-gray-400 text-sm">Vendus</p>
          </div>
        </div>

        {/* Add button */}
        {!showForm && (
          <Button
            onClick={() => { setEditingVehicule(undefined); setShowForm(true); }}
            className="mb-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold"
          >
            <Plus className="size-4 mr-2" />
            Ajouter un véhicule
          </Button>
        )}

        {/* Form */}
        {showForm && (
          <div className="mb-8">
            <VehiculeForm
              vehicule={editingVehicule}
              onSave={saveVehicule}
              onCancel={() => { setShowForm(false); setEditingVehicule(undefined); }}
              loading={loading}
              token={token}
            />
          </div>
        )}

        {/* Vehicle list */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold mb-4">Véhicules ({vehicules.length})</h2>

          {loading && vehicules.length === 0 && (
            <p className="text-gray-400 text-center py-8">Chargement...</p>
          )}

          {vehicules.map((v) => (
            <div key={v.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              {/* Vehicle row */}
              <div className="p-4 flex items-center gap-4">
                {/* Thumbnail */}
                <div className="w-20 h-14 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
                  {v.images[0] && (
                    <img src={v.images[0]} alt="" className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white truncate">
                      {v.marque} {v.modele}
                    </span>
                    <Badge className={v.statut === 'en_vente' ? 'bg-green-500/90 text-white text-xs' : 'bg-red-500/90 text-white text-xs'}>
                      {v.statut === 'en_vente' ? 'EN VENTE' : 'VENDU'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-400 truncate">
                    {v.version} · {v.annee} · {v.kilometrage.toLocaleString('fr-FR')} km · {v.prix.toLocaleString('fr-FR')} €
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Toggle status button */}
                  <Button
                    onClick={() => toggleStatus(v)}
                    size="sm"
                    className={v.statut === 'en_vente'
                      ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30'
                      : 'bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30'
                    }
                  >
                    {v.statut === 'en_vente' ? (
                      <><Check className="size-4 mr-1" /> Marquer vendu</>
                    ) : (
                      <><Car className="size-4 mr-1" /> Remettre en vente</>
                    )}
                  </Button>

                  {/* Edit */}
                  <Button
                    onClick={() => { setEditingVehicule(v); setShowForm(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Pencil className="size-4" />
                  </Button>

                  {/* Expand */}
                  <Button
                    onClick={() => setExpandedId(expandedId === v.id ? null : v.id)}
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    {expandedId === v.id ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                  </Button>

                  {/* View on site */}
                  <a href={`/vehicules/${v.id}`} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Eye className="size-4" />
                    </Button>
                  </a>

                  {/* Delete */}
                  <Button
                    onClick={() => deleteVehicule(v)}
                    size="sm"
                    variant="outline"
                    className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              </div>

              {/* Expanded details */}
              {expandedId === v.id && (
                <div className="border-t border-white/10 p-4 bg-white/[0.02] grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div><span className="text-gray-500">ID:</span> <span className="text-gray-300">{v.id}</span></div>
                  <div><span className="text-gray-500">Énergie:</span> <span className="text-gray-300">{v.energie}</span></div>
                  <div><span className="text-gray-500">Boîte:</span> <span className="text-gray-300">{v.boite}</span></div>
                  <div><span className="text-gray-500">Puissance:</span> <span className="text-gray-300">{v.puissanceDin}ch / {v.puissanceFiscale}CV</span></div>
                  <div><span className="text-gray-500">Couleur:</span> <span className="text-gray-300">{v.couleur}</span></div>
                  <div><span className="text-gray-500">Mise en circ.:</span> <span className="text-gray-300">{v.miseEnCirculation}</span></div>
                  <div><span className="text-gray-500">Crit'Air:</span> <span className="text-gray-300">{v.critAir || '-'}</span></div>
                  <div><span className="text-gray-500">Photos:</span> <span className="text-gray-300">{v.images.length}</span></div>
                  <div className="col-span-2 md:col-span-4">
                    <span className="text-gray-500">Description:</span>
                    <p className="text-gray-300 mt-1">{v.description}</p>
                  </div>
                  {v.pointsForts.length > 0 && (
                    <div className="col-span-2 md:col-span-4">
                      <span className="text-gray-500">Points forts:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {v.pointsForts.map((p, i) => (
                          <Badge key={i} className="bg-white/10 text-gray-300 text-xs">{p}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {v.lienLeboncoin && (
                    <div className="col-span-2 md:col-span-4">
                      <a href={v.lienLeboncoin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-xs">
                        Voir sur Leboncoin →
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* REVIEWS SECTION */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-4">Avis Clients ({avis.length})</h2>
              {!showAvisForm && (
                <Button
                  onClick={() => { setEditingAvis(undefined); setShowAvisForm(true); }}
                  className="bg-white hover:bg-gray-100 text-gray-900 font-semibold"
                >
                  <Plus className="size-4 mr-2" />
                  Ajouter un avis
                </Button>
              )}
            </div>

            {/* Note about localStorage */}
            <p className="text-xs text-gray-500 mb-4">Pour publier les modifications, mettez à jour le fichier <code className="bg-white/5 px-2 py-1 rounded">avis.json</code> en production.</p>

            {/* Avis Form */}
            {showAvisForm && (
              <div className="mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <AvisForm
                  avis={editingAvis}
                  onSave={saveAvis}
                  onCancel={() => { setShowAvisForm(false); setEditingAvis(undefined); }}
                />
              </div>
            )}

            {/* Avis List */}
            <div className="space-y-3">
              {avis.length === 0 && (
                <p className="text-gray-400 text-center py-8">Aucun avis pour le moment</p>
              )}

              {avis.map((a) => (
                <div key={a.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  {/* Avis row */}
                  <div className="p-4 flex items-start gap-4">
                    {/* Rating */}
                    <div className="flex gap-0.5 mt-1 flex-shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${i < a.note ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white">{a.nom}</span>
                        <Badge className={a.visible ? 'bg-green-500/90 text-white text-xs' : 'bg-gray-500/90 text-white text-xs'}>
                          {a.visible ? 'VISIBLE' : 'MASQUÉ'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">{a.vehicule} · {new Date(a.date).toLocaleDateString('fr-FR')}</p>
                      {expandedAvisId !== a.id && (
                        <p className="text-sm text-gray-300 mt-2 line-clamp-2">{a.texte}</p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {/* Toggle visibility */}
                      <Button
                        onClick={() => toggleAvisVisibility(a)}
                        size="sm"
                        className={a.visible
                          ? 'bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30'
                          : 'bg-gray-500/20 hover:bg-gray-500/30 text-gray-400 border border-gray-500/30'
                        }
                      >
                        <Eye className="size-4" />
                      </Button>

                      {/* Edit */}
                      <Button
                        onClick={() => { setEditingAvis(a); setShowAvisForm(true); }}
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Pencil className="size-4" />
                      </Button>

                      {/* Expand */}
                      <Button
                        onClick={() => setExpandedAvisId(expandedAvisId === a.id ? null : a.id)}
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        {expandedAvisId === a.id ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                      </Button>

                      {/* Delete */}
                      <Button
                        onClick={() => deleteAvis(a)}
                        size="sm"
                        variant="outline"
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {expandedAvisId === a.id && (
                    <div className="border-t border-white/10 p-4 bg-white/[0.02]">
                      <p className="text-sm text-gray-300 mb-3">{a.texte}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div><span className="text-gray-500">ID:</span> <span className="text-gray-300">{a.id}</span></div>
                        <div><span className="text-gray-500">Note:</span> <span className="text-gray-300">{a.note}/5</span></div>
                        <div><span className="text-gray-500">Date:</span> <span className="text-gray-300">{a.date}</span></div>
                        <div><span className="text-gray-500">Véhicule:</span> <span className="text-gray-300">{a.vehicule}</span></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ==================== AVIS FORM COMPONENT ====================
function AvisForm({
  avis,
  onSave,
  onCancel,
}: {
  avis?: Avis;
  onSave: (data: Avis) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Avis>(avis || { ...emptyAvis, id: Date.now().toString() });

  const isEditing = !!avis;

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.texte.trim() || !form.vehicule.trim()) {
      alert('Remplissez tous les champs');
      return;
    }
    onSave(form);
  };

  const labelClass = 'text-sm text-gray-400 block mb-2 font-semibold';
  const inputClass = 'w-full h-10 bg-white/5 border border-white/10 rounded-lg px-3 text-white placeholder-gray-500 focus:border-white/30 focus:outline-none text-sm';
  const textareaClass = 'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-white/30 focus:outline-none text-sm';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Nom du client</label>
          <input type="text" className={inputClass} value={form.nom} onChange={(e) => handleChange('nom', e.target.value)} placeholder="Sophie L." />
        </div>
        <div>
          <label className={labelClass}>Note (1-5)</label>
          <select className={inputClass} value={form.note} onChange={(e) => handleChange('note', parseInt(e.target.value))}>
            <option value="1">1 - Très mauvais</option>
            <option value="2">2 - Mauvais</option>
            <option value="3">3 - Acceptable</option>
            <option value="4">4 - Bon</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Véhicule acheté</label>
          <input type="text" className={inputClass} value={form.vehicule} onChange={(e) => handleChange('vehicule', e.target.value)} placeholder="Audi A3 Sportback" />
        </div>
        <div>
          <label className={labelClass}>Date</label>
          <input type="date" className={inputClass} value={form.date} onChange={(e) => handleChange('date', e.target.value)} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Texte de l'avis</label>
        <textarea className={textareaClass} rows={4} value={form.texte} onChange={(e) => handleChange('texte', e.target.value)} placeholder="Écrivez votre avis..." />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="visible"
          checked={form.visible}
          onChange={(e) => handleChange('visible', e.target.checked)}
          className="w-4 h-4 rounded border border-white/20 bg-white/5 cursor-pointer"
        />
        <label htmlFor="visible" className="text-sm text-gray-400 cursor-pointer">Visible sur le site</label>
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="submit" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold">
          <Save className="size-4 mr-2" />
          {isEditing ? 'Mettre à jour l\'avis' : 'Ajouter l\'avis'}
        </Button>
        <Button type="button" onClick={onCancel} variant="outline" className="border-white/20 text-white hover:bg-white/10">
          Annuler
        </Button>
      </div>
    </form>
  );
}
