# NEXEED 現地調査

現場写真を「どこで・いつ・どの方向」を付けて記録し、地図（地理院タイル）に番号付きで並べるNEXEED社内アプリ。

- 公開：GitHub Pages
- データ：Firebase（Authentication＝Googleログイン、Firestore＝写真とデータ）
- ログインできるのは @nexeed-consulting.com のアカウントのみ（`config.js` と `firestore.rules`）

## ファイル
- `index.html` … アプリ本体
- `config.js` … Firebaseの設定とログインを許可するドメイン
- `firestore.rules` … Firestoreのセキュリティルール（Firebaseコンソールに貼り付ける）
