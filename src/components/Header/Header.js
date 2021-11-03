import React,{useState} from 'react';
import './Header.css';
import Logo from '../../images/ytube.svg';
import { FaRegUserCircle,FaSearch } from "react-icons/fa";
import {useStateContext} from '../../contexts/StateContext';
import {withRouter} from 'react-router-dom';

const Header = ({history}) =>{

	const [keyword,setKeyWord] = useState('');
	const {fetchData} = useStateContext();

	const handleSearch = () =>{
		if(!keyword) return;
		if(history.location.pathname !== '/'){
			history.push('/');
			fetchData(`search?part=snippet&q=${keyword}`);
		}else{
			fetchData(`search?part=snippet&q=${keyword}`);
		}
	}

	return(
			<div className="header">
				<img src={Logo} alt="" className="img-fluid header__image"
				onClick={()=>window.scroll(0,0)}
				/>
				<div className="header__search">
					<input type='text'
					placeholder="search..."
					className="form-control"
					value={keyword}
					onChange={(e)=>setKeyWord(e.target.value)}
					/>
					<button className="btn" onClick={handleSearch}><FaSearch /></button>
				</div>
				<div className="user__icon">
					<FaRegUserCircle className="icon__user"/>
				</div>
			</div>
		)
}

export default withRouter(Header);