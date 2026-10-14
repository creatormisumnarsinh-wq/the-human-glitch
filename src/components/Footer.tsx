import React from 'react';
import { RoutePath } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: RoutePath, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#9B927D]/40 bg-[#FAF7EF] mt-24 text-[#29251F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Curatorial Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif font-bold tracking-tight text-[#29251F]">
                THE HUMAN GLITCH
              </span>
              <span className="archive-stamp text-[10px]">SERIES 01</span>
            </div>
            <p className="font-serif italic text-base text-[#873B30]">
              &ldquo;What if your mind is an unreliable witness?&rdquo;
            </p>
            <p className="text-sm text-[#6D6559] leading-relaxed max-w-md">
              An independent digital psychology archive investigating déjà vu, false memories,
              perception, and cognitive heuristics. Conceived as a final-semester senior research
              project combining vintage archival documentation aesthetics with contemporary
              cognitive neuroscience.
            </p>
            <div className="text-xs font-mono text-[#9B927D] pt-2">
              ACADEMIC CAPSTONE DOSSIER · DEPT OF COGNITIVE SCIENCE &amp; HUMAN PERCEPTION
            </div>
          </div>

          {/* Archival Case Files Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#873B30] font-bold">
              Published Research Files
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/why-do-we-experience-deja-vu"
                  onClick={(e) => handleNav('/why-do-we-experience-deja-vu', e)}
                  className="group flex items-center justify-between text-[#29251F] hover:text-[#873B30] transition-colors"
                >
                  <span className="font-medium">File 001: The Déjà Vu Files</span>
                  <span className="text-xs font-mono text-[#9B927D] group-hover:text-[#873B30]">
                    7 min read
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/why-does-your-brain-create-false-memories"
                  onClick={(e) => handleNav('/why-does-your-brain-create-false-memories', e)}
                  className="group flex items-center justify-between text-[#29251F] hover:text-[#873B30] transition-colors"
                >
                  <span className="font-medium">File 002: The False Memory Files</span>
                  <span className="text-xs font-mono text-[#9B927D] group-hover:text-[#873B30]">
                    8 min read
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/psychology-of-cognitive-biases"
                  onClick={(e) => handleNav('/psychology-of-cognitive-biases', e)}
                  className="group flex items-center justify-between text-[#29251F] hover:text-[#873B30] transition-colors"
                >
                  <span className="font-medium">File 003: The Bias Index</span>
                  <span className="text-xs font-mono text-[#9B927D] group-hover:text-[#873B30]">
                    8 min read
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav('/', e)}
                  className="text-xs font-mono text-[#6D6559] hover:text-[#873B30] transition-colors block pt-1"
                >
                  ← Return to Catalog Overview
                </a>
              </li>
            </ul>
          </div>

          {/* Technical SEO, Protocol & Indexation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#873B30] font-bold">
              Archival Metadata &amp; Index
            </h3>
            <ul className="space-y-2 text-xs font-mono text-[#6D6559]">
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#873B30] transition-colors"
                >
                  <span>XML Sitemap Index</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#873B30] transition-colors"
                >
                  <span>Robots Protocol</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span>JSON-LD: Article, FAQ &amp; WebSite</span>
              </li>
              <li>
                <span>Status: Fully Peer-Referenced</span>
              </li>
              <li>
                <span>Format: Analog Mind Archive</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#9B927D]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6D6559] font-mono">
          <div>
            © {new Date().getFullYear()} The Human Glitch. Senior Editorial Research Capstone.
          </div>
          <div className="flex items-center gap-4">
            <span>Clean Editorial HTML5</span>
            <span aria-hidden="true">·</span>
            <span>WCAG AA Accessible</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#873B30]">No Telemetry</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
