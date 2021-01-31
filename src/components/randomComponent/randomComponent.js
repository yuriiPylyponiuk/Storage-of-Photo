import React from 'react';
import {getRandomPhotoReq, getGrayScale, getBlureFirst, getBlureSecond, normalPhoto} from '../../redux/randomPhotos/randomPhotoActions';
import {connect} from "react-redux";
import './randomPhotoStyle.css';

class RandomComponent extends React.Component {
  constructor(props){
    super(props);
    this.showRandomFotoBlock = this.showRandomFotoBlock.bind(this)
  }

  showRandomFotoBlock(){
    if(this.props.loaded){
      let url = this.props.photo.config.baseURL+'/id/'+this.props.photo.headers['picsum-id']+'/800/600';
      let urlForFilters = '/id/'+this.props.photo.headers['picsum-id']+'/800/600';
        return(
          <div className='randomPhotoBlock'>
            {this.props.newPhoto? 
              <img src={'https://picsum.photos'+ this.props.data} alt=""/>:        
              <img src={url} alt=""/>
            }
            <div className="randomPhotoBlock-filters">
              <button className="randomPhotoBlock-filters-btn btn" onClick = {()=> this.props.normalPhoto()}>Normal</button>
              <button className="randomPhotoBlock-filters-btn btn" onClick = {()=> this.props.getGrayScale(urlForFilters+'?grayscale')}>GrayScale</button>
              <button className="randomPhotoBlock-filters-btn btn" onClick = {()=> this.props.getBlureFirst(urlForFilters+'?blur')}>Blur1</button>
              <button className="randomPhotoBlock-filters-btn btn" onClick = {()=> this.props.getBlureSecond(urlForFilters+'?blur=2')}>blur2</button>
            </div>
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

export default connect(mapStateToProps, {getRandomPhotoReq, getGrayScale, getBlureFirst, getBlureSecond, normalPhoto})(RandomComponent);