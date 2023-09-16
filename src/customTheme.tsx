import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  // fonts: {
  //   body: "'../public/fonts/RocknRollOne-Regular.ttf', sans-serif",
  //   heading: "/fonts/RocknRollOne-Regular.ttf, sans-serif",
  // },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default customTheme;
