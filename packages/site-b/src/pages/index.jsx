import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import BrandPicker from "@erig/common/components/BrandPicker";
import CategoryPicker from "@erig/common/components/CategoryPicker";
import ColorPicker from "@erig/common/components/ColorPicker";
import Expander from "@erig/common/components/Expander";
import Layout from "../Layout";
import MobileSelector from "@erig/common/components/MobileSelector";
import Pagination from "@erig/common/components/Pagination";
import PricePicker from "@erig/common/components/PricePicker";
import ProductAds from "@erig/common/components/ProductAds";
import ProductCard from "@erig/common/components/ProductCard";
import SizePicker from "@erig/common/components/SizePicker";
import Typography from "@erig/common/extensions/Typography";
import React from "react";

const Index = () => (
  <Layout>
    <Box
      bgcolor={"#C2C5CC"}
      height={{
        xs: 144,
        md: 200,
      }}
      textAlign={"center"}
      pt={{
        xs: 3,
        md: 5,
      }}
    >
      <Typography secondFamily weight={"bold"} size={"big"} bottomSpace={"small"}>
        MEN’S LIFESTYLE SHOE
      </Typography>
      <Typography>TOTAL 319 ITEMS</Typography>
    </Box>
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
          <Paper style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.12)" }}>
            <Grid container>
              <Grid item xs={12} sm={6} md={5}>
                <ProductAds {...ProductAds.test1} contentSide={"left"} contentBoxProps={{ maxWidth: 200 }} />
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <ProductAds {...ProductAds.test2} contentSide={"right"} contentBoxProps={{ maxWidth: 300 }} />
              </Grid>
            </Grid>
            <Hidden only={"xs"}>
              <Box pt={2} pb={3} />
            </Hidden>
            <Hidden smUp>
              <MobileSelector />
            </Hidden>
            <Divider light />
            <Grid container>
              <Hidden only={"xs"}>
                <Grid item xs={12} sm={4} md={3}>
                  <Expander label={"CATEGORY"}>
                    <CategoryPicker categories={CategoryPicker.data} />
                  </Expander>
                  <Divider light />
                  <Expander label={"PRICE"}>
                    <PricePicker min={10} max={400} />
                  </Expander>
                  <Divider light />
                  <Expander label={"BRAND"}>
                    <BrandPicker brands={BrandPicker.data} />
                  </Expander>
                  <Divider light />
                  <Expander label={"COLOR"}>
                    <Box p={1}>
                      <ColorPicker colors={ColorPicker.data} />
                    </Box>
                  </Expander>
                  <Divider light />
                  <Expander label={"SIZE"}>
                    <Box p={1}>
                      <SizePicker sizes={SizePicker.data} />
                    </Box>
                  </Expander>
                  <Divider light />
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={8} md={9}>
                <Grid container>
                  {ProductCard.data.map(data => (
                    <Grid key={data.name} item xs={6} sm={6} md={4}>
                      <ProductCard {...data} bordered />
                    </Grid>
                  ))}
                </Grid>
                <Pagination
                  rootBoxProps={{
                    mt: "-1px",
                    ml: "-1px",
                    borderLeft: "1px solid #f0f0f0",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  </Layout>
);

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
