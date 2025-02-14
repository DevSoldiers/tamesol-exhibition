type Content = {
  name: string;
  description: string;
  icon: string;
};

export type TStandOut = {
  title: string;
  description: string[];
};

export type TCreativeMinds = {
  title: string;
  companies: Content[];
};

export interface IHeroContent {
  title: string;
  subTitle: string;
  signUp: string;
  logIn: string;
  imgSrc: string;
}
