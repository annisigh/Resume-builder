import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";

// Defines the components of thr main function.It is the functional component in React, Which is a more straightforward approach to define components.
export default function ButtonMUI() {
  return (
    <> --It is used to group elements without adding more nodes to the DOM.
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px">
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify"
            }}>
         
            We welcome you to our resume builder! We are a group of seasoned professionals who assist job seekers design resumes and cover letters that stand out from the crowd. Our objective is to give you the skills and information you need to land your ideal career.
            We understand how daunting the job search can be, which is why we're here to help you every step of the way. Our user-friendly website includes a number of customizable templates and industry-specific keywords to help you create a resume that highlights your unique talents and accomplishments.
            Our resume builder is dedicated to providing you with a high-quality, cost-effective solution for your job search. Our staff is continuously at the forefront of industry trends and best practices.
            <li>Build Your Resume Quickly and Easily with these Steps</li>
            
            <ol>1. Choose Template </ol>
            <ol>2. Fill in the details </ol>
            <ol>3. Your resume is ready for download.</ol>

            Thank you for selecting our Resume Builder. We look forward to assisting you in achieving your career goals!

          </Typography>
          <Stack>
            <img
              src="https://www.visualcv.com/static/67fb7346de03f735bcf1b48751bb8b19/e3663/CV_Examples_2x.png"
              alt="img"
            />
          </Stack>
        </Stack>
        <Box mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}>
            Share with your friends
          </Typography>
          <Box className="icons">
        
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />

            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="error"
            />
            
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            
          </Box>
        </Box>
      </Stack>
    </>
  );
}
