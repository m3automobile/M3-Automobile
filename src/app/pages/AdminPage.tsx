import { useState, useEffect, useCallback } from 'react';
import { Lock, LogOut, Plus, Pencil, Trash2, Eye, Car, Check, X, Save, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

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
}: {
  vehicule?: Vehicule;
  onSave: (data: any) => void;
  onCancel: () => void;
  loading: boolean;
}) {
  const [form, setForm] = useState<any>(vehicule || { ...emptyVehicule });
  const [pointsForts, setPointsForts] = useState(form.pointsForts?.join('\n') || '');
  const [equipements, setEquipements] = useState(form.equipements?.join('\n') || '');
  const [images, setImages] = useState(form.images?.join('\n') || '');

  const isEditing = !!vehicule;

  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
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

        {/* Images - un chemin par ligne */}
        <div>
          <label className={labelClass}>Images (un chemin par ligne, ex: /images/vehicules/dossier/photo.webp)</label>
          <textarea className={textareaClass} rows={4} value={images} onChange={(e) => setImages(e.target.value)} placeholder="/images/vehicules/mon-vehicule/photo1.webp&#10;/images/vehicules/mon-vehicule/photo2.webp" />
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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingVehicule, setEditingVehicule] = useState<Vehicule | undefined>();
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  useEffect(() => {
    if (token) fetchVehicules();
  }, [token, fetchVehicules]);

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
      </main>
    </div>
  );
}
