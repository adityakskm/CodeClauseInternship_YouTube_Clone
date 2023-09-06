import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items);
    };

    fetchData();
  }, [searchTerm]);

  const headerStyles = {
    variant: 'h4',
    fontWeight: 900,
    color: 'white',
    mb: 3,
    ml: { sm: '100px' },
  };

  const spanStyles = {
    color: '#FC1503',
  };

  const containerStyles = {
    display: 'flex',
  };

  const videosContainerStyles = {
    mr: { sm: '100px' },
  };

  return (
    <Box p={2} minHeight="95vh">
      <Typography {...headerStyles}>
        Search Results for <span style={spanStyles}>{searchTerm}</span> videos
      </Typography>
      <Box sx={containerStyles}>
        <Box sx={videosContainerStyles} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
