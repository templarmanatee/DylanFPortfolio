import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../data/portfolio";

function Portfolio() {
  return (
    // Flex column that becomes a flex-row on medium screens
    // Center all items for a clean look
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* Create a grid to store the portfolio projects */}
      <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-2 gap-10">
        {/* Map a portfolio item for each project in data/portfolio.js */}
        {portfolioData.map((project) => {
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
