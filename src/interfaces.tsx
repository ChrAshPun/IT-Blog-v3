export interface IArticle {
  category: string;
  title: string;
  instructions: IInstructions[];
  notes?: string[];
}

interface IInstructions {
  objective: string;
  overview: string;
  steps: string[];
  imgSrc?: string;
  imgAlt?: string;
}