import React, { useState } from "react";
import { Box, Text, Flex, Link, useDisclosure, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import styles from "./css_modules/hamburgerMenu.module.css";

function HamburgerMenu() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  // ここにメニューアイテムの内容やスタイルを定義します

  return (
    <div className={styles.HamburgerMenuContainer}>
      {/* ハンバーガーメニューのアイコン（例: 三本線） */}
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <HamburgerIcon />
      </Button>
      {/* <button onClick={toggleMenu}>
        <HamburgerIcon />
      </button> */}

      {/* メニューコンテンツ */}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent color="#45583e">
          <ModalHeader fontSize={"40px"}>BuchiWith</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Link href="/">
              <Button
                fontSize={"20px"}
                p="0.5rem 1rem"
                m="0.5rem 0rem"
                width={"100%"}
                // borderTop={"1px solid #d9d9d9"}
                // borderBottom={"1px solid #d9d9d9"}
                _hover={{
                  backgroundColor: "lightgray",
                }}
              >
                ホーム
              </Button>
            </Link>
            <Link href="/">
              <Button
                fontSize={"20px"}
                p="0.5rem 1rem"
                m="0.5rem 0rem"
                width={"100%"}
                // borderTop={"1px solid #d9d9d9"}
                // borderBottom={"1px solid #d9d9d9"}
                _hover={{
                  backgroundColor: "lightgray",
                }}
              >
                ゲーム検索
              </Button>
            </Link>
            <Link href="/">
              <Button
                fontSize={"20px"}
                p="0.5rem 1rem"
                m="0.5rem 0rem"
                width={"100%"}
                // borderTop={"1px solid #d9d9d9"}
                // borderBottom={"1px solid #d9d9d9"}
                _hover={{
                  backgroundColor: "lightgray",
                }}
              >
                新規登録
              </Button>
            </Link>
            <Link href="/">
              <Button
                fontSize={"20px"}
                p="0.5rem 1rem"
                m="0.5rem 0rem"
                width={"100%"}
                // borderTop={"1px solid #d9d9d9"}
                // borderBottom={"1px solid #d9d9d9"}
                _hover={{
                  backgroundColor: "lightgray",
                }}
              >
                ログイン
              </Button>
            </Link>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default HamburgerMenu;
