import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Layout from "components/Layout";
import React from "react";

const Index = () => (
  <Layout>
    <Box
      mt={{
        xs: -5,
        md: -8,
      }}
      mb={-5.5}
      position={"relative"}
      zIndex={1}
    >
      <Container fixed>
        <Box
          mx={{
            xs: -2,
            sm: 0,
          }}
        >
          <Paper style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.12)" }}>About Us</Paper>
        </Box>
      </Container>
    </Box>
  </Layout>
);

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
