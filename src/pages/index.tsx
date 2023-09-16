import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
  Box,
  useMediaQuery,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Layout from "../../components/layout";
import Contents from "../../components/contents";

export default function Home({ allPostsData }: { allPostsData: Array<any> }) {
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");

  return (
    <ChakraProvider>
      <Layout siteTitle="top page">
        <Tabs>
          <TabList display="flex">
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
                fontWeight={"bold"}
                fontSize={"12px"}
              >
                攻略TOP
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
                fontWeight={"bold"}
                fontSize={"12px"}
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
                fontWeight={"bold"}
                fontSize={"12px"}
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
                fontWeight={"bold"}
                fontSize={"12px"}
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
                fontWeight={"bold"}
                fontSize={"12px"}
              >
                最強キャラ
              </Box>
            </Tab>
            <Tab flex="1" color={"#45583e"} bg={"white"} p={0}>
              <Box
                width="100%"
                m={"4px 0px"}
                // borderRight={"solid 1.5px"}
                borderColor={"gainsboro"}
                fontWeight={"bold"}
                fontSize={"12px"}
              >
                序盤の進め方
              </Box>
            </Tab>
          </TabList>

          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
            m={"6px 0px"}
            fontSize={"10px"}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">攻略TOP</BreadcrumbLink>
            </BreadcrumbItem>

            {/* <BreadcrumbItem>
              <BreadcrumbLink href="#">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem> */}
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
      </Layout>
    </ChakraProvider>
  );
}
