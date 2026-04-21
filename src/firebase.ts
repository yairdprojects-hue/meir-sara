import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

function requireEnv(name: string): string {
  const v = import.meta.env[name as keyof ImportMetaEnv] as string | undefined;
  if (v === undefined || String(v).trim() === '') {
    throw new Error(
      `חסר משתנה סביבה ${name}. צרו קובץ .env לפי .env.example והשלימו ערכים מ־Firebase Console.`,
    );
  }
  return v.trim();
}

const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID?.trim();

const firebaseConfig: FirebaseOptions = {
  apiKey: requireEnv('VITE_FIREBASE_API_KEY'),
  authDomain: requireEnv('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: requireEnv('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: requireEnv('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: requireEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: requireEnv('VITE_FIREBASE_APP_ID'),
  ...(measurementId ? { measurementId } : {}),
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
