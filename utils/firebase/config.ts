import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_PROJECT_ID,
} from '@env';

console.log('ens', REACT_APP_API_KEY);
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth, app };
