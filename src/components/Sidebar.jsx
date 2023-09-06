import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const stackStyles = {
    overflowY: "auto",
    height: { sx: "auto", md: "95%" },
    flexDirection: { md: "column" },
  };

  const buttonStyles = (category) => {
    return {
      background: category.name === selectedCategory ? "#FC1503" : "transparent",
      color: "white",
    };
  };

  const iconStyles = (category) => {
    return {
      color: category.name === selectedCategory ? "white" : "red",
      marginRight: "15px",
    };
  };

  const textStyles = (category) => {
    return {
      opacity: category.name === selectedCategory ? "1" : "0.8",
    };
  };

  return (
    <Stack direction="row" sx={stackStyles}>
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={buttonStyles(category)}
          key={category.name}
        >
          <span style={iconStyles(category)}>{category.icon}</span>
          <span style={textStyles(category)}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Categories;
