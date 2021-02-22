import React from 'react';
import {connect} from "react-redux";
import {getPhotoById} from '../../redux/photoitem/photoitemActions';

class PhotoComponent extends React.Component{
  constructor(props){
    super(props)
    this.showPhoto = this.showPhoto.bind(this)
  }

  componentDidMount(){
    this.props.getPhotoById(this.props.id)
  }

  showPhoto(){
    if(this.props.loaded){
      return(
        <div>
          <img src={this.props.data.request.responseURL} alt=""/>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <h1>sgdvbhnj</h1>
        {this.showPhoto()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.photo}
}

export default connect(mapStateToProps, {getPhotoById})(PhotoComponent);