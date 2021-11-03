import axios from 'axios';
import React,{createContext,useContext,useState} from 'react';

const StateContext = createContext();


export const StateContextProvider = ({children}) =>{

	const [data,setData] = useState([]);
	const [loading,setLoading] = useState(false);
	const [results,setResults] = useState([]);
	const [related,setRelated] = useState([]);
	const [selected,setSelected] = useState({});

	const fetchData = async (url) =>{
		setLoading(true);
		const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`,{
			params:{
				key:process.env.REACT_APP_API_KEY,
				maxResults:50
			}
		});
		setData(data?.items);
		setLoading(false);
	}

	const fetchCategories = async(url) =>{
		const data1 = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`,{
			params:{
				key:process.env.REACT_APP_API_KEY,
				regionCode: 'IN',
			}
		})
		setResults(data1?.data?.items);
	}


	const getRelated = async(url) =>{
		const data2 = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`,{
			params:{
				key:process.env.REACT_APP_API_KEY,
				maxResults:10,
				type:'video'
			}
		});
		setRelated(data2?.data?.items);
	}


	const addToSelected = (genre) =>{
		if(genre.id !== selected.id){
			setResults([...results.filter((g)=>g.id !== genre.id),selected]);
		}
		setSelected(genre);
	}


	return(
			<StateContext.Provider
			value={{
				results,
				data,
				loading,
				fetchData,
				fetchCategories,
				related,
				getRelated,
				selected,
				addToSelected
			}}>
				{children}
			</StateContext.Provider>
		)
}

export const useStateContext = () =>useContext(StateContext);
