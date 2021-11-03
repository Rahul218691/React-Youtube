import React from 'react';
import './Footer.css';
import {Link,withRouter} from 'react-router-dom';
import { MdHome } from "react-icons/md";


const currentTab = (history,path) =>{
	if(history.location.pathname === path){
		return {color:"#2ecc72"}
	}else{
		return {color:"#FFFFFF"}
	}
}



const Footer = (history,path) =>{
	return(
			<div className="footer__navigations">
				<Link to='/'><MdHome style={currentTab(history,'/')} className="footer__nav__icons"/></Link>
			</div>
		)
}

export default withRouter(Footer);