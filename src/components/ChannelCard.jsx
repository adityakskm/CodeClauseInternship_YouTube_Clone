import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  const cardStyles = {
    boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '356px', md: '320px' },
    height: '326px',
    margin: 'auto',
    marginTop,
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#fff',
  };

  const cardMediaStyles = {
    borderRadius: '50%',
    height: '180px',
    width: '180px',
    mb: 2,
    border: '1px solid #e3e3e3',
  };

  const titleStyles = {
    variant: 'h6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  };

  const iconStyles = {
    fontSize: '14px',
    color: 'gray',
    ml: '5px',
  };

  const subscriberStyles = {
    fontSize: '15px',
    fontWeight: 500,
    color: 'gray',
  };

  return (
    <Box sx={cardStyles}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`} style={linkStyles}>
        <CardContent>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={cardMediaStyles}
          />
          <Typography {...titleStyles}>
            {channelDetail?.snippet?.title} <CheckCircleIcon sx={iconStyles} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={subscriberStyles}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
