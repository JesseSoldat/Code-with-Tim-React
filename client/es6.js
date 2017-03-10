class Counter extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = { count: 0 };

	  this.click= this.click.bind(this);
	}

	click(value) {
		console.log(value);
		this.setState({
			count: this.state.count + value
		});
	}

	render() {
		return (
		<div onClick={() => this.click(10)}>
			{this.props.text} {this.state.count}
		</div>
		);
	}
}

Counter.defaultProps = {
  text: 'Hello World'
}
Counter.propTypes = {
  text: React.PropTypes.string
}

ReactDOM.render(<Counter />, 
	document.getElementById('es6')
	)