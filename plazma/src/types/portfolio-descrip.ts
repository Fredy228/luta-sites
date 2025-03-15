export type PortfolioDescripType = {
  title: string;
  description: Array<string | string[]>;
  sections: Array<{
    id: number;
    title: string;
    text: Array<string | string[]>;
  }>;
};
