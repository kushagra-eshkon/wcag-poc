export const dynamic = "force-static"

import ChandrayaanCard from "@/components/ChandrayaanCard"

export const metadata = {
  title: "ISRO Chandrayaan Missions – News Card",
  description:
    "ISRO approves Chandrayaan‑5 with JAXA rover, aiming for next-gen lunar exploration.",
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "ISRO Announces Chandrayaan‑5 Lunar Rover Mission",
    description:
      "India approves Chandrayaan‑5, a lunar rover mission in collaboration with JAXA, targeting enhanced Moon exploration.",
    image: "https://chandrayaan5.vercel.app/chandrayaan-5.jpg",
    datePublished: "2025-03-18",
    author: {
      "@type": "Organization",
      name: "ISRO",
      url: "https://www.isro.gov.in",
    },
    publisher: {
      "@type": "Organization",
      name: "ISRO",
      logo: {
        "@type": "ImageObject",
        url: "https://chandrayaan5.vercel.app/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://chandrayaan5.vercel.app",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <main
        style={{
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <ChandrayaanCard />
      </main>
    </>
  )
}
