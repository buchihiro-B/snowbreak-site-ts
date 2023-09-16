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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  
} from "@chakra-ui/react";
import {ChevronRightIcon, } from '@chakra-ui/icons'
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import { useState } from "react";
import Contents from "../../components/contents";
import customTheme from "../customTheme";

import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: Array<any> }) {

  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");

  return (
    <Layout siteTitle="top page">
      <ChakraProvider theme={customTheme}>
        <Tabs>
          <TabList display="flex">
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                TOP
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                キャラ一覧
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                武器一覧
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                後方支援一覧
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                最強キャラ
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
              >
                序盤の進め方
              </Box>
            </Tab>
          </TabList>

          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
            m={"6px 0px"}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <TabPanels>
            <TabPanel p={0}>
              <Contents />
            </TabPanel>
            <TabPanel p={0}>
              <Contents />
            </TabPanel>
            <TabPanel p={0}>
              <Contents />
            </TabPanel>
            <TabPanel p={0}>
              <Contents />
            </TabPanel>
            <TabPanel p={0}>
              <Contents />
            </TabPanel>
            <TabPanel p={0}>
              <Contents />
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* <Contents /> */}
      </ChakraProvider>
    </Layout>
  );
}
