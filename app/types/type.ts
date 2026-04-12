type LinkType = {
  name: string;
  href: string;
  id: string;
};

type SerieProps = {
  title: string;
  description: string;
  genre: string;
  imageUrl: string;
  spanColor: string;
  spanTextColor: string;
  id: string;
  year: number;
};

export type { LinkType, SerieProps };
