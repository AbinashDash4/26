import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schemaJson?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = 'https://megasusgroup.com',
  ogType = 'website',
  ogImage = 'https://megasusgroup.com/og-image.jpg',
  schemaJson
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (attribute: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Description & Keywords
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', 'Megasus Group, SAP Consulting, SAP S/4HANA, SAP FICO, SAP MM, Web Development, Mobile Apps, Enterprise Software, Fresher Upskilling, Placement Support');

    // 3. Open Graph Metadata
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:site_name', 'Megasus Group');

    // 4. Twitter Card Metadata
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Schema Markup
    let scriptElement = document.getElementById('jsonld-schema') as HTMLScriptElement;
    if (schemaJson) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'jsonld-schema';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schemaJson);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    return () => {
      // Clean up dynamic script if needed
    };
  }, [title, description, canonicalUrl, ogType, ogImage, schemaJson]);

  return null;
};
