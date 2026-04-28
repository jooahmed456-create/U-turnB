const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message ?? 'API error');
  return json.data as T;
}

import type { LearningResource, MediaItem, SuccessStory, FreelanceField, QuizAnswer, QuizResult, ContactFormData } from '@/types';

export const api = {
  getMedia: () => request<MediaItem[]>('/media'),
  getResources: (field?: FreelanceField) =>
    request<LearningResource[]>(`/resources${field ? `?field=${field}` : ''}`),
  getSuccessStories: () => request<SuccessStory[]>('/success-stories'),
  submitContact: (data: ContactFormData) =>
    request('/contact', { method: 'POST', body: JSON.stringify(data) }),
  submitQuiz: (answers: QuizAnswer[]) =>
    request<{ id: string; result: QuizResult; recordedAt: string }>(
      '/quiz-results',
      { method: 'POST', body: JSON.stringify({ answers }) }
    ),
};
