export type RoutePath =
  | '/'
  | '/why-do-we-experience-deja-vu'
  | '/why-does-your-brain-create-false-memories'
  | '/psychology-of-cognitive-biases';

export interface TableOfContentItem {
  id: string;
  title: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AcademicReference {
  citation: string;
  doiOrUrl?: string;
  significance: string;
}

export interface ArticleSection {
  id: string;
  questionTitle: string;
  directAnswer: string;
  bodyParagraphs: string[];
  marginalNote?: string;
  tableData?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
  keyTakeaway?: string;
}

export interface CaseFileArticle {
  slug: string;
  path: RoutePath;
  caseNumber: string;
  accessionDate: string;
  fieldCategory: string;
  readingTime: string;
  mainKeyword: string;
  relatedKeywords: string[];
  seoTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  deck: string;
  heroImage: string;
  heroAlt: string;
  heroCaption: string;
  abstractText: string;
  tableOfContents: TableOfContentItem[];
  sections: ArticleSection[];
  faqs: FAQItem[];
  references: AcademicReference[];
  relatedArticles: {
    title: string;
    path: RoutePath;
    caseNumber: string;
    summary: string;
  }[];
}
