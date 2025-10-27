import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export default function SEO({
  title = "Dittrich & Lamers, LLP - Family Law Attorneys in Rochester, MN",
  description = "Expert family law attorneys in Rochester, Minnesota with over 50 years of combined experience. Specializing in divorce, child custody, property division, and family law matters.",
  keywords = "family law attorney Rochester MN, divorce lawyer Rochester Minnesota, child custody attorney, property division lawyer, family law firm Rochester, Dittrich Lamers",
  ogImage = "/attorneys-outdoor.jpg",
  ogType = "website",
  canonicalUrl,
  structuredData
}: SEOProps) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Dittrich & Lamers, LLP",
    "description": description,
    "url": siteUrl,
    "logo": `${siteUrl}/DittrichLamers_Logo_outlined.png`,
    "image": `${siteUrl}${ogImage}`,
    "telephone": "+1-507-288-5567",
    "email": "info@dlamers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3143 Superior Drive NW, Suite C",
      "addressLocality": "Rochester",
      "addressRegion": "MN",
      "postalCode": "55901",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.0521",
      "longitude": "-92.4802"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Rochester",
      "containedIn": {
        "@type": "State",
        "name": "Minnesota"
      }
    },
    "knowsAbout": [
      "Family Law",
      "Divorce",
      "Child Custody",
      "Property Division",
      "Spousal Maintenance",
      "Child Support"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dittrich & Lamers, LLP" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Dittrich & Lamers, LLP" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content="Rochester" />
      <meta name="geo.position" content="44.0521;-92.4802" />
      <meta name="ICBM" content="44.0521, -92.4802" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
}

