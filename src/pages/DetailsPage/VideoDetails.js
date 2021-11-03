import React,{useEffect} from 'react';
import YouTube from 'react-youtube';
import './Details.css';
import {Row,Col,Spinner} from 'react-bootstrap';
import {PosterCard} from '../../components';
import {useStateContext} from '../../contexts/StateContext';
import { GrChannel } from "react-icons/gr";

const VideoDetails = (props) =>{
	const {location:{state:{videoId,title,desc,channel}}} = props;
	
	const {getRelated,related} = useStateContext();

    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };

    useEffect(()=>{
    	getRelated(`search?part=snippet&relatedToVideoId=${videoId}`);
		 // eslint-disable-next-line
    },[videoId])


	return(
		<div className="video">
			<Row>
					<Col md={8} className="video__main__container">
							<YouTube 
									videoId={videoId}
									opts={opts}
									className='video_el'
								/>
								<b className="title__center">{title}</b>
								<hr />
									<h6 className="channel__center"><GrChannel /> {channel}</h6>
								<hr />
								<p className="desc__info">{desc}</p>
					</Col>
					<Col md={4} className="video__related__contents">
							{
								related.length ?
								related.map((video,i) =>(
										<PosterCard key={i} video={video}/>
									))
								: <Spinner animation="border"/>
							}
					</Col>
			</Row>
		</div>
		)
}

export default VideoDetails;