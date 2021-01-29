import React from 'react';
import {getRandomPhotoReq, getFullUrl} from '../../redux/randomPhotos/randomPhotoActions'
import {connect} from "react-redux";

class RandomComponent extends React.Component {
  constructor(props){
    super(props);
    this.showRandomFotoBlock = this.showRandomFotoBlock.bind(this)
  }

  showRandomFotoBlock(){
    if(this.props.loaded){
        let url = this.props.photo.config.baseURL+'/id/'+this.props.photo.headers['picsum-id']+'/800/600';
        this.props.getFullUrl(url)
        return(
          <div>
            <img src={url} alt=""/>
          </div>
        )
    }
  }

  render(){
    return(
      <div>
        {this.showRandomFotoBlock()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state.randomPhoto}
}

export default connect(mapStateToProps, {getRandomPhotoReq, getFullUrl})(RandomComponent);