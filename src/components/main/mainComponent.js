import React from 'react';
import {connect} from "react-redux";
import './mainComponent.css'
import {getAllPhotosRequestAction} from '../../redux/listOfPhotos/listPhotosActions'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.createListOfPhot = this.createListOfPhot.bind(this)
  }

  componentDidMount(){
    this.props.getAllPhotosRequestAction({limit: 100})
  }

  createListOfPhot(){
    if(this.props.products.show){
      return(
        this.props.products.data.map( item => {
          return(
            <div key={item.id} className='item-block'>
              <div className='photo-block'>
                <img src={item.download_url} alt="Photos"/>
              </div>
              <h2 className='photo-author'><span>Author:</span>{item.author}</h2>
            </div>
          )
        })
      )
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Chose your photo</h1>
        <div className='list-of-phots'>
          {this.createListOfPhot()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state.listPhotos}
}

export default connect(mapStateToProps, {getAllPhotosRequestAction})(Main);