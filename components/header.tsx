import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <div className={styles.headerLogo}>テストロゴ</div>
          <ul className={styles.headerMenu}>
            <li className={styles.headerMenuItem}>ホーム</li>
            <li className={styles.headerMenuItem}>ゲーム検索</li>
            <li className={styles.headerMenuItem}>新規登録</li>
            <li className={styles.headerMenuItem}>ログイン</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
