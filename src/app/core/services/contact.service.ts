import { Injectable } from '@angular/core';
import { ContactSubmission } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  submitContactRequest(submission: ContactSubmission): Promise<{ success: boolean }> {
    console.info('Contact service placeholder', submission);
    return Promise.resolve({ success: true });
  }
}
