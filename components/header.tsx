import Image from "next/image";

import { Box } from '@chakra-ui/react'

import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <div className={styles.headerLogo}>
            <Image 
              priority 
              src="/images/logo.jpg" 
              height={0}
              width={0}
              sizes="100vw"
              style={{width: "39px"}}
              alt="no image" />
              <Box p={"0px 8px"}>BuchiWith</Box>
          </div>
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
