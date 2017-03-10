var LifecycleComponent = React.createClass({
	increment() {
		this.setState({
			count: this.state.count + 1
		});
	},
	stopInterval() {
		clearInterval(this.interval);
	},
	// 1 called ONCE
  // BEFORE COMPONENT IS RENDERED
  // HAPPENS WHEN OUR CLASS IS CREATED!!!
	getDefaultProps() {
		// console.log('01--getDefaultProps');
		return ({
			firstName: 'Jesse',
			lastName: 'Soldat',
			age: 36
		});
	},
	// 2 called ONCE
  // BEFORE COMPONENT IS RENDERED
  // The return value will be used as the initial value 
  getInitialState() {
  	// console.log('02--getInitialState');
  	return ({
  		count: 0
  	});
  },
  // 3 called ONCE
  // BEFORE COMPONENT IS RENDERED
  componentWillMount() {
  	// console.log('03--componentWillMount');
  },
  // 4
  // Happend whenever our component changes
  render() {
  	// console.log('04--render()');
  	return (
		<div>
  		<button className="btn grey-btn number" onClick={this.increment}>
  			{this.state.count}
  		</button>
  		<button className="btn grey-btn text" onClick={this.stopInterval}>Stop Counter</button>
  	</div>
  	)
  },
  // 5 ONLY ONCE
  // AFTER COMPONENT HAS RENDERED
  // If you want to integrate with other JavaScript frameworks,
  // set timers using setTimeout or setInterval, or send AJAX requests,
  // perform those operations in this method.
  componentDidMount() {
  	// console.log('05--componentDidMount');
  	this.interval= setInterval(this.increment, 1000);
  },
  // 6 ONLY ONCE
  // AFTER COMPONENT HAS RENDERED
  // Perform any necessary cleanup in this method,
  //  such as invalidating timers or cleaning up any DOM
  // elements that were created in componentDidMount.
  componentWillUnmount() {
  	// console.log('06--componentWillUnmount');
 		clearInterval(this.interval); 	
  }

});

var LifecycleContainer = React.createClass({
	mount() {
		ReactDOM.render (
			<LifecycleComponent />,
			document.querySelector('#mountHere')
		);
	},

	unmount() {
		ReactDOM.unmountComponentAtNode(
			document.querySelector('#mountHere'));
	},

	render() {
		return (
		<div className='container'>
			<button className="btn green-btn" onClick={this.mount}>
				Mount
			</button>
			<button className='btn red-btn' onClick={this.unmount}>
				Unmount
			</button>
		</div>
		);
	}
});

ReactDOM.render(
	<LifecycleContainer />,
	document.getElementById('lifecycle')
	)