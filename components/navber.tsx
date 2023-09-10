import * as React from "react";
import {
  Box,
  Flex,
  Link,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="whitesmoke" width={"100%"}>
      {/* <Flex align="center" maxW="1200px">
        <Link color="black" mr={4}>
          Your Website
        </Link>
        <Link color="black" mr={4}>
          Home
        </Link>
        <Link color="black" mr={4}>
          About
        </Link>
        <Link color="black" mr={4}>
          Contact
        </Link>
      </Flex> */}

      <UnorderedList display="flex" listStyleType="none" m={0}>
        <ListItem flex="1" textAlign="center">
          <Box m={4} borderRight="solid" borderColor="lightgray">
            <Link href="/" p={"14px 5px"}>
              item1
            </Link>
          </Box>
        </ListItem>
        <ListItem flex="1" textAlign="center">
          <Box m={4} borderRight="solid" borderColor="lightgray">
            item1
          </Box>
        </ListItem>
        <ListItem flex="1" textAlign="center">
          <Box m={4} borderRight="solid" borderColor="lightgray">
            item1
          </Box>
        </ListItem>
        <ListItem flex="1" textAlign="center">
          <Box m={4} borderRight="solid" borderColor="lightgray">
            item1
          </Box>
        </ListItem>
      </UnorderedList>

      {/* <Tabs variant="unstyled">
        <TabList display="flex">
          <Tab flex="1" _selected={{ color: "white", bg: "blue" }}>Tab 1</Tab>
          <Tab flex="1" _selected={{ color: "white", bg: "green" }}>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </Box>
  );
}

export default Navbar;
