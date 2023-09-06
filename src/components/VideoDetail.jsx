import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Videos, Loader } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideoDetail = async () => {
      const videoDetailData = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
      setVideoDetail(videoDetailData.items[0]);
    };

    const fetchRelatedVideos = async () => {
      const relatedVideosData = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);
      setVideos(relatedVideosData.items);
    };

    fetchVideoDetail();
    fetchRelatedVideos();
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  const playerStyles = {
    width: '100%',
    position: 'sticky',
    top: '86px',
  };

  const titleStyles = {
    color: '#fff',
    variant: 'h5',
    fontWeight: 'bold',
    p: 2,
  };

  const channelLinkStyles = {
    variant: { sm: 'subtitle1', md: 'h6' },
    color: '#fff',
  };

  const channelIconStyles = {
    fontSize: '12px',
    color: 'gray',
    ml: '5px',
  };

  const infoContainerStyles = {
    color: '#fff',
    py: 1,
    px: 2,
    justifyContent: 'space-between',
  };

  const viewCountStyles = {
    variant: 'body1',
    opacity: 0.7,
  };

  const likeCountStyles = {
    variant: 'body1',
    opacity: 0.7,
  };

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={playerStyles}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography {...titleStyles}>{title}</Typography>
            <Stack direction="row" sx={infoContainerStyles}>
              <Link to={`/channel/${channelId}`}>
                <Typography {...channelLinkStyles}>
                  {channelTitle}
                  <CheckCircleIcon sx={channelIconStyles} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography {...viewCountStyles}>{parseInt(viewCount).toLocaleString()} views</Typography>
                <Typography {...likeCountStyles}>{parseInt(likeCount).toLocaleString()} likes</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
