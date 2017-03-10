var LikesComponent = React.createClass({
	updateLikes() {
		ReactDOM.render(
			<LikesComponent likes={this.props.likes + 1}/>,
			document.getElementById('lifecycle-updates')
		);
	},
	getDefaultProps() {
		return({
			likes: 0
		})
	},
	
	getInitialState() {
		return({
			popular: false
		})
	},
	componentWillReceiveProps(nextProps) {
		console.log("Componentwillreceiveprops");
		// console.log(nextProps);
		this.setState({
			popular: nextProps.likes >= 10
		});
	},
	shouldComponentUpdate(nextProps, nextState) {
		console.log("ShouldComponentUpdate");
		// console.log(nextProps);
		// console.log(nextState);
		return nextProps.likes % 2 === 0;
		//only update on even numbers

	},
	render() {
		return (
		<div className="container">
			<h1>{this.state.popular ? "I'm popular" : null}</h1>
			<button className="btn pink-btn" onClick={this.updateLikes}>
				Likes: {this.props.likes}
			</button>
		</div>
		);
	},
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
		// console.log("Previous Props ", prevProps);
  //   console.log("Previous State ", prevState);
  //   console.log(ReactDOM.findDOMNode(this));	
	}
});

ReactDOM.render(
 <LikesComponent />,
 document.getElementById('lifecycle-updates')
 );