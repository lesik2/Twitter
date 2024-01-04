export const firebaseConfig = {
  apiKey: process.env.VITE_APP_KEY as string,
  authDomain: process.env.VITE_APP_AUTH_DOMAIN as string,
  projectId: process.env.VITE_APP_PROJECT_ID as string,
  storageBucket: process.env.VITE_APP_STORAGE_BUCKET as string,
  messagingSenderId: process.env.VITE_APP_MESSAGING_SENDER_ID as string,
  appId: process.env.VITE_APP_ID as string,
} as const;
export const COLLECTIONS = {
  USERS: 'users',
  TWEETS: 'tweets',
} as const;
