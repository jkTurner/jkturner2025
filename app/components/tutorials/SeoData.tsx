type SeoDataProps = {
  title: string;
  description?: string;
  date: string;
  slugPath: string;
};

const SeoData = ({ title, description, date, slugPath }: SeoDataProps) => {

    const structuredData: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        datePublished: date,
        dateModified: new Date().toISOString(),
        author: {
            "@type": "Person",
            name: "Jakkrit Turner",
        },
        publisher: {
            "@type": "Organization",
            name: "jkturner.site",
            logo: {
            "@type": "ImageObject",
            url: "https://jkturner.site/images/system/jkturner-logo-512.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://jkturner.site/tutorials/${slugPath}`,
        },
    };

    if (description) structuredData.description = description;
    
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData)}}
        />
    );
};

export default SeoData;

