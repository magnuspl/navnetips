import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const location = useLocation();
  const baseTitle = 'Navnetips.no';

  // Default descriptions for different routes
  const getDefaultDescription = (path: string) => {
    if (path === '/') return 'Finn det perfekte navnet til ditt barn eller kjæledyr. Utforsk vår samling av unike navn med betydninger og opprinnelse.';
    if (path.includes('guttenavn')) return 'Utforsk vår samling av guttenavn med betydninger og opprinnelse. Fra norrøne til moderne navn - finn det perfekte navnet til din sønn.';
    if (path.includes('jentenavn')) return 'Opplev vår samling av vakre jentenavn med betydninger og historie. Fra klassiske til unike navn - finn inspirasjon til din datter.';
    if (path.includes('hundenavn')) return 'Finn det perfekte navnet til din hund. Utforsk vår liste over populære og unike hundenavn med betydninger.';
    if (path.includes('kattenavn')) return 'Velg det ideelle navnet til din katt. Utforsk vår samling av kreative og klassiske kattenavn.';
    if (path.includes('favoritter')) return 'Se dine lagrede favorittnavn og hold oversikt over navnene du liker best.';
    return 'Finn det perfekte navnet med Navnetips.no - din guide til navn med betydning og historie.';
  };

  // Get the page title based on the current route
  const getPageTitle = (path: string) => {
    if (path === '/') return baseTitle;
    if (path.includes('guttenavn')) return `Guttenavn | ${baseTitle}`;
    if (path.includes('jentenavn')) return `Jentenavn | ${baseTitle}`;
    if (path.includes('hundenavn')) return `Hundenavn | ${baseTitle}`;
    if (path.includes('kattenavn')) return `Kattenavn | ${baseTitle}`;
    if (path.includes('favoritter')) return `Mine favoritter | ${baseTitle}`;
    return baseTitle;
  };

  useEffect(() => {
    // Update title
    document.title = title || getPageTitle(location.pathname);

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || getDefaultDescription(location.pathname));
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description || getDefaultDescription(location.pathname);
      document.head.appendChild(newMetaDescription);
    }
  }, [location, title, description]);

  return null;
}