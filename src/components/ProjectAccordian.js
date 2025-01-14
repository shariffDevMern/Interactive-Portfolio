import * as React from "react";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Box, Container, Link } from "@mui/material";
import CustomImageList from "./projectImagesCollage";
import { GitHub, LinkRounded } from "@mui/icons-material";

const projectsData = [
  {
    id: "project1",
    name: "Contacts App",
    thumbnail: "/contacts-img.png",
    projectImages: [
      {
        img: "/contacts-sc-1.jpg",
        title: "Add Contact",
        author: "@bkristastucchio",
      },
      {
        img: "/contacts-sc-2.jpg",
        title: "Delete Contact",
        author: "@bkristastucchio",
      },
      {
        img: "/contacts-sc-3.jpg",
        title: "Contacts",
        author: "@bkristastucchio",
      },
      {
        img: "/contacts-sc-4.jpg",
        title: "Contact Details",
        author: "@bkristastucchio",
      },
      {
        img: "/contacts-sc-5.jpg",
        title: "Contact Added",
        author: "@bkristastucchio",
      },
    ],
    description:
      "The Contacts App is a web application that helps users manage their contact information efficiently. With this app, users can add, edit, delete, and search for contacts. Built with modern web technologies, the application offers a clean, intuitive, and responsive user interface. This application is still on experimental phase, so data management will be handled on frontend itself. On future, backend API will be initiated.",
    link: " https://contactsha.netlify.app/",
    git: "https://github.com/shariffDevMern/contactsAPP",
    techUsed: [
      { altText: "html", url: "/html-icon.png" },
      { altText: "css", url: "/css-icon.png" },
      { altText: "js", url: "/js-icon.png" },
      { altText: "react", url: "/react-icon.png" },
    ],
  },
  {
    id: "project2",
    name: "Nxt Watch",
    thumbnail: "/nxt-watch-img.png",
    projectImages: [
      {
        img: "/nxtwatch-sc-1.png",
        title: "Video Details",
        author: "@bkristastucchio",
        featured: true,
      },
      {
        img: "/nxtwatch-sc-2.png",
        title: "Saved Videos",
        author: "@bkristastucchio",
      },
      {
        img: "/nxtwatch-sc-3.png",
        title: "Gaming Route",
        author: "@bkristastucchio",
      },
      {
        img: "/nxtwatch-sc-4.png",
        title: "Trending Route",
        author: "@bkristastucchio",
        featured: true,
      },
      {
        img: "/nxtwatch-sc-5.png",
        title: "Home Route",
        author: "@bkristastucchio",
      },
    ],
    description:
      "NXTWatch is a cutting-edge video streaming application developed using React, crafted to deliver a seamless and immersive video platform experience. The application combines modern design aesthetics with powerful functionality, simulating the look and feel of a professional streaming service. Users can explore a wide range of videos organized by categories, enabling personalized content discovery. Each video has a detailed page with essential information and interactive features, enhancing user engagement.",
    link: "https://nxshtwatch.ccbp.tech",
    git: "https://github.com/shariffDevMern/NxtWatch",
    techUsed: [
      { altText: "html", url: "/html-icon.png" },
      { altText: "css", url: "/css-icon.png" },
      { altText: "js", url: "/js-icon.png" },
      { altText: "react", url: "/react-icon.png" },
      { altText: "mongodb", url: "/mongodb-icon.png" },
      { altText: "nodejs", url: "/nodejs-icon.png" },
    ],
  },
  {
    id: "project3",
    name: "Password Manager",
    thumbnail: "/password-manager-img.png",
    projectImages: [
      {
        img: "/pass-manager-sc-1.png",
        title: "Add Manager",
        author: "@bkristastucchio",
        featured: true,
      },
      {
        img: "/pass-manager-sc-2.png",
        title: "Saved Passwords",
        author: "@bkristastucchio",
      },
      {
        img: "/pass-manager-sc-3.png",
        title: "No Passwords",
        author: "@bkristastucchio",
      },
      {
        img: "/pass-manager-sc-5.png",
        title: "Passwords",
        author: "@bkristastucchio",
        featured: true,
      },
    ],
    description:
      "The React-based Password Manager is a robust, feature-rich application designed to securely store and manage passwords for various websites and accounts. Built with a focus on security, usability, and efficiency, the app empowers users to take control of their digital credentials with confidence. By offering a seamless and intuitive interface, the application ensures that users can effortlessly organize their passwords while maintaining top-notch security standards. With advanced features like encrypted storage, secure password visibility toggles, and an integrated password generator, the app eliminates the hassle of remembering multiple credentials and promotes the use of strong, unique passwords.",
    link: "https://passmanagees.ccbp.tech/",
    git: "https://github.com/shariffDevMern/Password-Manger",
    techUsed: [
      { altText: "html", url: "/html-icon.png" },
      { altText: "css", url: "/css-icon.png" },
      { altText: "js", url: "/js-icon.png" },
      { altText: "react", url: "/react-icon.png" },
    ],
  },
  {
    id: "project4",
    name: "Emoji Mania",
    thumbnail: "/emoji-mania.png",
    projectImages: [
      {
        img: "/emojimania-sc-1.png",
        title: "Game View",
        author: "@bkristastucchio",
        featured: true,
      },
      {
        img: "/emojimania-sc-2.png",
        title: "Won View",
        author: "@bkristastucchio",
      },
      {
        img: "/emojimania-sc-3.png",
        title: "Lose View",
        author: "@bkristastucchio",
      },
    ],
    description:
      "Emoji Mania is a captivating and interactive ReactJS-based memory game designed to test your focus and retention skills. The challenge? Click on each emoji only once without repeating any. As simple as it sounds, the game becomes increasingly tricky with each shuffle, keeping players hooked as they aim to achieve the highest score!",
    link: "https://emojimania.ccbp.tech/",
    techUsed: [
      { altText: "html", url: "/html-icon.png" },
      { altText: "css", url: "/css-icon.png" },
      { altText: "js", url: "/js-icon.png" },
      { altText: "react", url: "/react-icon.png" },
    ],
  },
  {
    id: "project5",
    name: "Netflix Clone",
    thumbnail: "/netflix-img.png",
    projectImages: [
      {
        img: "/netflix-sc-1.png",
        title: "Hero Section",
        author: "@bkristastucchio",
        featured: true,
      },
      {
        img: "/netflix-sc-2.png",
        title: "TV View",
        author: "@bkristastucchio",
      },
      {
        img: "/netflix-sc-3.png",
        title: "Live Video Section",
        author: "@bkristastucchio",
      },
      {
        img: "/netflix-sc-4.png",
        title: "Featured Section",
        author: "@bkristastucchio",
        featured: true,
      },
      {
        img: "/netflix-sc-5.png",
        title: "Contact Section",
        author: "@bkristastucchio",
      },
    ],
    description:
      "A fully responsive Netflix landing page clone built using HTML, CSS, and JavaScript. The project features various sections, including a hero section, features, and a frequently asked questions (FAQ) section. The design mimics the original Netflix India website.",
    link: "https://netflixshariff.ccbp.tech/",
    git: "https://github.com/shariffDevMern/Netflix-clone",
    techUsed: [
      { altText: "html", url: "/html-icon.png" },
      { altText: "css", url: "/css-icon.png" },
      { altText: "js", url: "/js-icon.png" },
      { altText: "bootstrap", url: "/bootstrap-icon.png" },
    ],
  },
  {
    id: "project6",
    name: "Spotify Clone",
    thumbnail: "/spotify-img.png",
    projectImages: [
      {
        img: "/spotify-sc-1.png",
        title: "Desktop View",
        author: "@bkristastucchio",
        featured: true,
      },
      {
        img: "/spotify-sc-2.png",
        title: "Mobile View",
        author: "@bkristastucchio",
      },
    ],
    description:
      "This project is a Spotify Clone website built with HTML, CSS, and Bootstrap. It mimics the UI of the popular music streaming platform, Spotify. Users can navigate through the website, explore popular artists, albums, and podcasts, and interact with several UI components.",
    link: "https://spotifyshariff.ccbp.tech/",
    git: "https://github.com/shariffDevMern/Spotify-Clone",
    techUsed: [
      { altText: "html", url: "/html-icon.png" },
      { altText: "css", url: "/css-icon.png" },
      { altText: "bootstrap", url: "/bootstrap-icon.png" },
    ],
  },
];

export default function AccordionUsage() {
  return (
    <div>
      {projectsData.map((project) => (
        <Accordion key={project.id}>
          <AccordionSummary
            sx={{
              backgroundImage: "linear-gradient(to right,#161f2d,#3a5378  )",
              padding: 1,
              paddingX: 3,
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ color: "white" }} variant="h5">
                {project.name}
              </Typography>
              <img
                style={{ width: "50px" }}
                src={project.thumbnail}
                alt={project.name}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Container
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "flex-start" },
                gap: 2,
              }}
            >
              <CustomImageList itemData={project.projectImages} />
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#f8fafc",
                  border: "1px solid gray",
                  p: 1,
                  borderRadius: 2,
                }}
              >
                <Typography color="#161f2d" variant="h6">
                  Technologies Used
                </Typography>
                <Box
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {project.techUsed.map((tech) => (
                    <img
                      style={{ height: "50px" }}
                      key={tech.altText}
                      alt={tech.altText}
                      src={tech.url}
                    />
                  ))}
                </Box>
                <Typography color="#161f2d" marginTop={4} variant="h6">
                  Project Description
                </Typography>
                <Typography color="#567176" marginTop={1} variant="body2">
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    marginTop: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      gap: 1,
                    }}
                  >
                    <LinkRounded />
                    <Link target="_blank" href={project.link}>
                      Live link
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      gap: 1,
                    }}
                  >
                    <GitHub />
                    <Link target="_blank" href={project.git}>
                      Git
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Container>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
