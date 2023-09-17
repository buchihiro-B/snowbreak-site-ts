import Image from "next/image";

import { Box, Link } from "@chakra-ui/react";

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
              style={{ width: "39px" }}
              alt="no image"
            />
            <Box p={"0px 8px"}>BuchiWith</Box>
          </div>
          <ul className={styles.headerMenu}>
            <li className={styles.headerMenuItem}>
              <Link
                href="/"
                _focus={{ textDecoration: "none", color: "#749468" }}
                _hover={{ textDecoration: "none", color: "#749468" }}
              >
                ホーム
              </Link>
            </li>
            <li className={styles.headerMenuItem}>
              <Link
                href="/"
                _focus={{ textDecoration: "none", color: "#749468" }}
                _hover={{ textDecoration: "none", color: "#749468" }}
              >
                ゲーム検索
              </Link>
            </li>
            <li className={styles.headerMenuItem}>
              <Link
                href="/"
                _focus={{ textDecoration: "none", color: "#749468" }}
                _hover={{ textDecoration: "none", color: "#749468" }}
              >
                新規登録
              </Link>
            </li>
            <li className={styles.headerMenuItem}>
              <Link
                href="/"
                _focus={{ textDecoration: "none", color: "#749468" }}
                _hover={{ textDecoration: "none", color: "#749468" }}
              >
                ログイン
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
