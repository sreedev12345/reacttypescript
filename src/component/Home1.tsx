import React from 'react';

type customValue = any;

interface Props {
	name : customValue
}

interface State {
	field : customValue
}

class Home1 extends React.Component<Props,State>{
	constructor(props:Props) {
	  super(props);
	  this.state = {
	    field : 1,
	  }
	}
	render() {
	  console.log(this.props,this.state)
	  return(
        <div>hello {this.props.name} your field is {this.state.field}</div>
	  )
	}
}

export default Home1;