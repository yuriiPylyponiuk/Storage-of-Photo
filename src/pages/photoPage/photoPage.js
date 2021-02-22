import React from "react";
import PhotoComponent from "../../components/photo/photoComponent";

class PhotoPage extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<PhotoComponent />
			</div>
		)
	}
}


export default PhotoPage;