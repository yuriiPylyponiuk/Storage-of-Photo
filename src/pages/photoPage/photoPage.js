import React from "react";
import PhotoComponent from "../../components/photo/photoComponent";

class PhotoPage extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<PhotoComponent id = {this.props.match.params.id}/>
			</div>
		)
	}
}


export default PhotoPage;