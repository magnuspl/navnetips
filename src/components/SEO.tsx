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
    if (path === '/') return 'Finn det perfekte navnet til ditt barn eller kjæledyr. Utforsk vår samling av fine jentenavn, sjeldne jentenavn og vakre navn med betydninger og opprinnelse.';
    if (path.includes('guttenavn')) return 'Utforsk vår samling av fine guttenavn og gamle guttenavn med betydninger og opprinnelse. Fra norrøne til moderne navn - finn det perfekte navnet til din sønn.';
    if (path.includes('jentenavn')) return 'Opplev vår samling av fine jentenavn og sjeldne jentenavn med betydninger og historie. Fra klassiske til unike navn - finn inspirasjon til din datter.';
    if (path.includes('hundenavn')) return 'Finn det perfekte navnet til din hund. Utforsk vår liste over populære og unike hundenavn med betydninger.';
    if (path.includes('kattenavn')) return 'Velg det ideelle navnet til din katt. Utforsk vår samling av kreative og klassiske kattenavn.';
    if (path.includes('favoritter')) return 'Se dine lagrede favorittnavn og hold oversikt over navnene du liker best.';
    if (path.includes('navneforslag')) return 'Få personlige navneforslag basert på dine preferanser. Vår navnegenerator hjelper deg å finne det perfekte navnet.';
    if (path.includes('populaere-navn')) return 'Utforsk de mest populære navnene i 2024. Topp 10 fine jentenavn og sjeldne jentenavn, samt trender i navnevalg.';
    return 'Finn det perfekte navnet med Navnetips.no - din guide til navn med betydning og historie.';
  };

  // Get the page title based on the current route
  const getPageTitle = (path: string) => {
    // Extract category and subcategory from path
    const pathParts = path.split('/').filter(Boolean);
    const mainCategory = pathParts[0] || '';
    const subCategory = pathParts[1] || '';
    const nameOrLetter = pathParts[2] || '';

    // Home page
    if (path === '/') return `${baseTitle} - Fine jentenavn og sjeldne jentenavn til barn`;
    
    // Main category pages
    if (path === '/guttenavn') return `Fine guttenavn og gamle guttenavn med betydning | ${baseTitle}`;
    if (path === '/jentenavn') return `Fine jentenavn og sjeldne jentenavn med betydning | ${baseTitle}`;
    if (path === '/hundenavn') return `Hundenavn - 50+ unike og populære navn til hunden din | ${baseTitle}`;
    if (path === '/kattenavn') return `Kattenavn - 50+ kreative og søte navn til katten din | ${baseTitle}`;
    
    // Favorites page
    if (path === '/favoritter') return `Mine favoritt navn - Din personlige navneliste | ${baseTitle}`;
    
    // Name suggester page
    if (path === '/navneforslag') return `Navneforslag - Personlig navnegenerator | ${baseTitle}`;
    
    // Popular names page
    if (path === '/populaere-navn') return `Mest populære fine jentenavn og sjeldne jentenavn 2024 | ${baseTitle}`;
    
    // Category browsing pages
    if (mainCategory === 'guttenavn' && subCategory === 'kategori') {
      if (nameOrLetter === 'norrønt') return `Gamle guttenavn fra norrøn tid med historisk betydning | ${baseTitle}`;
      if (nameOrLetter === 'klassisk') return `Fine guttenavn med tidløs eleganse | ${baseTitle}`;
      if (nameOrLetter === 'moderne') return `Moderne guttenavn - Populære navn i 2024 | ${baseTitle}`;
      if (nameOrLetter === 'unikt') return `Unike og fine guttenavn som skiller seg ut | ${baseTitle}`;
    }
    
    if (mainCategory === 'jentenavn' && subCategory === 'kategori') {
      if (nameOrLetter === 'norrønt') return `Fine og sjeldne jentenavn fra norrøn tid | ${baseTitle}`;
      if (nameOrLetter === 'klassisk') return `Fine jentenavn med tidløs eleganse | ${baseTitle}`;
      if (nameOrLetter === 'moderne') return `Moderne jentenavn - Populære navn i 2024 | ${baseTitle}`;
      if (nameOrLetter === 'unikt') return `Unike og sjeldne jentenavn som skiller seg ut | ${baseTitle}`;
    }
    
    // Alphabet browsing pages
    if (mainCategory === 'guttenavn' && subCategory === 'bokstav' && nameOrLetter) {
      return `Fine guttenavn på ${nameOrLetter.toUpperCase()} - Alle guttenavn som starter med ${nameOrLetter.toUpperCase()} | ${baseTitle}`;
    }
    
    if (mainCategory === 'jentenavn' && subCategory === 'bokstav' && nameOrLetter) {
      return `Fine og sjeldne jentenavn på ${nameOrLetter.toUpperCase()} - Alle jentenavn som starter med ${nameOrLetter.toUpperCase()} | ${baseTitle}`;
    }
    
    // Default fallbacks for main categories
    if (mainCategory === 'guttenavn') return `Fine guttenavn og gamle guttenavn til din sønn | ${baseTitle}`;
    if (mainCategory === 'jentenavn') return `Fine jentenavn og sjeldne jentenavn til din datter | ${baseTitle}`;
    if (mainCategory === 'hundenavn') return `Hundenavn - Finn det perfekte navnet til din hund | ${baseTitle}`;
    if (mainCategory === 'kattenavn') return `Kattenavn - Finn det perfekte navnet til din katt | ${baseTitle}`;
    
    return `${baseTitle} - Din guide til perfekte navn`;
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