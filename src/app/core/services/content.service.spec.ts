import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';

describe('ContentService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
  });

  it('adds editable projects to the visible project list', () => {
    const service = TestBed.inject(ContentService);
    const initial = service.projects().length;

    service.addProject({
      title: 'Demo project',
      problem: 'Manual task',
      solution: 'Automated flow',
      tools: 'Angular, Firebase',
      businessValue: 'Saves time',
      targetClient: 'Owner',
      status: 'planned',
      image: '',
    });

    expect(service.projects().length).toBe(initial + 1);
    expect(service.projects().at(-1)?.title.en).toBe('Demo project');
  });

  it('adds editable reviews', () => {
    const service = TestBed.inject(ContentService);
    const initial = service.reviews().length;

    service.addReview({ author: 'Client', role: 'Founder', quote: 'Great automation help', avatar: '' });

    expect(service.reviews().length).toBe(initial + 1);
    expect(service.reviews().at(-1)?.quote.es).toBe('Great automation help');
  });
});
