import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
  Box,
  Text,
  Button,
  useMediaQuery,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

export default function Contents() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      {isLargerThan800 ? (
        <Flex>
          <Box
            backgroundColor={"white"}
            p={2}
            mr={"1rem"}
            h={700}
            width={"70%"}
          >
            メインコンテンツ
          </Box>
          <Box
            backgroundColor={"white"}
            p={2}
            h={700}
            width={"30%"}
          >
            サブコンテンツ
          </Box>
        </Flex>
      ) : (
        <Box>
          <Box
            backgroundColor={"white"}
            p={2}
            mb={"1rem"}
            h={700}
            width={"100%"}
          >
            メインコンテンツ
          </Box>
          <Box
            backgroundColor={"white"}
            p={2}
            h={700}
            width={"100%"}
          >
            サブコンテンツ
          </Box>
        </Box>
      )}
    </>
  );
}
