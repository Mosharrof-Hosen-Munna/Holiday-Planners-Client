const firebaseConfig = {
  // apiKey: "AIzaSyD-Bm8_tetUn47KpJXCMGLAOupo0sa8QZY",
  // authDomain: "holiday-planners.firebaseapp.com",
  // projectId: "holiday-planners",
  // storageBucket: "holiday-planners.appspot.com",
  // messagingSenderId: "9024926726",
  // appId: "1:9024926726:web:aaa62b8651f89511067f87",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
export default firebaseConfig;
