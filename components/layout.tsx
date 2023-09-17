import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
  siteTitle,
}: {
  children: React.ReactNode;
  siteTitle: string;
}) {
  return (
    <>
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

      <div className={styles.layoutContainer}>
        {/* ヘッダー */}
        <Header />

        {/* トップ画像*/}
        <div className={styles.container}>
          <div className={styles.header}>
            <>
              <Image
                priority
                src="/images/snowbreak_top_trim.jpg"
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

        {/* フッター */}
        <Footer />
      </div>
    </>
  );
}
