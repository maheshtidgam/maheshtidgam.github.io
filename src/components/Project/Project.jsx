import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import {
  SiChakraui, SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb
} from "react-icons/si";


import { Fade } from "react-awesome-reveal";
import { Text } from "@chakra-ui/react";
const projects = [
  {
    name: "WatchCraft.com",
    img: "watchcraft.png",
    link: "https://lucent-frangipane-e62ae6.netlify.app/",
    git: "https://github.com/AbhishekMandal1997/Federalism-Frontend_016-",
    about:
      " This is E-commerce website which provide all types of watches. This was a team project where I with my teammates had created.My task was to create footer and add animations and making it responsive,I  helped in the css part and some js functionality part.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      // <SiChakraui className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiHtml5 />HTML</p>,
      <p className={styles.stackIcon}><SiCss3 />CSS</p>,
      <p className={styles.stackIcon}><SiJavascript />JAVASCRIPT</p>,


    ],
  },

  {
    name: "VisionBoard.com",
    img: "whiteboard.png",
    link: "https://unit4project.netlify.app/",
    git: "https://github.com/manojRawat5/Green-Coders_002",
    about:
      "This is online whiteboard website.This was a team project where I with my teammates had created.My task was to do add diffrent drawing shapes and their  functionality in whiteboard and help in the css part. ",
    stacks: [
      // <SiHtml5 className={styles.stackIcon} />,
      // <SiJavascript className={styles.stackIcon} />,
      // <SiCss3 className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiHtml5 />HTML</p>,
      <p className={styles.stackIcon}><SiCss3 />CSS</p>,
      <p className={styles.stackIcon}><SiJavascript />JAVASCRIPT</p>,
    ],
  },

  {
    name: "Weekend-Planner.com",
    img: "Weekend_planner.png",
    link: "https://weekend-trip-anho.vercel.app/",
    git: "https://github.com/manoharv2512/Code_Compass_019",
    about:
      "This is Weekend Planning website.This was a team project where I with my teammates had created.My task was to do add landing page and date picker page creation and help in the css part. ",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      // <SiChakraui className={styles.stackIcon} />,
      <p className={styles.stackIcon}><SiHtml5 />HTML</p>,
      <p className={styles.stackIcon}><SiCss3 />CSS</p>,
      <p className={styles.stackIcon}><SiJavascript />JAVASCRIPT</p>,
      <p className={styles.stackIcon}><SiReact />REACT</p>,
    ],
  },
  {
    name: "StyleVerse.com",
    img: "Styleverse.png",
    link: "https://styleverse-frontend-app.vercel.app/", // change if you have a different deployment link
    git: "https://github.com/maheshtidgam/Ecommerce_site",
    about:
      "StyleVerse is a full-stack e-commerce platform where users can browse products, add items to their cart, place orders, and manage profiles. It also includes an admin panel for managing products and orders. I developed the complete project including the frontend, backend, and admin dashboard with secure authentication .",
    stacks: [
      <p className={styles.stackIcon}><SiJavascript />JavaScript</p>,
      <p className={styles.stackIcon}><SiReact />React</p>,
      <p className={styles.stackIcon}><SiTailwindcss />Tailwind CSS</p>,
      <p className={styles.stackIcon}><SiNodedotjs />Node.js</p>,
      <p className={styles.stackIcon}><SiExpress />Express</p>,
      <p className={styles.stackIcon}><SiMongodb />MongoDB</p>,
    ],
  },


];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <Text as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
          Projects
        </Text>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
