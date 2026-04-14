import { ReactNode } from "react";
import { IconType } from "react-icons";

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

type ReviewProps = {
  title: string;
  icon: string;
  review: string;
};

type ExpCard = {
  starImage: "/one-star.png";
  review: string;
  company?: IconType;
  companyName?: string;
  personName?: string;
  personImage?: string;
  logoColor?: string;
  spanColor?: string;
};

export type { LinkType, SerieProps, ReviewProps, ExpCard };
