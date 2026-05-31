import { Injectable, signal } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import { authConfig } from '../config/auth.config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly panelVisible = signal(false);
  readonly user = signal<User | null>(null);
  readonly error = signal('');
  readonly config = authConfig;

  constructor() {
    window.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'h') {
        this.panelVisible.set(true);
      }
    });
  }

  get isAdmin(): boolean {
    const current = this.user();
    if (!current) return false;
    const emailAllowed = !!current.email && authConfig.allowedGoogleEmails.includes(current.email);
    const uidAllowed = authConfig.allowedGoogleUids.length === 0 || authConfig.allowedGoogleUids.includes(current.uid);
    return emailAllowed && uidAllowed;
  }

  async loginWithGoogle(): Promise<void> {
    this.error.set('');
    if (!authConfig.enabled) {
      this.error.set('Firebase Auth is disabled. Configure auth.config.ts before production login.');
      return;
    }

    const app = initializeApp(authConfig.firebase);
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    if (!this.isAllowed(result.user)) {
      await signOut(auth);
      this.user.set(null);
      this.error.set('Google account not allowed for this private admin area.');
      return;
    }
    this.user.set(result.user);
  }

  async logout(): Promise<void> {
    if (authConfig.enabled) {
      await signOut(getAuth());
    }
    this.user.set(null);
  }

  private isAllowed(user: User): boolean {
    const emailAllowed = !!user.email && authConfig.allowedGoogleEmails.includes(user.email);
    const uidAllowed = authConfig.allowedGoogleUids.length === 0 || authConfig.allowedGoogleUids.includes(user.uid);
    return emailAllowed && uidAllowed;
  }
}
