import React from 'react'
import RandomComponent from '../../components/randomComponent/randomComponent'

class RandomPage  extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<RandomComponent />
			</div>
		)
	}
}


export default RandomPage;