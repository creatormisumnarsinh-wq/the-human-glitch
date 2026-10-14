import React, { useState } from 'react';
import { CaseFileArticle, RoutePath } from '../types';
import { TableOfContents } from './TableOfContents';
import {
  ChevronDown,
  ChevronUp,
  Share2,
  Check,
  BookmarkCheck,
  ArrowRight,
  HelpCircle,
  FileText
} from 'lucide-react';

interface ArticleLayoutProps {
  article: CaseFileArticle;
  onNavigate: (path: RoutePath) => void;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({ article, onNavigate }) => {
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1]);
  const [copiedCitation, setCopiedCitation] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleCopyCitation = () => {
    const citation = `The Human Glitch Archive. (2026). "${article.title}". Case File ${article.caseNumber}. Retrieved from https://thehumanglitch.org${article.path}`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2500);
    });
  };

  const handleInternalNav = (path: RoutePath, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="min-h-screen">
      {/* Editorial Breadcrumbs & Accession Bar */}
      <div className="border-b border-[#9B927D]/30 bg-[#FAF7EF]/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#6D6559]">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
            <a
              href="/"
              onClick={(e) => handleInternalNav('/', e)}
              className="hover:text-[#873B30] transition-colors"
            >
              Archive Catalog
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#873B30] font-bold">{article.caseNumber}</span>
          </nav>
          <div className="flex items-center gap-3">
            <span>{article.accessionDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Article Header Container */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="archive-stamp">{article.caseNumber}</span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6D6559]">
            {article.fieldCategory}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#29251F] leading-tight tracking-tight mb-4" style={{ textWrap: 'balance' }}>
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl font-serif text-[#6D6559] italic mb-6 leading-relaxed">
          {article.subtitle}
        </p>

        {/* Deck Lead */}
        <p className="text-base text-[#29251F] leading-relaxed border-t border-[#9B927D]/30 pt-6">
          {article.deck}
        </p>
      </header>

      {/* Hero Visual Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative border border-[#9B927D]/50 bg-[#29251F] overflow-hidden rounded-xs shadow-sm">
          <img
            src={article.heroImage}
            alt={article.heroAlt}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[540px] object-cover filter contrast-[1.03] sepia-[0.08]"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.endsWith('.webp')) {
                target.src = target.src.replace('.webp', '.jpg');
              }
            }}
          />
          <div className="absolute top-3 left-3 bg-[#FAF7EF]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#873B30] border border-[#873B30]/40">
            Archival Exhibit Plate
          </div>
        </div>
        <figcaption className="text-xs font-mono text-[#6D6559] mt-2.5 px-1 leading-relaxed">
          {article.heroCaption}
        </figcaption>
      </div>

      {/* Two-Column Asymmetric Reading Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Long-Form Editorial Content Column (70%) */}
          <div className="lg:col-span-8 space-y-12 reading-prose">
            
            {/* Executive Abstract Box */}
            <section
              aria-label="Executive Scientific Summary"
              className="bg-[#FAF7EF] border-l-2 border-[#873B30] p-6 border-y border-r border-[#9B927D]/30 rounded-xs"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-[#873B30] font-bold mb-2">
                Executive Abstract &amp; Direct Finding
              </div>
              <p className="text-base text-[#29251F] leading-relaxed font-sans mb-0">
                {article.abstractText}
              </p>
            </section>

            {/* Mobile Table of Contents */}
            <div className="lg:hidden">
              <TableOfContents items={article.tableOfContents} />
            </div>

            {/* Answer-First Question Sections */}
            {article.sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 pt-4 border-t border-[#9B927D]/25">
                <div className="text-xs font-mono text-[#873B30] uppercase tracking-wider font-semibold mb-1">
                  Investigation 0{idx + 1}
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F] mb-4">
                  {section.questionTitle}
                </h2>

                {/* Direct Answer Box (AEO Highlight) */}
                <div className="bg-[#FAF7EF] border border-[#873B30]/30 p-4 mb-6 rounded-xs">
                  <div className="text-[11px] font-mono text-[#873B30] uppercase tracking-wider font-bold mb-1">
                    Direct Scientific Answer:
                  </div>
                  <p className="text-base font-medium text-[#29251F] leading-snug mb-0">
                    {section.directAnswer}
                  </p>
                </div>

                {/* Body Paragraphs */}
                <div className="space-y-4 text-base text-[#29251F] leading-relaxed font-sans">
                  {section.bodyParagraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {/* Marginal Annotation Note */}
                {section.marginalNote && (
                  <aside className="my-6 p-3.5 bg-[#FAF7EF]/70 border-l-2 border-[#873B30] text-xs font-mono text-[#6D6559] leading-relaxed">
                    <span className="font-bold text-[#873B30] uppercase block mb-1">
                      Archival Field Note:
                    </span>
                    {section.marginalNote}
                  </aside>
                )}

                {/* Evidence Comparison Table */}
                {section.tableData && (
                  <div className="my-8 overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-[#9B927D]/40 text-xs sm:text-sm bg-[#FAF7EF]">
                      <caption className="text-left font-mono text-xs text-[#6D6559] p-2 bg-[#F1E7D2]/60 border-t border-x border-[#9B927D]/40">
                        {section.tableData.caption}
                      </caption>
                      <thead>
                        <tr className="border-b border-[#9B927D]/40 bg-[#F1E7D2]/80">
                          {section.tableData.headers.map((hdr, hIdx) => (
                            <th
                              key={hIdx}
                              scope="col"
                              className="p-3 font-mono text-xs uppercase tracking-wider text-[#29251F] font-bold"
                            >
                              {hdr}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#9B927D]/30">
                        {section.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#F1E7D2]/40 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3 text-[#29251F] ${cIdx === 0 ? 'font-medium font-serif' : 'font-sans'}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Key Takeaway Callout */}
                {section.keyTakeaway && (
                  <div className="mt-6 p-4 border border-[#9B927D]/40 bg-[#FAF7EF] rounded-xs flex items-start gap-3">
                    <BookmarkCheck className="w-5 h-5 text-[#873B30] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-xs uppercase text-[#873B30] font-bold block">
                        Core Takeaway
                      </span>
                      <p className="text-sm font-sans text-[#29251F] mb-0 mt-0.5">
                        {section.keyTakeaway}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* FAQ Section */}
            <section id="faq-section" className="scroll-mt-24 pt-8 border-t border-[#9B927D]/30">
              <div className="flex items-center gap-2 text-xs font-mono text-[#873B30] uppercase tracking-wider font-semibold mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>Reference Inquiry</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F] mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm font-mono text-[#6D6559] mb-6">
                Verified answers to the most common queries surrounding {article.mainKeyword}.
              </p>

              <div className="space-y-3">
                {article.faqs.map((faq, index) => {
                  const isOpen = openFaqIndices.includes(index);
                  return (
                    <div
                      key={index}
                      className="border border-[#9B927D]/40 bg-[#FAF7EF] rounded-xs overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif font-semibold text-base sm:text-lg text-[#29251F] hover:text-[#873B30] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#873B30] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#6D6559] shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm font-sans text-[#29251F] leading-relaxed border-t border-[#9B927D]/20 bg-[#F1E7D2]/20">
                          <p className="mb-0">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Academic References Section */}
            <section id="research-references" className="scroll-mt-24 pt-8 border-t border-[#9B927D]/30">
              <div className="text-xs font-mono text-[#873B30] uppercase tracking-wider font-semibold mb-1">
                Scientific Citations
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F] mb-4">
                Archival Research References
              </h2>
              <div className="space-y-4">
                {article.references.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF7EF] border border-[#9B927D]/40 rounded-xs text-xs font-mono leading-relaxed"
                  >
                    <p className="text-[#29251F] font-semibold mb-1">
                      [{idx + 1}] {ref.citation}
                    </p>
                    <p className="text-[#6D6559] mb-0 italic">
                      Significance: {ref.significance}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Case Files (Cross-Linking) */}
            <section className="pt-10 border-t border-[#9B927D]/30">
              <div className="text-xs font-mono uppercase tracking-widest text-[#873B30] font-bold mb-3">
                Related Archival Dossiers
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.relatedArticles.map((rel, idx) => (
                  <a
                    key={idx}
                    href={rel.path}
                    onClick={(e) => handleInternalNav(rel.path, e)}
                    className="group block p-4 bg-[#FAF7EF] border border-[#9B927D]/40 hover:border-[#873B30] transition-colors rounded-xs"
                  >
                    <span className="text-[11px] font-mono text-[#873B30] uppercase tracking-wider block mb-1">
                      {rel.caseNumber}
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#29251F] group-hover:text-[#873B30] transition-colors mb-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#6D6559] line-clamp-2 mb-3">
                      {rel.summary}
                    </p>
                    <span className="text-xs font-mono text-[#873B30] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Open Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </section>

          </div>

          {/* Sticky Right Marginal Rail (30%) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <TableOfContents items={article.tableOfContents} />

            {/* Archival Case Specimen Card */}
            <div className="bg-[#FAF7EF] border border-[#9B927D]/40 p-5 rounded-xs space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#873B30] font-bold pb-2 border-b border-[#9B927D]/30">
                Archival Record Specimen
              </div>
              <dl className="text-xs font-mono space-y-2 text-[#6D6559]">
                <div className="flex justify-between">
                  <dt className="text-[#9B927D]">Record Code:</dt>
                  <dd className="text-[#29251F] font-bold">{article.caseNumber}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#9B927D]">Peer Status:</dt>
                  <dd className="text-[#29251F]">Verified Literature</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#9B927D]">Reading Cadence:</dt>
                  <dd className="text-[#29251F]">{article.readingTime}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#9B927D]">Canonical Route:</dt>
                  <dd className="text-[#29251F] truncate max-w-[150px]">{article.path}</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={handleCopyCitation}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono uppercase tracking-wider bg-[#F1E7D2] hover:bg-[#29251F] hover:text-[#FAF7EF] text-[#29251F] border border-[#9B927D]/50 transition-colors cursor-pointer rounded-xs"
              >
                {copiedCitation ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Citation Copied!</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5" />
                    <span>Copy Citation</span>
                  </>
                )}
              </button>
            </div>

            {/* Curatorial Note */}
            <div className="p-4 bg-[#F1E7D2]/50 border-l border-[#873B30] text-xs font-mono text-[#6D6559] leading-relaxed">
              <p className="mb-0">
                Archival notice: All citations and empirical paradigms correspond to peer-reviewed
                cognitive psychology and neuroscience literature. No clinical medical advice is implied.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </article>
  );
};
