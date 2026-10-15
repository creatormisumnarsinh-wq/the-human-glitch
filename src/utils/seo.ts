import { CaseFileArticle } from '../types';

const BASE_URL = 'https://thehumanglitch.org';

export function updatePageSEO(options: {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  keywords?: string[];
}) {
  // Update Document Title
  document.title = options.title;

  // Helper to set or create meta tags
  const setMeta = (nameOrProperty: string, content: string, isProperty = false) => {
    const selector = isProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let element = document.querySelector(selector) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      if (isProperty) {
        element.setAttribute('property', nameOrProperty);
      } else {
        element.setAttribute('name', nameOrProperty);
      }
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard Meta
  setMeta('description', options.description);
  if (options.keywords && options.keywords.length > 0) {
    setMeta('keywords', options.keywords.join(', '));
  }

  // Canonical link
  const canonicalUrl =
    options.canonicalPath === '/'
      ? `${BASE_URL}/`
      : `${BASE_URL}${options.canonicalPath}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // Open Graph
  setMeta('og:title', options.title, true);
  setMeta('og:description', options.description, true);
  setMeta('og:url', canonicalUrl, true);
  setMeta('og:type', options.type || 'website', true);
  if (options.image) {
    const fullImageUrl = options.image.startsWith('http') ? options.image : `${BASE_URL}${options.image}`;
    setMeta('og:image', fullImageUrl, true);
    setMeta('twitter:image', fullImageUrl);
  }

  // Twitter
  setMeta('twitter:title', options.title);
  setMeta('twitter:description', options.description);
}

export function injectStructuredData(schemaData: object) {
  const SCRIPT_ID = 'json-ld-structured-data';
  let scriptElement = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (!scriptElement) {
    scriptElement = document.createElement('script');
    scriptElement.id = SCRIPT_ID;
    scriptElement.type = 'application/ld+json';
    document.head.appendChild(scriptElement);
  }
  scriptElement.text = JSON.stringify(schemaData);
}

export function getArticleStructuredData(article: CaseFileArticle) {
  const canonicalUrl = `${BASE_URL}${article.path}`;
  const fullImageUrl = `${BASE_URL}${article.heroImage}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    headline: article.seoTitle,
    description: article.metaDescription,
    image: [fullImageUrl],
    datePublished: '2026-10-10T08:00:00+00:00',
    dateModified: '2026-10-14T08:00:00+00:00',
    author: {
      '@type': 'Organization',
      name: 'The Human Glitch Archive',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Human Glitch',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.ico`,
      },
    },
    keywords: [article.mainKeyword, ...article.relatedKeywords].join(', '),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Archive Catalog',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: article.caseNumber,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return [articleSchema, breadcrumbSchema, faqSchema];
}

export function getHomeStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'The Human Glitch',
        description:
          'Explore strange memories, human psychology, and the hidden mental shortcuts that shape how we experience reality.',
        publisher: {
          '@id': `${BASE_URL}/#organization`,
        },
      },
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'The Human Glitch',
        url: BASE_URL,
        logo: `${BASE_URL}/favicon.ico`,
        knowsAbout: [
          'Cognitive Psychology',
          'Memory Distortion',
          'Déjà Vu Neuroscience',
          'Cognitive Biases',
          'Human Perception',
        ],
      },
    ],
  };
}
