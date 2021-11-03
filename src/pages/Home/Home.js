import React,{useEffect} from 'react';
import './Home.css';
import {PosterCard,Genre} from '../../components';
import {useStateContext} from '../../contexts/StateContext';
import {Spinner} from 'react-bootstrap';

const Home = () => {

	const {fetchData,data} = useStateContext();

	useEffect(()=>{
		 fetchData(`videos?part=snippet&chart=mostPopular`);
		 // eslint-disable-next-line
	},[]);


	return(
			<div className="home">
			<div className="genre__container"> 
				<Genre />
			</div>
				<div className="home__poster__card">
					{
						data.length ?
						data.map((video,i) =>(
								<PosterCard key={i} video={video}/>
							))
						: <Spinner animation="border"/>
					}									
				</div>
			</div>
		)
}

export default Home;