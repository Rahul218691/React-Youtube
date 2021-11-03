import React,{useEffect} from 'react';
import {useStateContext} from '../../contexts/StateContext';

const Genre = () =>{

	const {fetchCategories,results,fetchData,addToSelected,selected} = useStateContext();

	useEffect(()=>{
		if(results.length) return;
		fetchCategories(`videoCategories?part=snippet`);
		 // eslint-disable-next-line
	},[])

	const handleSearch = (data) =>{
		if(data?.snippet?.title){
			fetchData(`search?part=snippet&q=${data?.snippet?.title}`);
			addToSelected(data);
		}
	}

	return(
			<div className="genre__spans" style={{padding:'6px 0'}}>
				{
					selected && (
							<span
							className="badge rounded-pill bg-primary"
							style={{margin:'2px',cursor:'pointer',fontSize:'16px'}}
							>{selected?.snippet?.title}</span>
						)
				}
				{
					results.map((res,i) =>(
						<span className="badge rounded-pill bg-secondary"
						style={{margin:'2px',cursor:'pointer',fontSize:'16px'}}
						key={i}
						onClick={()=>handleSearch(res)}
						>
						{res?.snippet?.title}
						</span>
						))
				}
			</div>
		)
}

export default Genre;