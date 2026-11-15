// Firebaseの設定（公開してよい値。データの保護はFirestoreのセキュリティルールで行う）
export const firebaseConfig = {
  apiKey: "AIzaSyASeB9-zlA-iPC2T66Se7ffpeDiIyvHZjc",
  authDomain: "nexeed-genchi.firebaseapp.com",
  projectId: "nexeed-genchi",
  storageBucket: "nexeed-genchi.firebasestorage.app",
  messagingSenderId: "680986437691",
  appId: "1:680986437691:web:b50a83e9f1c0aec81cd41e"
};
// ログインを許可するメールのドメイン
export const allowedDomains = ["nexeed-consulting.com", "beaconsulting.jp"];
