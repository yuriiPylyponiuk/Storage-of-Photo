import React from 'react';
import {connect} from "react-redux";
import {byuPhoto, deletePhoto} from '../../redux/cart/cartAction';

class PhotoComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h1>Hello Yurii</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.cart}
}

export default connect(mapStateToProps, {byuPhoto, deletePhoto})(PhotoComponent);