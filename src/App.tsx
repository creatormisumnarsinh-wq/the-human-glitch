import React, { useState, useEffect, useCallback } from 'react';
import { RoutePath } from './types';
import { ARTICLES } from './data/articles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticleLayout } from './components/ArticleLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import {
  updatePageSEO,
  injectStructuredData,
  getArticleStructuredData,
  getHomeStructuredData,
} from './utils/seo';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    }
    return '/';
  });

  const navigateTo = useCallback((path: RoutePath | string) => {
    const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    if (cleanPath !== currentPath) {
      window.history.pushState(null, '', cleanPath);
      setCurrentPath(cleanPath);
    }
  }, [currentPath]);

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
      setCurrentPath(cleanPath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO, OpenGraph, Canonical and Structured Data on route change
  useEffect(() => {
    switch (currentPath) {
      case '/':
        updatePageSEO({
          title: 'The Human Glitch — A Psychology Archive',
          description:
            'Explore strange memories, human psychology, and the hidden mental shortcuts that shape how we experience reality.',
          canonicalPath: '/',
          image: '/src/assets/images/homepage_archive_collage_1792001391927.jpg',
          type: 'website',
          keywords: [
            'human psychology',
            'interesting psychology facts',
            'how the human brain works',
            'cognitive science archive',
            'déjà vu research',
          ],
        });
        injectStructuredData(getHomeStructuredData());
        break;

      case '/why-do-we-experience-deja-vu':
        updatePageSEO({
          title: ARTICLES.dejaVu.seoTitle,
          description: ARTICLES.dejaVu.metaDescription,
          canonicalPath: ARTICLES.dejaVu.path,
          image: ARTICLES.dejaVu.heroImage,
          type: 'article',
          keywords: [ARTICLES.dejaVu.mainKeyword, ...ARTICLES.dejaVu.relatedKeywords],
        });
        injectStructuredData(getArticleStructuredData(ARTICLES.dejaVu));
        break;

      case '/why-does-your-brain-create-false-memories':
        updatePageSEO({
          title: ARTICLES.falseMemories.seoTitle,
          description: ARTICLES.falseMemories.metaDescription,
          canonicalPath: ARTICLES.falseMemories.path,
          image: ARTICLES.falseMemories.heroImage,
          type: 'article',
          keywords: [ARTICLES.falseMemories.mainKeyword, ...ARTICLES.falseMemories.relatedKeywords],
        });
        injectStructuredData(getArticleStructuredData(ARTICLES.falseMemories));
        break;

      case '/psychology-of-cognitive-biases':
        updatePageSEO({
          title: ARTICLES.cognitiveBiases.seoTitle,
          description: ARTICLES.cognitiveBiases.metaDescription,
          canonicalPath: ARTICLES.cognitiveBiases.path,
          image: ARTICLES.cognitiveBiases.heroImage,
          type: 'article',
          keywords: [ARTICLES.cognitiveBiases.mainKeyword, ...ARTICLES.cognitiveBiases.relatedKeywords],
        });
        injectStructuredData(getArticleStructuredData(ARTICLES.cognitiveBiases));
        break;

      default:
        updatePageSEO({
          title: 'Record Not Found — The Human Glitch Archive',
          description: 'The requested archival case file could not be found.',
          canonicalPath: currentPath,
          type: 'website',
        });
        break;
    }
  }, [currentPath]);

  // Render active page based on current route
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/why-do-we-experience-deja-vu':
        return <ArticleLayout article={ARTICLES.dejaVu} onNavigate={navigateTo} />;
      case '/why-does-your-brain-create-false-memories':
        return <ArticleLayout article={ARTICLES.falseMemories} onNavigate={navigateTo} />;
      case '/psychology-of-cognitive-biases':
        return <ArticleLayout article={ARTICLES.cognitiveBiases} onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-archive-texture flex flex-col text-[#29251F] font-sans">
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <main className="flex-1 w-full">{renderCurrentPage()}</main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
