import React, { useState } from 'react';
import { RoutePath } from '../types';
import { BookOpen, Menu, X, FileText } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: RoutePath) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const navLinks: { label: string; path: RoutePath }[] = [
    { label: 'Archive Home', path: '/' },
    { label: 'Déjà Vu', path: '/why-do-we-experience-deja-vu' },
    { label: 'False Memories', path: '/why-does-your-brain-create-false-memories' },
    { label: 'Cognitive Biases', path: '/psychology-of-cognitive-biases' },
  ];

  const handleLinkClick = (path: RoutePath, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    setCatalogOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7EF]/95 backdrop-blur-sm border-b border-[#9B927D]/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-element brand wordmark (Strict Top Bar Contract) */}
          <a
            href="/"
            onClick={(e) => handleLinkClick('/', e)}
            className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#29251F] hover:text-[#873B30] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>THE HUMAN GLITCH</span>
          </a>

          {/* Zone 2: 4 concise single-line text navigation links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6D6559]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                    isActive
                      ? 'text-[#873B30] font-semibold border-b-2 border-[#873B30]'
                      : 'hover:text-[#29251F] hover:border-b-2 hover:border-[#9B927D]/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setCatalogOpen(!catalogOpen)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase bg-[#29251F] text-[#FAF7EF] rounded hover:bg-[#873B30] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              aria-expanded={catalogOpen}
              aria-label="Toggle Case Dossier Index"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Case Dossiers</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#29251F] hover:text-[#873B30] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#873B30] rounded"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#9B927D]/30 bg-[#FAF7EF] px-4 pt-3 pb-5 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#9B927D] pb-1">
              Archival Index
            </div>
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(link.path, e)}
                  className={`block px-3 py-2 rounded text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F1E7D2] text-[#873B30] font-semibold'
                      : 'text-[#29251F] hover:bg-[#F1E7D2]/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCatalogOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider bg-[#29251F] text-[#FAF7EF] rounded hover:bg-[#873B30]"
              >
                <BookOpen className="w-4 h-4" />
                <span>View All 3 Case Files</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Quick Jump Dossier Modal/Drawer */}
      {catalogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#29251F]/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div
            className="bg-[#FAF7EF] border border-[#9B927D] max-w-lg w-full p-6 shadow-2xl relative rounded-xs"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dossier-modal-title"
          >
            <button
              type="button"
              onClick={() => setCatalogOpen(false)}
              className="absolute top-4 right-4 text-[#6D6559] hover:text-[#873B30] p-1 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="archive-stamp text-[10px] mb-2">
              CONFIDENTIAL CLASSIFIED RECORD · 2026
            </div>
            <h2 id="dossier-modal-title" className="text-xl font-serif font-bold text-[#29251F] mb-1">
              Active Psychology Case Files
            </h2>
            <p className="text-xs text-[#6D6559] mb-4 font-mono">
              Direct access index to experimental research investigations.
            </p>

            <div className="space-y-3">
              <a
                href="/why-do-we-experience-deja-vu"
                onClick={(e) => handleLinkClick('/why-do-we-experience-deja-vu', e)}
                className="block p-3 border border-[#9B927D]/40 bg-[#F1E7D2]/40 hover:bg-[#F1E7D2] transition-colors rounded-xs group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#873B30] mb-1">
                  <span>CASE FILE 001</span>
                  <span>7 MIN READ</span>
                </div>
                <div className="font-serif font-semibold text-[#29251F] group-hover:text-[#873B30] transition-colors">
                  Why Do We Experience Déjà Vu? The Science
                </div>
                <p className="text-xs text-[#6D6559] mt-1 line-clamp-1">
                  Temporal lobe desynchronization, gestalt geometry, and brain error-checking.
                </p>
              </a>

              <a
                href="/why-does-your-brain-create-false-memories"
                onClick={(e) => handleLinkClick('/why-does-your-brain-create-false-memories', e)}
                className="block p-3 border border-[#9B927D]/40 bg-[#F1E7D2]/40 hover:bg-[#F1E7D2] transition-colors rounded-xs group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#873B30] mb-1">
                  <span>CASE FILE 002</span>
                  <span>8 MIN READ</span>
                </div>
                <div className="font-serif font-semibold text-[#29251F] group-hover:text-[#873B30] transition-colors">
                  False Memories Psychology: How Memory Can Change
                </div>
                <p className="text-xs text-[#6D6559] mt-1 line-clamp-1">
                  Constructive recall, synaptic reconsolidation, and the misinformation effect.
                </p>
              </a>

              <a
                href="/psychology-of-cognitive-biases"
                onClick={(e) => handleLinkClick('/psychology-of-cognitive-biases', e)}
                className="block p-3 border border-[#9B927D]/40 bg-[#F1E7D2]/40 hover:bg-[#F1E7D2] transition-colors rounded-xs group"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#873B30] mb-1">
                  <span>CASE FILE 003</span>
                  <span>8 MIN READ</span>
                </div>
                <div className="font-serif font-semibold text-[#29251F] group-hover:text-[#873B30] transition-colors">
                  Cognitive Biases in Psychology: Types and Examples
                </div>
                <p className="text-xs text-[#6D6559] mt-1 line-clamp-1">
                  Confirmation bias, anchoring, availability heuristics, and debiasing habits.
                </p>
              </a>
            </div>

            <div className="mt-5 pt-3 border-t border-[#9B927D]/30 flex justify-between items-center text-xs font-mono text-[#6D6559]">
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#873B30]" />
                All 3 dossiers fully cited
              </span>
              <button
                type="button"
                onClick={() => setCatalogOpen(false)}
                className="text-[#29251F] hover:text-[#873B30] underline"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
