import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";

export default function Layout({
  children,
  siteTitle,
}: {
  children: React.ReactNode;
  siteTitle: string;
}) {
  return (
    <div className={styles.layoutContainer}>
      {/* ヘッダー */}
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

      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{siteTitle}</title>
        </Head>
        <div className={styles.header}>
          <>
            <Image
              priority
              src="/images/snowbreak_top_trim.jpg"
              // className={utilStyles.borderCircle}
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%" }}
              alt="no image"
            />
            {/* <Navber /> */}
          </>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
