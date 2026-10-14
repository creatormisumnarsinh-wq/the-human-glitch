import React from 'react';
import { RoutePath } from '../types';
import { ARTICLES } from '../data/articles';
import { ArrowRight, BookOpen, Compass, Eye, Brain, Library } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleNav = (path: RoutePath, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const caseFilesList = [
    ARTICLES.dejaVu,
    ARTICLES.falseMemories,
    ARTICLES.cognitiveBiases,
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Archival Masthead Sub-Strip */}
      <section className="border-b border-[#9B927D]/40 bg-[#FAF7EF]/60 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs font-mono text-[#6D6559] gap-3">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#873B30]">DOSSIER VOL. 01</span>
            <span aria-hidden="true">·</span>
            <span>ARCHIVAL PSYCHOLOGY DISPATCH</span>
            <span aria-hidden="true">·</span>
            <span>FACULTY CAPSTONE</span>
          </div>
          <div className="flex items-center gap-2">
            <span>INDEX NO. Ψ-1974-2026</span>
            <span className="archive-stamp text-[10px]">DEPT. OF COGNITIVE INQUIRY</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="archive-stamp text-xs">RESEARCH ARCHIVE</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#873B30] font-semibold">
                HUMAN PSYCHOLOGY INVESTIGATION
              </span>
            </div>

            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#29251F] tracking-tight leading-[1.12]">
                What if your mind is an{' '}
                <span className="relative inline-block">
                  <span className="editorial-underline text-[#873B30]">unreliable</span>
                </span>{' '}
                witness?
              </h1>
              <div className="mt-3 text-sm font-serif italic text-[#873B30] flex items-center gap-2">
                <span>[Annotated research finding: Recollection is creative reconstruction, not playback.]</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#6D6559] font-sans leading-relaxed max-w-2xl">
              We experience the world as a steady, objective stream of sensory truth. But cognitive
              neuroscience reveals a stranger reality: human psychology relies on evolutionary shortcuts,
              perceptual delays, and synaptic rewrites that quietly construct the illusion of certainty.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/why-do-we-experience-deja-vu"
                onClick={(e) => handleNav('/why-do-we-experience-deja-vu', e)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#29251F] text-[#FAF7EF] hover:bg-[#873B30] text-sm font-mono uppercase tracking-wider transition-colors rounded-xs cursor-pointer shadow-sm"
              >
                <span>Examine Case File 001</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#case-files-index"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#9B927D]/60 hover:border-[#29251F] text-[#29251F] text-sm font-mono uppercase tracking-wider transition-colors rounded-xs bg-[#FAF7EF]/60"
              >
                <span>Browse All 3 Files</span>
              </a>
            </div>

            {/* Micro Metadata Strip */}
            <div className="pt-4 border-t border-[#9B927D]/30 flex flex-wrap items-center gap-6 text-xs font-mono text-[#6D6559]">
              <div>
                <span className="text-[#9B927D]">Archive Coverage:</span> Déjà Vu, False Memory, Biases
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <span className="text-[#9B927D]">Evidence:</span> 100% Peer-Reviewed Sources
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Vintage Psychological Document Collage */}
          <div className="lg:col-span-5">
            <div className="relative p-2 bg-[#FAF7EF] border border-[#9B927D] shadow-md rounded-xs">
              <div className="relative border border-[#9B927D]/40 overflow-hidden bg-[#29251F]">
                <img
                  src="/images/homepage-archive-collage.webp"
                  alt="Archival psychological research collage showing study notes, neural diagrams, and pattern recognition equipment"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover filter contrast-[1.04]"
                />
                <div className="absolute top-2 right-2 bg-[#873B30] text-[#FAF7EF] text-[10px] font-mono uppercase px-2 py-0.5 tracking-wider font-bold">
                  PLATE 01-A
                </div>
              </div>
              <div className="p-3 bg-[#FAF7EF] text-xs font-mono text-[#6D6559] border-t border-[#9B927D]/30">
                <div className="text-[#29251F] font-bold">ARCHIVAL ARTIFACT: STUDY 14-B</div>
                <div>Pattern recognition &amp; neural processing latency in visual perception. Dept. of Psychology Research (Nov 1968).</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Three Pillars: Memory, Perception, and Behaviour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#9B927D]/40 pt-12 pb-6">
          <div className="max-w-2xl mb-10">
            <div className="archive-stamp text-xs mb-2">TAXONOMY OF THE GLITCH</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F]">
              Three Pillars of Human Cognitive Vulnerability
            </h2>
            <p className="text-sm font-mono text-[#6D6559] mt-2">
              How the human brain prioritizes speed and survival over absolute documentary precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Perception */}
            <div className="p-6 bg-[#FAF7EF] border border-[#9B927D]/40 rounded-xs space-y-3 relative group hover:border-[#873B30] transition-colors">
              <div className="w-9 h-9 flex items-center justify-center bg-[#F1E7D2] text-[#873B30] rounded-xs font-mono font-bold text-sm">
                <Eye className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-[#873B30] uppercase tracking-wider font-semibold">
                Pillar I · Temporal Perception
              </div>
              <h3 className="text-xl font-serif font-bold text-[#29251F]">
                Desynchronized Recognition
              </h3>
              <p className="text-sm text-[#6D6559] leading-relaxed">
                When sensory processing channels experience microsecond delays, the brain misinterprets
                a present moment as a memory from the distant past. Déjà vu is the metacognitive system
                catching the transmission glitch in real time.
              </p>
              <div className="pt-2 text-xs font-mono text-[#873B30] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Investigated in Case 001</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 2: Memory */}
            <div className="p-6 bg-[#FAF7EF] border border-[#9B927D]/40 rounded-xs space-y-3 relative group hover:border-[#873B30] transition-colors">
              <div className="w-9 h-9 flex items-center justify-center bg-[#F1E7D2] text-[#873B30] rounded-xs font-mono font-bold text-sm">
                <Brain className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-[#873B30] uppercase tracking-wider font-semibold">
                Pillar II · Constructive Memory
              </div>
              <h3 className="text-xl font-serif font-bold text-[#29251F]">
                The Malleability of Recall
              </h3>
              <p className="text-sm text-[#6D6559] leading-relaxed">
                Memory is not a video recording. Each time a scene is recalled, the synaptic trace
                destabilizes through biochemical reconsolidation, absorbing suggestions, emotional
                states, and post-event discussions before saving anew.
              </p>
              <div className="pt-2 text-xs font-mono text-[#873B30] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Investigated in Case 002</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Pillar 3: Behaviour */}
            <div className="p-6 bg-[#FAF7EF] border border-[#9B927D]/40 rounded-xs space-y-3 relative group hover:border-[#873B30] transition-colors">
              <div className="w-9 h-9 flex items-center justify-center bg-[#F1E7D2] text-[#873B30] rounded-xs font-mono font-bold text-sm">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-[#873B30] uppercase tracking-wider font-semibold">
                Pillar III · Cognitive Heuristics
              </div>
              <h3 className="text-xl font-serif font-bold text-[#29251F]">
                Evolutionary Shortcuts
              </h3>
              <p className="text-sm text-[#6D6559] leading-relaxed">
                To conserve metabolic energy in a perilous environment, our brains rely on fast
                heuristic shortcuts. In modern society, these shortcuts manifest as confirmation bias,
                anchoring, and sunk cost traps that distort rational judgment.
              </p>
              <div className="pt-2 text-xs font-mono text-[#873B30] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Investigated in Case 003</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Files Section */}
      <section id="case-files-index" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="border-t border-[#9B927D]/40 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="archive-stamp text-xs mb-2">PRIMARY DOSSIERS</div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#29251F]">
                The Three Investigative Case Files
              </h2>
            </div>
            <p className="text-xs font-mono text-[#6D6559] max-w-sm">
              Long-form peer-referenced research articles. Full working tables of contents, FAQs, and
              neuroscience citations included.
            </p>
          </div>

          <div className="space-y-12">
            {caseFilesList.map((article, index) => (
              <div
                key={article.slug}
                className="bg-[#FAF7EF] border border-[#9B927D]/40 p-6 sm:p-8 rounded-xs shadow-xs hover:border-[#873B30] transition-colors group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Visual Frame */}
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="relative border border-[#9B927D]/40 overflow-hidden bg-[#29251F] rounded-xs aspect-video">
                      <img
                        src={article.heroImage}
                        alt={article.heroAlt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-102 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.currentTarget;
                          // Fallback to jpg if webp fails
                          if (target.src.endsWith('.webp')) {
                            target.src = target.src.replace('.webp', '.jpg');
                          }
                        }}
                      />
                      <div className="absolute bottom-2 left-2 bg-[#FAF7EF]/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-mono uppercase text-[#873B30] border border-[#873B30]/30 font-bold">
                        {article.caseNumber}
                      </div>
                    </div>
                  </div>

                  {/* Content Frame */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-[#873B30]">
                      <span className="font-bold">{article.caseNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#6D6559]">{article.readingTime}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#9B927D] uppercase">{article.fieldCategory}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F] group-hover:text-[#873B30] transition-colors">
                      <a
                        href={article.path}
                        onClick={(e) => handleNav(article.path, e)}
                        className="hover:underline"
                      >
                        {article.title}
                      </a>
                    </h3>

                    <p className="text-base text-[#6D6559] font-sans leading-relaxed">
                      {article.abstractText}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <a
                        href={article.path}
                        onClick={(e) => handleNav(article.path, e)}
                        className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#873B30] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        <span>Open Complete Case File</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <span className="text-xs font-mono text-[#9B927D]">
                        {article.sections.length} Key Sub-Sections + FAQs
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Essay / Curator's Introduction */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7EF] border-t-2 border-[#873B30] border-x border-b border-[#9B927D]/40 p-8 sm:p-12 rounded-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#9B927D]/30 pb-4">
            <span className="archive-stamp text-xs">CURATORIAL PROSPECTUS</span>
            <span className="text-xs font-mono text-[#6D6559]">COLLEGE CAPSTONE RESEARCH REPORT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#29251F]">
            The Architecture of Misperception: A College Capstone Project
          </h2>

          <div className="space-y-4 text-base font-sans text-[#29251F] leading-relaxed">
            <p>
              Human beings navigate reality with an unquestioning trust in their sensory organs and
              memories. When we witness an accident, recall our first day of school, or form an opinion
              on a complex political debate, we assume our brain functions like a pristine laboratory
              recorder: impartial, objective, and accurate.
            </p>
            <p>
              Yet the foundational consensus of 21st-century cognitive science and experimental
              neurobiology reveals the opposite: our mental faculties are constructive, heuristic-driven,
              and deeply vulnerable to subtle suggestion. From the millisecond perceptual delays that
              induce déjà vu, to the synaptic reconsolidation mechanisms that rewrite our most cherished
              childhood memories, human cognition is an ongoing negotiation between evolutionary survival
              needs and factual accuracy.
            </p>
            <p className="font-serif italic text-lg text-[#873B30] border-y border-[#9B927D]/30 py-3">
              &ldquo;The goal of The Human Glitch is not to induce nihilism about human reason, but to
              cultivate metacognitive humility: the quiet wisdom of recognizing our own mind’s built-in
              biases and errors before casting judgment.&rdquo;
            </p>
            <p>
              Every case file in this digital archive has been grounded exclusively in published,
              peer-reviewed literature from cognitive pioneers including Elizabeth Loftus, Amos
              Tversky, Daniel Kahneman, Anne Cleary, and Daniel Schacter. By examining where the human
              mind glitched in controlled laboratories, we learn how to see more clearly in everyday
              life.
            </p>
          </div>

          <div className="pt-6 border-t border-[#9B927D]/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6D6559]">
            <div>
              <span className="font-bold text-[#29251F]">Author / Researcher:</span> Senior Editorial Art Director &amp; Cognitive Science Major
            </div>
            <div>
              <span className="font-bold text-[#29251F]">Academic Advisor:</span> Dept. of Cognitive Science
            </div>
          </div>
        </div>
      </section>

      {/* Psychology Facts & Curiosity Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#9B927D]/40 bg-[#FAF7EF] p-8 rounded-xs">
          <div className="text-xs font-mono uppercase tracking-widest text-[#873B30] font-bold mb-4">
            Interesting Psychology Facts from the Archive
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono text-[#6D6559]">
            <div className="p-4 bg-[#F1E7D2]/40 border border-[#9B927D]/30">
              <span className="text-[#873B30] font-bold block mb-1">01 / DÉJÀ VU DECAY</span>
              Déjà vu incidence peaks between ages 15 and 25, declining steadily with age as frontal
              conflict-detection sensitivity changes.
            </div>
            <div className="p-4 bg-[#F1E7D2]/40 border border-[#9B927D]/30">
              <span className="text-[#873B30] font-bold block mb-1">02 / RECONSOLIDATION</span>
              Every time you recall an autobiographical memory, you chemically unlock its synaptic
              trace, subtly modifying it before saving it again.
            </div>
            <div className="p-4 bg-[#F1E7D2]/40 border border-[#9B927D]/30">
              <span className="text-[#873B30] font-bold block mb-1">03 / BLIND SPOT</span>
              The "bias blind spot" means individuals spot cognitive biases in others with ease while
              believing themselves completely objective.
            </div>
            <div className="p-4 bg-[#F1E7D2]/40 border border-[#9B927D]/30">
              <span className="text-[#873B30] font-bold block mb-1">04 / THE DRM EFFECT</span>
              When read a list of bed, tired, dream, and nap, up to 80% of healthy adults swear under
              oath they heard the word "sleep".
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
