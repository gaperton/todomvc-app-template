import React from 'nestedreact'

const AddTodo = React.createClass({
	props : {
		onEnter : Function
	},

	state : {
		desc : String
	},

	render(){
		return (
			<header className="header">
				<h1>todos</h1>
				<input 	className="new-todo" placeholder="What needs to be done?" autofocus
						  valueLink={ this.state.getLink( 'desc' ) }
						  onKeyDown = { this.onKeyDown }
				/>
			</header>
		);
	},

	onKeyDown({ keyCode }){
		if( keyCode === 13 ){
			let { state, props } = this;

			props.onEnter && props.onEnter( state.desc );
			state.desc = "";
		}
	}
});

export default AddTodo;
