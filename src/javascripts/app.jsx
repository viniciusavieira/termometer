import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'stylesheets/base.scss';

class App extends React.Component {

	static BASEPATH;
	static Snackbar;

	constructor(){
		super();
		App.BASEPATH = "termometer/";

	}
	componentDidMount()
	{
		App.ModalContainer =  this.refs.modalContainer;
	}
	static changeRoute(routeString, replace)
	{
		if(replace)
		{
			browserHistory.replace("/"+App.BASEPATH+"/"+routeString);
		}else{
			browserHistory.push("/"+App.BASEPATH+"/"+routeString);
		}
	}

	render()
	{
		return (
			<div>
				<div className="children">
						{this.props.children}
				</div>
			</div>
		);
	}
}

export default App
