// import { Ecard } from "./Ecard";
// import styles from "./Experiance.module.css";
// import { SiAngular, SiBootstrap, SiJavascript } from "react-icons/si";
// import { SiHtml5 } from "react-icons/si";
// import { SiCss3 } from "react-icons/si";
// import { SiReact } from "react-icons/si";
// import { SiChakraui } from "react-icons/si";

// import { Fade } from "react-awesome-reveal";
// import { Text } from "@chakra-ui/react";
// const projects = [
//   {
//     name: "Shipyaari.com",
//     img: "shipyaari.JPG",
//     link: "https://client.shipyaari.com",
//     git: "access denied because of privecy policy",
//     about:
//       " This is Logistic website which provide platform of multiple delivery courier services. This is a live project where my responsibility ont this ia all the frontend developement using Angular Fremwork.",
//     stacks: [
//       // <SiReact className={styles.stackIcon} />,
//       // <SiChakraui className={styles.stackIcon} />,
//       <p className={styles.stackIcon}><SiAngular />Angular</p>,
//       <p className={styles.stackIcon}><SiBootstrap />Bootstrap UI</p>,


//     ],
//   },
//   {
//     name: "Polymeds.com",
//     img: "polymed.JPG",
//     link: "https://polymed.totalytics.in",
//     git: "access denied because of privecy policy",
//     about:
//       "It is an Website of Mentaining record and appointment of tour and visit. This is a live project where my responsibility ont this ia all the frontend developement using Angular Fremwork.",
//     stacks: [
//       ,
//       <p className={styles.stackIcon}><SiAngular />Angular</p>,
//       <p className={styles.stackIcon}><SiBootstrap />Bootstrap UI</p>,
//     ],
//   },

// ];
// export function ExperianceSection() {
//   return (
//     <div className={styles.projectsSectionCont} id="experiance">
//       <Fade bottom>
//         <Text as={"h1"} fontSize={{ base: "xl", md: "3xl" }} mb={8}>
//           Live Projects
//         </Text>
//       </Fade>
//       <div className={styles.projectGrid}>
//         {projects.map((project) => (
//           <Fade bottom>
//             <Ecard {...project} />
//           </Fade>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Text } from "@chakra-ui/react"

function ExperienceSection() {
  const achievements = [
    {
      icon: (
        <svg className="achievement-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      title: "UI & Bug Fixes",
      description: "Fixed critical UI issues and resolved bugs to enhance user experience across the logistics portal"
    },
    {
      icon: (
        <svg className="achievement-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      title: "Client-Specific Forms",
      description: "Developed custom order forms and document forms tailored to specific client requirements"
    },
    {
      icon: (
        <svg className="achievement-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2v11h3v9l7-12h-4l4-8z" />
        </svg>
      ),
      title: "Performance Optimization",
      description: "Improved portal performance by eliminating unnecessary API calls and optimizing data flow"
    },
    {
      icon: (
        <svg className="achievement-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      title: "Component Dynamization",
      description: "Created reusable components from repetitive code, improving maintainability and development efficiency"
    }
  ];

  return (
    <div className="experience-section" id="experiance">
      <div className="experience-container">
        {/* Section Header */}
        <div className="section-header">
          <Text as={"h1"} colorScheme="#383874" fontSize={{ base: "xl", md: "3xl" }} mb={8}>
            Professional Experience
          </Text>
          <div className="section-divider"></div>
        </div>

        {/* Experience Card */}
        <div className="experience-card">
          {/* Company Header */}
          <div className="company-header">
            <div className="company-info-flex">
              <div className="company-left">
                <h3 className="company-name">Pazago</h3>
                <p className="company-type">
                  <svg className="map-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Logistics Company
                </p>
              </div>
              <div className="position-right">
                <div className="position-title">
                  <svg className="calendar-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                  </svg>
                  <span className="position-text">
                    Frontend Developer <small>(Dec 2024 – July 2025 · 8 months)</small>
                  </span>
                </div>
                <div className="employment-type">Full-time Position</div>
              </div>

            </div>
          </div>

          {/* Experience Content */}
          <div className="experience-content">
            <div className="content-intro">
              <h4 className="contributions-title">Key Contributions</h4>
              <p className="contributions-desc">
                Contributed to the development and optimization of Pazago's logistics portal, focusing on
                user interface improvements, performance enhancements, and code optimization to deliver
                a seamless experience for clients in the logistics industry.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="achievement-item"
                >
                  <div className="achievement-content">
                    <div className="icon-container">
                      {achievement.icon}
                    </div>
                    <div className="achievement-text">
                      <h5 className="achievement-title">
                        {achievement.title}
                      </h5>
                      <p className="achievement-desc">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Tags */}
            <div className="skills-section">
              <h5 className="skills-title">Technologies & Skills</h5>
              <div className="skills-container">
                {['React', 'JavaScript', 'UI/UX', 'API Optimization', 'Component Development', 'Performance Tuning', 'Bug Fixing', 'Form Development'].map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="bottom-accent">
          <div className="accent-content">
            <div className="accent-dot"></div>
            <span className="accent-text">Committed to Excellence in Development</span>
            <div className="accent-dot"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main Section Container */
        .experience-section {
          background-color: white;
          padding-top: 64px;
          padding-bottom: 64px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .experience-container {
          max-width: 896px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 48px;
           color: #383874;
        }

        .section-title {
          font-size: 30px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .section-divider {
          width: 80px;
          height: 4px;
         
          margin-left: auto;
          margin-right: auto;
        }

        /* Experience Card */
        .experience-card {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border-left: 4px solid #f97316;
          overflow: hidden;
        }

        /* Company Header */
        .company-header {
          background: linear-gradient(to right, #fff7ed, #fed7aa);
          padding: 32px;
        }

        .company-info-flex {
          display: flex;
          flex-direction: column;
        }

        .company-left {
          margin-bottom: 16px;
        }

        .company-name {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .company-type {
          color: #ea580c;
          font-weight: 600;
          font-size: 18px;
          display: flex;
          align-items: center;
        }

        .map-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }

        .position-right {
          text-align: right;
        }

        .position-title {
          display: flex;
          align-items: center;
          color: #4b5563;
          margin-bottom: 4px;
        }

        .calendar-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }

        .position-text {
          font-weight: 500;
        }

        .employment-type {
          font-size: 14px;
          color: #6b7280;
        }

        /* Experience Content */
        .experience-content {
          padding: 32px;
        }

        .content-intro {
          margin-bottom: 32px;
        }

        .contributions-title {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .contributions-desc {
          color: #4b5563;
          line-height: 1.625;
        }

        /* Achievements Grid */
        .achievements-grid {
          display: grid;
          gap: 24px;
        }

        .achievement-item {
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #f3f4f6;
          transition: all 0.3s;
        }

        .achievement-item:hover {
          border-color: #fed7aa;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transform: translateY(-4px);
        }

        .achievement-content {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .icon-container {
          flex-shrink: 0;
          padding: 12px;
          background-color: #fed7aa;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .achievement-item:hover .icon-container {
          background-color: #f97316;
          color: white;
        }

        .achievement-icon {
          width: 20px;
          height: 20px;
        }

        .achievement-text {
          flex-grow: 1;
        }

        .achievement-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 8px;
          transition: color 0.3s;
        }

        .achievement-item:hover .achievement-title {
          color: #ea580c;
        }

        .achievement-desc {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.625;
        }

        /* Skills Section */
        .skills-section {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #f3f4f6;
        }

        .skills-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          padding-left: 12px;
          padding-right: 12px;
          padding-top: 4px;
          padding-bottom: 4px;
          background-color: #fff7ed;
          color: #c2410c;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid #fed7aa;
          transition: background-color 0.2s;
        }

        .skill-tag:hover {
          background-color: #fed7aa;
        }

        /* Bottom Accent */
        .bottom-accent {
          text-align: center;
          margin-top: 48px;
        }

        .accent-content {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ea580c;
        }

        .accent-dot {
          width: 8px;
          height: 8px;
          background-color: #f97316;
          border-radius: 50%;
        }

        .accent-text {
          font-weight: 500;
        }

        /* Responsive Design - Medium screens and up */
        @media (min-width: 768px) {
          .section-title {
            font-size: 36px;
          }

          .company-info-flex {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .company-left {
            margin-bottom: 0;
          }

          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

export default ExperienceSection;