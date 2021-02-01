import React from 'react'
import {Link} from 'react-router-dom'
import {getRandomPhotoReq} from '../../redux/randomPhotos/randomPhotoActions'
import {connect} from "react-redux";
import './navStyles.css'

const Header = (props) => {
	return (
		<nav className="menu">
      <Link className='btn' to="/">Home</Link>
      <Link className='btn' onClick={() => props.getRandomPhotoReq()} to="/random-photo/">Random Photo</Link>
      <Link className='btn' to="/cardPage/">Cart</Link>
		</nav>
	);
}

const mapStateToProps = (state) => {
  return {...state.randomPhoto}
}

export default connect(mapStateToProps, {getRandomPhotoReq})(Header);