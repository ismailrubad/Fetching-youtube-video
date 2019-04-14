import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

    const rederedList = props.videos.map((video) => {
        return <VideoItem video={video}  />
    });

    return <div>{rederedList}</div>
}

export default VideoList;