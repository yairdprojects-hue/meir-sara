import { initializeApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

function readEnv(name: string): string | undefined {
  const v = import.meta.env[name as keyof ImportMetaEnv];
  if (v === undefined || v === null) return undefined;
  const s = String(v).trim();
  return s === '' ? undefined : s;
}

const apiKey = readEnv('VITE_FIREBASE_API_KEY');
const authDomain = readEnv('VITE_FIREBASE_AUTH_DOMAIN');
const projectId = readEnv('VITE_FIREBASE_PROJECT_ID');
const storageBucket = readEnv('VITE_FIREBASE_STORAGE_BUCKET');
const messagingSenderId = readEnv('VITE_FIREBASE_MESSAGING_SENDER_ID');
const appId = readEnv('VITE_FIREBASE_APP_ID');
const measurementId = readEnv('VITE_FIREBASE_MEASUREMENT_ID');

const firebaseConfig: FirebaseOptions | null =
  apiKey && authDomain && projectId && storageBucket && messagingSenderId && appId
    ? {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId,
        ...(measurementId ? { measurementId } : {}),
      }
    : null;

export const isFirebaseConfigured = firebaseConfig !== null;

let db: Firestore | null = null;
if (firebaseConfig) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };

if (import.meta.env.DEV && !isFirebaseConfigured) {
  console.warn(
    '[Firebase] חסרים משתני VITE_FIREBASE_* ב־.env — טופס יצירת הקשר לא ישמור ל־Firestore עד שיוגדרו.',
  );
}
