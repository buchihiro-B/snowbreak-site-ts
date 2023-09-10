import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
  Box,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import { useState } from "react";
import Contents from "../../components/contents";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: Array<any> }) {
  const [count, setCount] = useState(10);

  const handleUp = () => {
    console.log("カウントアップするよ");
    setCount(count + 1);
  };

  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");

  return (
    <Layout isHome>
      <ChakraProvider>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Tabs>
          <TabList display="flex">
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                Tab 1
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                Tab 2
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                Tab 3
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                Tab 4
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                Tab 5
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                Tab 6
              </Box>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel mt={"1rem"} p={0}>
              <Contents />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* <Contents /> */}
      </ChakraProvider>
    </Layout>
  );
}
