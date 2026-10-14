import React, { useState, useEffect } from 'react';
import { TableOfContentItem } from '../types';
import { ListFilter } from 'lucide-react';

interface TableOfContentsProps {
  items: TableOfContentItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Article Table of Contents"
      className="bg-[#FAF7EF] border border-[#9B927D]/40 p-5 rounded-xs"
    >
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#873B30] font-bold pb-3 border-b border-[#9B927D]/30 mb-3">
        <ListFilter className="w-3.5 h-3.5" />
        <span>Document Outline</span>
      </div>
      <ul className="space-y-2 text-xs font-sans">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                className={`block py-1 transition-colors leading-snug ${
                  isActive
                    ? 'text-[#873B30] font-semibold border-l-2 border-[#873B30] pl-2 -ml-2'
                    : 'text-[#6D6559] hover:text-[#29251F]'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
