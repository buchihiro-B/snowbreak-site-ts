import {
  Box,
  Link,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Box m={"0px auto"} p={"0rem 1rem"} maxW={"1000px"} display="flex">
        <UnorderedList
          listStyleType={"none"}
          display={"flex"}
          m="0px auto"
          // p="0rem 1rem"
          color={"#0074e0"}
        >
          <ListItem m={"1rem 0rem"}>
            <Box
              borderRight={"1px solid #d9d9d9"}
              p={"0px 8px"}
              fontSize={"10px"}
            >
              <Link href="/" _focus={{ textDecoration: "none", color: "#61b0ff" }} _hover={{ textDecoration: "none", color: "#61b0ff"}}>トップ</Link>
            </Box>
          </ListItem>
          <ListItem m={"1rem 0rem"}>
            <Box
              borderRight={"1px solid #d9d9d9"}
              p={"0px 8px"}
              fontSize={"10px"}
            >
              <Link href="/" _focus={{ textDecoration: "none", color: "#61b0ff" }} _hover={{ textDecoration: "none", color: "#61b0ff"}}>ヘルプ</Link>
            </Box>
          </ListItem>
          <ListItem m={"1rem 0rem"}>
            <Box
              borderRight={"1px solid #d9d9d9"}
              p={"0px 8px"}
              fontSize={"10px"}
            >
              <Link href="/" _focus={{ textDecoration: "none", color: "#61b0ff" }} _hover={{ textDecoration: "none", color: "#61b0ff"}}>運営会社</Link>
            </Box>
          </ListItem>
          <ListItem m={"1rem 0rem"}>
            <Box
              borderRight={"1px solid #d9d9d9"}
              p={"0px 8px"}
              fontSize={"10px"}
            >
              <Link href="/" _focus={{ textDecoration: "none", color: "#61b0ff" }} _hover={{ textDecoration: "none", color: "#61b0ff"}}>採用情報</Link>
            </Box>
          </ListItem>
          <ListItem m={"1rem 0rem"}>
            <Box
              borderRight={"1px solid #d9d9d9"}
              p={"0px 8px"}
              fontSize={"10px"}
            >
              <Link href="/" _focus={{ textDecoration: "none", color: "#61b0ff" }} _hover={{ textDecoration: "none", color: "#61b0ff"}}>利用規約</Link>
            </Box>
          </ListItem>
          <ListItem m={"1rem 0rem"}>
            <Box
              borderRight={"1px solid #d9d9d9"}
              p={"0px 8px"}
              fontSize={"10px"}
            >
              <Link href="/" _focus={{ textDecoration: "none", color: "#61b0ff" }} _hover={{ textDecoration: "none", color: "#61b0ff"}}>プライバシーポリシー</Link>
            </Box>
          </ListItem>
          <ListItem m={"1rem 0rem"}>
            <Box
              borderRight={"1px solid #d9d9d9"}
              p={"0px 8px"}
              fontSize={"10px"}
            >
              <Link href="/" _focus={{ textDecoration: "none", color: "#61b0ff" }} _hover={{ textDecoration: "none", color: "#61b0ff"}}>広告のご案内</Link>
            </Box>
          </ListItem>
          <ListItem m={"1rem 0rem"}>
            <Box
              borderRight={"1px solid #d9d9d9"}
              p={"0px 8px"}
              fontSize={"10px"}
            >
              <Link href="/" _focus={{ textDecoration: "none", color: "#61b0ff" }} _hover={{ textDecoration: "none", color: "#61b0ff"}}>お問い合わせ</Link>
            </Box>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box textAlign={"center"} m={"0rem 0rem 1rem"} fontSize={"10px"} color={"gray"}>{"Copyright (C) BuchiWith All Rights Reserved."}</Box>
    </footer>
  );
}
