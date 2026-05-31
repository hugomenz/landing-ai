export interface FirebaseClientConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface AuthConfig {
  enabled: boolean;
  adminShortcut: string;
  allowedGoogleEmails: string[];
  allowedGoogleUids: string[];
  firebase: FirebaseClientConfig;
}

export const authConfig: AuthConfig = {
  enabled: false,
  adminShortcut: 'Ctrl+Alt+H',
  // Configure only Hugo's Google account here or, preferably, inject this via deployment env replacement.
  allowedGoogleEmails: ['hugomenz@example.com'],
  // Optional: add the Firebase Auth UID for a stronger owner check after the first login.
  allowedGoogleUids: [],
  firebase: {
    // Firebase client keys are public identifiers, but keep real values out of git and restrict domains in Firebase.
    apiKey: 'FIREBASE_API_KEY',
    authDomain: 'FIREBASE_AUTH_DOMAIN',
    projectId: 'FIREBASE_PROJECT_ID',
    storageBucket: 'FIREBASE_STORAGE_BUCKET',
    messagingSenderId: 'FIREBASE_MESSAGING_SENDER_ID',
    appId: 'FIREBASE_APP_ID',
  },
};
