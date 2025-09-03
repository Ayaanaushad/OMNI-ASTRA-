
import React from 'react';
import type { Competitor, KpiData, TimeSeriesData, ContentPillar, ContentGuideline, PricingTier, ScheduleItem } from './types';
import { BriefcaseIcon, DiamondIcon, EyeIcon, FeatherIcon, SparklesIcon, TargetIcon, Volume2Icon } from './components/Icons';

export const sections = [
  { id: 'summary', name: 'Executive Summary', icon: EyeIcon },
  { id: 'competitors', name: 'Competitor Analysis', icon: TargetIcon },
  { id: 'schedule', name: 'Posting Schedule', icon: BriefcaseIcon },
  { id: 'content', name: 'Content System', icon: FeatherIcon },
  { id: 'kpis', name: 'Measurement & KPIs', icon: SparklesIcon },
  { id: 'pricing', name: 'Pricing Packages', icon: DiamondIcon },
];

export const executiveSummaryPoints = [
  {
    title: "Digital Presence Gap",
    content: "Omni Astra's digital footprint is nascent, lacking the authority and reach of global leaders. SEO is critically under-optimized, and social media engagement is sporadic.",
    icon: TargetIcon
  },
  {
    title: "Inconsistent Branding",
    content: "The brand voice and visual identity are inconsistent across platforms, failing to communicate a cohesive luxury narrative that resonates with the target HNI audience.",
    icon: Volume2Icon
  },
  {
    title: "Untapped Market Potential",
    content: "The Indian luxury market is expanding rapidly. A robust digital strategy can capture significant market share and establish Omni Astra as a category leader.",
    icon: SparklesIcon
  },
  {
    title: "Actionable Roadmap",
    content: "This proposal outlines a 90-day strategic roadmap to elevate the brand, build a community, and drive measurable conversions through targeted content and performance marketing.",
    icon: BriefcaseIcon
  }
];

export const competitors: Competitor[] = [
  {
    name: 'Safilo Group',
    logo: 'https://www.safilogroup.com/themes/custom/safilo/logo.svg',
    positioning: 'Global leader with a vast portfolio of licensed and proprietary brands. Focus on heritage, craftsmanship, and widespread distribution.',
    metrics: {
      seoAuthority: 85,
      instagramFollowers: '120k+',
      engagementRate: '0.8%',
    },
    strengths: ['Strong B2B relationships', 'Diverse brand portfolio', 'Established global supply chain'],
    weaknesses: ['Slower to adopt DTC trends', 'Brand messaging can be diluted across portfolio'],
  },
  {
    name: 'Kering Eyewear',
    logo: 'https://www.keringeyewear.com/images/kering_eyewear_logo_white.svg',
    positioning: 'Luxury-focused disruptor, leveraging high-fashion brand equity. Strong emphasis on design innovation and brand storytelling.',
    metrics: {
      seoAuthority: 78,
      instagramFollowers: '85k+',
      engagementRate: '1.5%',
    },
    strengths: ['Synergy with Kering fashion houses', 'Strong brand aspirational value', 'Effective influencer marketing'],
    weaknesses: ['Higher price points limit market', 'Dependent on fashion brand performance'],
  },
  {
    name: 'Luxottica',
    logo: 'https://www.luxottica.com/sites/luxottica.com/files/styles/logo_header_lg/public/2022-09/essilorluxottica-logo_0.png?itok=2P-8A8Sj',
    positioning: 'Vertically integrated behemoth controlling manufacturing, brands, and retail. Focus on market saturation and brand ubiquity.',
    metrics: {
      seoAuthority: 92,
      instagramFollowers: '250k+',
      engagementRate: '0.5%',
    },
    strengths: ['Massive retail footprint (LensCrafters, Sunglass Hut)', 'Owns iconic brands (Ray-Ban, Oakley)', 'Unmatched market control'],
    weaknesses: ['Perceived as corporate/less exclusive', 'Customer service challenges at scale'],
  },
];

export const omniAstraData: Competitor = {
    name: 'Omni Astra',
    logo: '', // No logo provided, will use text
    positioning: 'Emerging Indian luxury brand focused on unique designs and lifestyle positioning.',
    metrics: {
      seoAuthority: 25,
      instagramFollowers: '5k',
      engagementRate: '2.1%',
    },
    strengths: ['Niche appeal', 'High engagement with small community', 'Agile and adaptable'],
    weaknesses: ['Low brand awareness', 'Weak SEO and content strategy', 'Limited distribution network'],
};


export const postingScheduleData: ScheduleItem[] = [
  { day: 1, posts: [{ type: 'Post', idea: 'Brand Manifesto: "Vision Redefined"' }] },
  { day: 2, posts: [{ type: 'Story', idea: 'Q&A with the Founder' }, { type: 'Story', idea: 'Poll: Which frame style is your favorite?' }] },
  { day: 3, posts: [{ type: 'Reel', idea: 'The making of our "Aura" frame' }] },
  { day: 4, posts: [{ type: 'Post', idea: 'Style Guide: Pairing eyewear with formal wear' }] },
  { day: 5, posts: [{ type: 'Story', idea: 'Behind the scenes at a photoshoot' }, { type: 'Story', idea: 'User-generated content feature' }] },
  { day: 6, posts: [{ type: 'Post', idea: 'Influencer Collab: @LuxuryLifestyleIndia' }] },
  { day: 7, posts: [{ type: 'Story', idea: 'Weekly Roundup & Sneak Peek' }] },
  { day: 8, posts: [{ type: 'Reel', idea: 'A day in the life with Omni Astra eyewear' }] },
  { day: 9, posts: [{ type: 'Post', idea: 'Material Spotlight: Italian Acetate' }] },
  { day: 10, posts: [{ type: 'Story', idea: '"Ask our Stylist" session' }] },
  { day: 11, posts: [{ type: 'Post', idea: 'Celebrating Indian Artisans in our supply chain' }] },
  { day: 12, posts: [{ type: 'Story', idea: 'Unboxing experience' }, { type: 'Story', idea: 'Countdown to new collection' }] },
  { day: 13, posts: [{ type: 'Reel', idea: 'Transition: From day to night look' }] },
  { day: 14, posts: [{ type: 'Post', idea: 'The Omni Astra Lifestyle: Weekend vibes' }] },
];

export const roadmapData = [
  { phase: 'Phase 1 (Days 1-30)', title: 'Foundation & Brand Clarity', description: 'Audit cleanup, brand voice finalization, content pillar establishment, and high-quality asset production.' },
  { phase: 'Phase 2 (Days 31-60)', title: 'Community Building & Engagement', description: 'Launch influencer program, run engagement campaigns, and build a consistent content cadence.' },
  { phase: 'Phase 3 (Days 61-90)', title: 'Conversion & Growth Hacking', description: 'Implement paid ad funnels, optimize website for conversions, and launch a PR outreach campaign.' },
];

// FIX: Replaced direct function calls with React.createElement to avoid type inference issues with React.FC possibly returning a Promise.
export const contentPillars: ContentPillar[] = [
  { title: 'The Art of Craft', description: 'Highlighting the meticulous design, premium materials, and skilled artisanship behind every piece.', icon: React.createElement(FeatherIcon, {}) },
  { title: 'Visionary Lifestyle', description: 'Showcasing the aspirational world of the Omni Astra customer—luxury travel, culture, and success.', icon: React.createElement(EyeIcon, {}) },
  { title: 'Design & Innovation', description: 'Exploring our unique design philosophy, trendsetting styles, and the innovation in our eyewear technology.', icon: React.createElement(SparklesIcon, {}) },
];

export const voiceGuidelines: ContentGuideline = {
  title: "Brand Voice & Tone",
  points: [
    "**Sophisticated & Assured:** Use elegant language. Avoid slang and hyperbole.",
    "**Evocative & Sensory:** Describe feelings, textures, and light. Appeal to the senses.",
    "**Exclusive & Insider:** Create a sense of a privileged community. Use 'we invite you', 'discover'.",
    "**Intelligent & Cultured:** Reference art, design, and culture. Assume a knowledgeable audience."
  ]
};

export const visualGuidelines: ContentGuideline = {
  title: "Visual Identity",
  points: [
    "**Color Palette:** Primary: Deep Charcoal, Off-White. Accent: Champagne Gold. Secondary: Muted neutrals.",
    "**Typography:** Headers: A modern, elegant Serif (e.g., Playfair Display). Body: A clean, legible Sans-Serif (e.g., Inter).",
    "**Photography:** High-contrast, moody lighting. Focus on texture and detail. Lifestyle shots should feel authentic and unposed.",
    "**Composition:** Minimalist and clean. Ample negative space. Focus on a single, heroic subject.",
  ]
};

export const awarenessKpis: KpiData[] = [
  { name: 'Instagram Reach', value: 150000, previousValue: 25000 },
  { name: 'Website Sessions', value: 25000, previousValue: 4000 },
  { name: 'Brand Mentions', value: 500, previousValue: 80 },
];
export const engagementKpis: KpiData[] = [
  { name: 'Engagement Rate', value: 3.5, previousValue: 2.1 },
  { name: 'Post Saves', value: 2500, previousValue: 300 },
  { name: 'Story Replies', value: 800, previousValue: 150 },
];
export const conversionKpis: KpiData[] = [
  { name: 'Website Clicks from IG', value: 1200, previousValue: 200 },
  { name: 'Add to Carts', value: 400, previousValue: 50 },
  { name: 'Conversions', value: 150, previousValue: 15 },
];

export const followersGrowthData: TimeSeriesData[] = [
    { month: 'Jan', 'Omni Astra': 4000, 'Industry Average': 10000 },
    { month: 'Feb', 'Omni Astra': 4200, 'Industry Average': 10200 },
    { month: 'Mar', 'Omni Astra': 4500, 'Industry Average': 10500 },
    { month: 'Apr', 'Omni Astra': 5000, 'Industry Average': 11000 },
    { month: 'May', 'Omni Astra': 5100, 'Industry Average': 11200 },
    { month: 'Jun', 'Omni Astra': 5300, 'Industry Average': 11500 },
];
export const websiteTrafficData: TimeSeriesData[] = [
    { month: 'Jan', 'Omni Astra': 2000, 'Industry Average': 50000 },
    { month: 'Feb', 'Omni Astra': 2100, 'Industry Average': 51000 },
    { month: 'Mar', 'Omni Astra': 2500, 'Industry Average': 52000 },
    { month: 'Apr', 'Omni Astra': 3000, 'Industry Average': 55000 },
    { month: 'May', 'Omni Astra': 4000, 'Industry Average': 56000 },
    { month: 'Jun', 'Omni Astra': 4100, 'Industry Average': 58000 },
];


export const pricingTiers: PricingTier[] = [
  {
    name: 'Digital Lite',
    level: 'Foundation',
    price: '₹75,000 / month',
    description: 'Essential social media management to build a consistent and professional brand presence.',
    features: [
      'Social Media Strategy',
      '2 Platforms (IG, LI)',
      '12 Posts / month',
      'Basic Community Management',
      'Monthly Performance Report',
    ],
    isFeatured: false,
  },
  {
    name: 'Digital Pro',
    level: 'Growth',
    price: '₹1,50,000 / month',
    description: 'Comprehensive digital strategy for aggressive growth, engagement, and community building.',
    features: [
      'Everything in Lite, plus:',
      'Full Content Production (Photo/Video)',
      'Influencer Marketing (Tier 2/3)',
      'Paid Ad Management (up to ₹50k spend)',
      'SEO & Blog Content',
      'Bi-Weekly Strategy Calls',
    ],
    isFeatured: true,
  },
  {
    name: 'Digital Elite',
    level: 'Dominance',
    price: '₹2,75,000 / month',
    description: 'An all-inclusive partnership for market leadership, integrating all facets of digital marketing.',
    features: [
      'Everything in Pro, plus:',
      'Omnichannel Strategy (Email, PR)',
      'Celebrity/Tier 1 Influencer Seeding',
      'Advanced SEO & CRO',
      'Full-funnel Ad Management',
      'Dedicated Account Director',
    ],
    isFeatured: false,
  },
];