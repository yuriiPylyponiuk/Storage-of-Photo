import React from 'react';
import {getRandomPhotoReq, getGrayScale, getBlureFirst, getBlureSecond} from '../../redux/randomPhotos/randomPhotoActions'
import {connect} from "react-redux";

class RandomComponent extends React.Component {
  constructor(props){
    super(props);
    this.showRandomFotoBlock = this.showRandomFotoBlock.bind(this)
  }

  showRandomFotoBlock(){
    if(this.props.loaded){
      let url = this.props.photo.config.baseURL+'/id/'+this.props.photo.headers['picsum-id']+'/800/600';
      console.log(url)
      let urlForFilters = '/id/'+this.props.photo.headers['picsum-id']+'/800/600';
        return(
          <div>
            {this.props.newPhoto? 
              <img src={'https://picsum.photos'+ this.props.data} alt=""/>:        
              <img src={url} alt=""/>
            }
            <button onClick = {()=> this.props.getGrayScale(urlForFilters+'?grayscale')}>GrayScale</button>
            <button onClick = {()=> this.props.getBlureFirst(urlForFilters+'?blur')}>Blur1</button>
            <button onClick = {()=> this.props.getBlureSecond(urlForFilters+'?blur=2')}>blur2</button>
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

export default connect(mapStateToProps, {getRandomPhotoReq, getGrayScale, getBlureFirst, getBlureSecond})(RandomComponent);