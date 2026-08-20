/**
 * Kanonisk origin for siden. Brukes i canonical-lenker, og:url og JSON-LD, som
 * alle skal være absolutte URL-er.
 */
export const SITE = "https://navnetips.no";

export const canonical = (path: string) => `${SITE}${path.startsWith("/") ? path : `/${path}`}`;
