import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

/**
 * Composant SEO léger qui met à jour les meta tags du document
 * sans dépendance externe (react-helmet).
 */
export default function SEO({ title, description, keywords, canonicalPath }: SEOProps) {
  const location = useLocation();
  const path = canonicalPath || location.pathname;
  const fullTitle = `${title} | M3 Automobile`;
  const canonicalUrl = `https://m3-automobile.fr${path === '/' ? '' : path}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);

    // Meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }

    // Cleanup: remettre les valeurs par défaut quand on quitte la page
    return () => {
      document.title = 'M3 Automobile - Vente de voitures d\'occasion à L\'Isle-Adam (95290)';
    };
  }, [fullTitle, description, keywords, canonicalUrl]);

  return null;
}
