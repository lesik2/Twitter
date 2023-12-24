export const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_KEY as string,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_APP_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_APP_ID as string,
};
