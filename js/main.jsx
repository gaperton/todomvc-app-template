import 'css/app.css'
import React from 'nestedreact'
import { Link } from 'nestedtypes'
import ReactDOM from 'react-dom'
import ToDoModel from './model.js'
import TodoList from './todolist.jsx'

const App = React.createClass({
	attributes : {
		todos : ToDoModel.Collection,
		filterDone : Boolean.value( null )
	},

	render(){
		let { todos } = this.state;

		return (
			<div>
				<section className="todoapp">
					<AddTodo onEnter={ desc => todos.addTodo( desc ) }/>
					<TodoList todos={ todos } filterDone={ this.state.filterDone }/>
					<Filter count={ todos.activeCount }
							filterLink={ this.state.getLink( 'filterDone' )}
							onClear={ () => todos.clearCompleted() }
					/>
				</section>
				<footer className="info">
					<p>Double-click to edit a todo</p>

					<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>

					<p>Created by <a href="http://todomvc.com">Vlad Balin</a></p>
					<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
				</footer>
			</div>
		);
	}
});

const AddTodo = React.createClass({
	attributes : {
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

const Filter = ({ count, filterLink, onClear }) => (
	<footer className="footer">

		<span className="todo-count"><strong>{ count }</strong> item left</span>

		<ul className="filters">
			<li>
				<Radio checkedLink={ filterLink.equals( null ) } href="#/">All</Radio>
			</li>
			<li>
				<Radio checkedLink={ filterLink.equals( false ) } href="#/active">Active</Radio>
			</li>
			<li>
				<Radio checkedLink={ filterLink.equals( true ) } href="#/completed">Completed</Radio>
			</li>
		</ul>

		<button className="clear-completed" onClick={ onClear }>Clear completed</button>
	</footer>
);

const Radio = ({ checkedLink, children, ...props }) => (
	<a className={ checkedLink.value ? 'selected' : '' }
	   onClick={ () => checkedLink.set( true ) }
		{ ...props }>
		{ children }
	</a>
);

ReactDOM.render( <App />, document.getElementById( 'app-mount-root' ) );

