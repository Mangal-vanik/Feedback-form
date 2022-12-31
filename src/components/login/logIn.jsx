import React from "react";
import {
  Box,
  Button,
  TextField,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function LogIn() {
  return (
    <Container
      id="contact"
      sx={{
        bgcolor: "rgb(254, 145, 140)",
        textAlign: "center",
        padding: "10px",
      }}
      maxWidth="full"
    >
      <Container>
        <Typography
          sx={{ fontSize: { xs: "20px", md: "32px" } }}
          color="white"
          padding={3}
        >
          Feedback-Form
        </Typography>
        <Typography
          color="white"
          sx={{ fontSize: { xs: "16px", md: "22px" } }}
          textAlign={{ md: "center", xs: "left" }}
          marginBottom={6}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={12} container spacing={3} component="form">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                sx={{ bgcolor: "white", borderRadius: "5px" }}
                name="first_name"
                placeholder=" Full Name"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                sx={{ bgcolor: "white", borderRadius: "5px" }}
                name="email"
                placeholder=" Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                sx={{ bgcolor: "white", borderRadius: "5px" }}
                name="email"
                placeholder="Subject"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                sx={{ bgcolor: "white", borderRadius: "5px" }}
                name="description"
                placeholder=" Please provide any additional comments or feedback "
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",

                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Button
                  type="submit"
                  textAlign="center"
                  padding="20px"
                  sx={{
                    bgcolor: "rgb(254, 145, 140)",
                    border: " 1px solid white",
                    borderRadius: "5px",
                    color: "white",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "black",
                      color: "white",
                      border: " 1px solid white",
                    },
                  }}
                  maxWidth="full"
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default LogIn;
