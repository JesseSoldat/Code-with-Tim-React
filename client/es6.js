class Counter extends React.Component {
	constructor(props) {
	  super(props);
	  //'this' is not allowed before super()
		//console.log(props); //Object {text: "Hello World"}
	  this.state = { count: 0 };

	  this.bindClickConstructor = this.bindClickConstructor.bind(this);
	  //only needed with construtor function 
	}

	bindClickConstructor() {
		console.log("bindClickConstructor ", this);
	}

	bindClick(value) {
		console.log("bindClick ", value, this);
	}

	arrowClick(value) {
		console.log("arrow function ", value, this);
		this.setState({
			count: this.state.count + value
		});
	}

	render() {
		//console.log(this); //still have (this) without constructor
		return (
		<div>	
			<h3>{this.props.text} {this.state.count}</h3>
			<hr/>
			<div onClick={() => this.arrowClick(10)}>
				() => this.arrowClick(10)
			</div>
			<br/>
			<div onClick={this.bindClick.bind(this, 20)}>
				this.bindClick.bind(this, 20);
			</div>
			<br/>

			<div onClick={this.bindClickConstructor}>
				this.bindClickConstructor
			</div>
		</div>
		);
	}
}
//define outside of property
Counter.defaultProps = {
  text: 'Hello World'
}
Counter.propTypes = {
  text: React.PropTypes.string
}

ReactDOM.render(<Counter />, 
	document.getElementById('es6')
	)