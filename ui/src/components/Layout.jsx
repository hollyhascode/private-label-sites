import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import EmailInput from "components/EmailInput";
import AmiLargeHeader from "components/header";
import Typography from "extensions/Typography";
import React from "react";
import { Helmet } from "react-helmet";
import globalStyles from "styles.global";
import theme from "theme";

const url =
  // eslint-disable-next-line max-len
  "https://fonts.googleapis.com/css?family=Poppins:200,400,500,700,900|Oswald:400,700&display=swap";

Typography.setSecondFamily("'Oswald', sans-serif");

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <Helmet>
        <link href={url} rel="stylesheet" />
      </Helmet>
      <CssBaseline />
      <AmiLargeHeader />
      <Box bgcolor={"common.white"}>
        {children}
        <Box bgcolor={"grey.200"} textAlign={"center"} position={"relative"} zIndex={0} pt={10} pb={5}>
          <Container maxWidth={"sm"}>
            <Typography spacing={"medium"} secondFamily weight={500} gutterBottom>
              SUBSCRIBE TO OUR NEWSLETTER
            </Typography>
            <Typography variant={"caption"} display={"block"}>
              To always stay update with our products, news, and special discounts
            </Typography>
            <Typography variant={"caption"} display={"block"} bottomSpace={"medium"}>
              enter you email below
            </Typography>
            <EmailInput />
          </Container>
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
