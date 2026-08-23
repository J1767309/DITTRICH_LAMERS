import { Helmet } from "@/lib/helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SITE_URL = "https://www.dittrichlamers.com";

export default function SEO({
  title = "Dittrich & Lamers, LLP | Family Law Attorneys in Rochester, MN",
  description = "Experienced family law attorneys in Rochester, Minnesota with more than 30 years of combined experience in divorce, child custody, property division, and related family law matters.",
  keywords = "family law attorney Rochester MN, divorce lawyer Rochester Minnesota, child custody attorney, property division lawyer, family law firm Rochester, Dittrich Lamers",
  ogImage = "/attorneys-outdoor.jpg",
  ogType = "website",
  canonicalUrl = "/",
  structuredData,
  noIndex = false,
}: SEOProps) {
  const fullCanonicalUrl = new URL(canonicalUrl, SITE_URL).toString();

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Dittrich & Lamers, LLP",
    description: description,
    "@id": `${SITE_URL}/#organization`,
    url: SITE_URL,
    logo: `${SITE_URL}/DittrichLamers_Logo_outlined.png`,
    image: new URL(ogImage, SITE_URL).toString(),
    telephone: "+1-507-288-7365",
    email: "info@dittrichlamers.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3143 Superior Drive NW, Suite C",
      addressLocality: "Rochester",
      addressRegion: "MN",
      postalCode: "55901",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.0569776,
      longitude: -92.5291048,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    areaServed: {
      "@type": "City",
      name: "Rochester",
      containedIn: {
        "@type": "State",
        name: "Minnesota",
      },
    },
    knowsAbout: [
      "Family Law",
      "Divorce",
      "Child Custody",
      "Property Division",
      "Spousal Maintenance",
      "Child Support",
    ],
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
      <meta
        property="og:image"
        content={new URL(ogImage, SITE_URL).toString()}
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dittrich & Lamers, LLP" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={new URL(ogImage, SITE_URL).toString()}
      />

      {/* Additional SEO Tags */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Dittrich & Lamers, LLP" />

      {/* Geo Tags */}
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content="Rochester" />
      <meta name="geo.position" content="44.0569776;-92.5291048" />
      <meta name="ICBM" content="44.0569776, -92.5291048" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
}
