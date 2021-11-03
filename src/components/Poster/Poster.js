import React from 'react';
import './Poster.css';
import { GrChannel } from "react-icons/gr";
import moment from 'moment';
import {useHistory} from 'react-router-dom';

const Poster = ({video}) => {

	const history = useHistory();

	const getVideoDetails = (data) =>{
		const videoId = data.id.videoId ? data.id.videoId : data.id;
		if(typeof(videoId) === 'object') return;
		history.push({
			pathname:'/videodetails',
			state:{
				videoId:videoId,
				title:data.snippet.title,
				desc:data.snippet.description,
				channel:data.snippet.channelTitle
			}
		});
		window.scroll(0,0)
	}

	return(
			<div className="main__poster__card" onClick={()=>getVideoDetails(video)}>
				<img src={video?.snippet?.thumbnails?.high?.url} alt=""/>
				<b className="post__title">{video?.snippet?.title}</b>
				<span className="post__subtitle">
					<span><GrChannel />{video?.snippet?.channelTitle}</span>
					<span>{video?.snippet?.publishedAt && moment(video?.snippet?.publishedAt).format('YYYY-MM-DD')}</span>
				</span>
			</div>
		)
}

export default Poster;