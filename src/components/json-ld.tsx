import { EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
export function JsonLd() {
  const data = [
    { "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL, email: EMAIL, description: SITE_DESCRIPTION },
    { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, description: SITE_DESCRIPTION },
    { "@context": "https://schema.org", "@type": "Service", name: "Professional website and local visibility foundation", provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL }, areaServed: "US", audience: { "@type": "BusinessAudience", audienceType: "Established local businesses" }, description: SITE_DESCRIPTION },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
