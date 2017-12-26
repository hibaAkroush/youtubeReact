//when we import a componant it HAS to have a capital first letter
import React, {Component} from 'react';
import _ from "lodash"
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar"
import YTSearch from 'youtube-api-search'
import VideoList from "./components/video_list"
import VideoDetail from "./components/video_detail"


const API_KEY = "AIzaSyCJRF60rF7Rr0j8VwX-QCTnknEMB7KHIyA";

//a calss component is used when we want to use a state
// this.state is used ONLY when we define it in constructor or we call it as a variable in jsx
// if we want to modify state use this.setState
// if we have many tags we have to enclose them in a div
// line onVideoSelect we are writting a function that updates the state this function is passed to the list component




class App extends Component {
	constructor(props){

		super(props)
		this.state = { videos : [],
		selectedVideo : null };

		this.videoSearch("caravaggio") 
	}

	videoSearch(term){
		YTSearch({key:API_KEY, term: term }, (data) => {
		this.setState({ videos : data,
						selectedVideo: data[0] });

		})	
	}

	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300) 


		return (
			<div>
				<SearchBar 
				onSearchTermChange = {videoSearch}/>
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList
				 onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
				 videos = {this.state.videos}/>
			</div>
			)
	}
}

ReactDOM.render( <App/>,document.getElementsByClassName('container')[0]);

