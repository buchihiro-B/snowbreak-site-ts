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
} from "@chakra-ui/react";

export default function Contents() {
  const [isLargerThan980] = useMediaQuery("(min-width: 980px)");

  return (
    <>
      {isLargerThan980 ? (
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
          <Box backgroundColor={"gray"}>test</Box>
          <Box backgroundColor={"red"}>test2</Box>
        </Box>
      )}
    </>
  );
}
