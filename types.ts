
export interface Competitor {
  name: string;
  logo: string;
  positioning: string;
  metrics: {
    seoAuthority: number;
    instagramFollowers: string;
    engagementRate: string;
  };
  strengths: string[];
  weaknesses: string[];
}

export interface KpiData {
  name: string;
  value: number;
  previousValue: number;
}

export interface TimeSeriesData {
  month: string;
  'Omni Astra': number;
  'Industry Average': number;
}

export interface ContentPillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ContentGuideline {
  title: string;
  points: string[];
}

export interface PricingTier {
  name: string;
  level: string;
  price: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

export interface ScheduleItem {
    day: number;
    posts: { type: 'Post' | 'Story' | 'Reel'; idea: string; }[];
}
