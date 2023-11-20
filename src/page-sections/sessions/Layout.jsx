import { Fragment } from "react";
import { Grid, Box, Divider } from "@mui/material"; // CUSTOM COMPONENTS
import { H3, H6, Paragraph } from "components/typography";
import { FlexRowAlign } from "components/flexbox";
const Layout = ({ children, login }) => {
  return (
    <Grid container height="100%">
      <Grid item md={6} xs={12}>
        <FlexRowAlign bgcolor="primary.main" height="100%">
          <Box color="white" pt={3} maxWidth={700}>
            {login ? (
              <><H3 fontWeight={300}>Hi, Welcome to</H3><H3 fontWeight={800}> Wooyano!</H3></>
            ) : (
              <Fragment>
                <Box
                  width={80}
                  alt="quickframe"
                  component="img"
                  src="/static/logo/logo-white-svg.svg"
                />

                <H3 mt={3} fontWeight={600} maxWidth={450}>
                  Technology is best when it brings people together.
                </H3>

                <Divider
                  sx={{
                    borderColor: "primary.400",
                    borderWidth: 1,
                    my: 3,
                  }}
                />
              </Fragment>
            )}

            <Box my={4}>
              <Box display={"flex"}>
                <H6>우</H6>
                <Box mt={1.5} ml={1}>
                  <Paragraph>리들의 문제를</Paragraph>
                </Box>
              </Box>
              <Box display={"flex"}>
                <H6>야</H6>
                <Box mt={1.5} ml={1}>
                  <Paragraph>무지게 해결해줄</Paragraph>
                </Box>
              </Box>
              <Box display={"flex"}>
                <H6>노</H6>
                <Box mt={1.5} ml={1}>
                  <Paragraph>련한 전문가를 찾습니다.</Paragraph>
                </Box>
              </Box>
            </Box>
          </Box>
        </FlexRowAlign>
      </Grid>

      <Grid item md={6} xs={12}>
        <FlexRowAlign bgcolor="background.paper" height="100%">
          {children}
        </FlexRowAlign>
      </Grid>
    </Grid>
  );
};

export default Layout;
