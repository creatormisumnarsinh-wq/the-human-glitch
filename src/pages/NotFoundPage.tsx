import React from 'react';
import { RoutePath } from '../types';
import { ArrowLeft, AlertCircle, FileSearch } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const handleNav = (path: RoutePath, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="bg-[#FAF7EF] border-2 border-dashed border-[#873B30]/60 p-8 sm:p-12 rounded-xs shadow-md space-y-6">
        <div className="inline-flex items-center gap-2 archive-stamp text-xs text-[#873B30]">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>STATUS: 404 DE-INDEXED / EXPUNGED RECORD</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#29251F]">
          Archival Anomaly: Case Record Not Found
        </h1>

        <p className="font-serif italic text-lg text-[#873B30]">
          &ldquo;The record you are seeking does not exist in this psychology archive, or has been
          reclassified under another accession index.&rdquo;
        </p>

        <p className="text-sm font-mono text-[#6D6559] max-w-md mx-auto leading-relaxed">
          The requested URL path could not be resolved against our current catalog of verified
          experimental dossiers.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            onClick={(e) => handleNav('/', e)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#29251F] text-[#FAF7EF] hover:bg-[#873B30] text-xs font-mono uppercase tracking-wider transition-colors rounded-xs shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Archive Catalog</span>
          </a>
        </div>

        <div className="pt-8 border-t border-[#9B927D]/30 text-xs font-mono text-[#6D6559]">
          <span className="block font-bold text-[#29251F] mb-2">Available Verified Dossiers:</span>
          <div className="flex flex-wrap justify-center gap-4 text-[#873B30]">
            <a
              href="/why-do-we-experience-deja-vu"
              onClick={(e) => handleNav('/why-do-we-experience-deja-vu', e)}
              className="hover:underline flex items-center gap-1"
            >
              <FileSearch className="w-3.5 h-3.5" />
              <span>Case File 001 (Déjà Vu)</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/why-does-your-brain-create-false-memories"
              onClick={(e) => handleNav('/why-does-your-brain-create-false-memories', e)}
              className="hover:underline flex items-center gap-1"
            >
              <FileSearch className="w-3.5 h-3.5" />
              <span>Case File 002 (False Memories)</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/psychology-of-cognitive-biases"
              onClick={(e) => handleNav('/psychology-of-cognitive-biases', e)}
              className="hover:underline flex items-center gap-1"
            >
              <FileSearch className="w-3.5 h-3.5" />
              <span>Case File 003 (Cognitive Biases)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
