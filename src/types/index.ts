// Latest news type
export type NewsItem = {
  title: string;
  date: string;
  image: string;
};

// Cover type

export type CoverType = {
  heading: string;
  mainTitle: string;
  subTitle?: string;
  title: string;
  titleLink: string;
  subTitleLink?: string;
};

// AchievementCardProps
export type AchievementCardProps = {
  id: number;
  title: string;
  date: string;
  image: string;
};
