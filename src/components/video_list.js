import React, { Component } from 'react';
import VideoListItem from "./video_list_item"

// when using a functional component we use props.videos and pass props as argument
// when using a class component we use this.props.videos
const VideoList = (props) => {
	const videoItem = props.videos.map((video) => {
		return (< VideoListItem
			onVideoSelect = {props.onVideoSelect}
		 	key = { video.etag }
		    video = { video } />
		)
	})

	return (
		<ul calssName="col-md-4 list-group">
		{videoItem}
		</ul>
	)
}

export default VideoList;