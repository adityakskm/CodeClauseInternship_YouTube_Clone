import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  const sidebarStyles = {
    height: { sx: "auto", md: "92vh" },
    borderRight: "1px solid #3d3d3d",
    px: { sx: 0, md: 2 },
  };

  const copyrightStyles = {
    mt: 1.5,
    color: "#fff",
  };

  const videosContainerStyles = {
    overflowY: "auto",
    height: "90vh",
    flex: 2,
  };

  const headerStyles = {
    variant: "h4",
    fontWeight: "bold",
    mb: 2,
    color: "white",
  };

  const spanStyles = {
    color: "#FC1503",
  };

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={sidebarStyles}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={copyrightStyles}>
          © 2023 By, K Aditya
        </Typography>
      </Box>

      <Box p={2} sx={videosContainerStyles}>
        <Typography {...headerStyles}>
          {selectedCategory} <span style={spanStyles}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
