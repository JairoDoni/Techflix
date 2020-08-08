import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { ContentAreaContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  url,
}) {
  const youTubeID = getYouTubeId(url);
  return (
    <ContentAreaContainer>
      <ContentAreaContainer.Item>
        <VideoIframeResponsive
          youtubeID={youTubeID}
        />
      </ContentAreaContainer.Item>
    </ContentAreaContainer>
  );
}
