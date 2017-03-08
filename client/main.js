var CounterChallenge = React.createClass({
	getInitialState() {
		return {
			count: 0
		}
	},

	incrementCount(value) {
		this.setState({
			count: this.state.count + value
		});
	},

	getDefaultProps() {
		return {
			valueOne: 1,
			valueTwo: 5,
			valueThree: 10,
			text: 'Add'
		}
	},
	//if these props are not passed into <CounterChallenge /> use these by default

	render() {
		return (
			<div className="container">
				<h1>Count: {this.state.count}</h1>
				<Button style="btn blue-btn"
								text={`${this.props.text} ${this.props.valueOne}`}
								value={this.props.valueOne}
								clickHandler={this.incrementCount.bind(this, this.props.valueOne)}
				/>
				<Button style="btn green-btn"
								text={`${this.props.text} ${this.props.valueTwo}`}
								value={this.props.valueTwo}
								clickHandler={this.incrementCount.bind(this, this.props.valueTwo)}
				/>
				<Button style="btn purple-btn"
								text={`${this.props.text} ${this.props.valueThree}`}
								value={this.props.valueThree}
								clickHandler={this.incrementCount.bind(this, this.props.valueThree)}
				/>
			</div>
		)
	}
});

var Button = function(props) {
	return (
		<button className={props.style} value={props.value}
						onClick={props.clickHandler} >
			{props.text}
		</button>
	)
}

ReactDOM.render(
	<CounterChallenge valueOne={100} valueTwo={500} valueThree={1000} />,
	document.getElementById('app')
);
