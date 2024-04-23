import React from "react";
import { Chrono } from "react-chrono";

const TimelineComponent = () => {
  const items = [
    {
      title: "June 2023 (6 Months)",
      cardTitle: "Foodline Internship",
      cardSubtitle: "Full-stack Software Engineer",
      cardDetailedText:
        "Full-stack web developer experienced in PHP and JavaScript, enhancing back-end efficiency and responsiveness. Spearheaded automated testing to boost code reliability and user satisfaction. Advanced database management with MySQL, optimizing data operations. Enhanced user interface with sophisticated CSS techniques, ensuring a cohesive and engaging user experience.",
    },
    {
      title: "August 2023",
      cardTitle: "Odysea Company",
      cardSubtitle: "Chief Technology Officer",
      cardDetailedText:
        "Developed and launched odysea.sg as a solo project, utilizing Next.js and TypeScript to meet startup goals and facilitate learning in project management. Enhanced user interface with Tailwind CSS for optimal responsiveness across devices. Employed Firebase for robust, real-time data handling and integrated Google Maps API for advanced location-based services. Successfully deployed on Vercel and established a custom domain, ensuring efficient live operations.",
    },
    {
      title: "March 2024",
      cardTitle: "Personal Website",
      cardSubtitle: "Full-Stack Website",
      cardDetailedText: "",
    },
  ];

  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      disableToolbar
      disableInteraction
    >
      <div className="chrono-icons"></div>
    </Chrono>
  );
};

export default TimelineComponent;
