import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    
    const rederedList = props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect} />
    });

    return <div className="ui relaxed divided list">{rederedList}</div>
}

export default VideoList;