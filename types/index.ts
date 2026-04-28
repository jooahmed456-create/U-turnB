export type FreelanceField = 'design' | 'writing' | 'programming' | 'marketing';
export type QuizAnswer = 'A' | 'B' | 'C' | 'D';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export interface MediaItem {
  id: string;
  outlet: string;
  outletAr: string;
  title: string;
  titleAr: string;
  url: string;
  type: string;
  publishedAt: string;
  summary: string;
  summaryAr: string;
}

export interface LearningResource {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  url: string;
  category: string;
  fields: FreelanceField[];
  isFree: boolean;
  language: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  nameAr: string;
  field: FreelanceField;
  tagline: string;
  taglineAr: string;
  story: string;
  storyAr: string;
  achievement: string;
  achievementAr: string;
  imageUrl?: string;
}

export interface QuizResult {
  field: FreelanceField;
  scores: Record<FreelanceField, number>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
