import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// Icons

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

// Card

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



const Footer = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ backgroundColor: "#F7FAFC", marginTop: "20px" }}
    >
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "#F7FAFC" }}
      >
        <Grid item xs={12} md={3}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "#F7FAFC",
              color: "black",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Skids
              </Typography>
              <FacebookIcon />
              <TwitterIcon style={{ marginLeft: "10px" }} />
              <InstagramIcon style={{ marginLeft: "10px" }} />
              <EmailIcon style={{ marginLeft: "10px" }} />
              <Typography variant="subtitle1" component="div">
                &copy; 2023 Skids
              </Typography>
              <Typography variant="subtitle1" component="div">
                Skids is registered
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "#F7FAFC",
              color: "black",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                Quick Links
              </Typography>
         
              <Typography variant="subtitle1" component="div">
                For Parents
              </Typography>
              <Typography variant="subtitle1" component="div">
                For School
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "#F7FAFC",
              color: "black",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
            Social Links
              </Typography>

              <Typography variant="subtitle1" component="div">
                Careers
              </Typography>
              <Typography variant="subtitle1" component="div">
                Privacy Policy
              </Typography>
              <Typography variant="subtitle1" component="div">
                Developers
              </Typography>
              <Typography variant="subtitle1" component="div">
                Get in Touch
              </Typography>
            
          
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card
            sx={{ minHeight: 150 }}
            style={{
              textAlign: "start",
              backgroundColor: "#F7FAFC",
              color: "black",
              boxShadow:'none'
            }}
          >
            <CardContent style={{ marginLeft: "50px" }}>
              <Typography variant="h6" component="div">
                More Links
              </Typography>

           
              <Typography variant="subtitle1" component="div">
                Investors
              </Typography>
              <Typography variant="subtitle1" component="div">
                Terms
              </Typography>
              <Typography variant="subtitle1" component="div">
                Privacy
              </Typography>
              <Typography variant="subtitle1" component="div">
                Help
              </Typography>
              <Typography variant="subtitle1" component="div">
                Contact
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
