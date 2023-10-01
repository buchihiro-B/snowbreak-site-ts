import HamburgerMenu from "./hamburgerMenu";

import { Box, useMediaQuery, Flex } from "@chakra-ui/react";

export default function Contents() {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      {isLargerThan1000 ? (
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
          <Box backgroundColor={"white"} p={2} h={700} width={"30%"}>
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
          <Box backgroundColor={"white"} p={2} h={700} width={"100%"}>
            サブコンテンツ
          </Box>
        </Box>
      )}
    </>
  );
}
