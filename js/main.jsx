import 'css/app.css'
import React from 'nestedreact'
import { Link } from 'nestedtypes'
import ReactDOM from 'react-dom'
import ToDoModel from './model.js'
import TodoList from './todolist.jsx'

const App = React.createClass({
	attributes : {
		todos : ToDoModel.Collection
	},

	render(){
		let { todos } = this.state;

		return (
			<div>
				<section className="todoapp">
					<AddTodo onEnter={ desc => todos.addTodo( desc ) }/>
					<TodoList todos={ todos } />
					<Filter/>
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

const Filter = () => (
	<footer className="footer">

		<span className="todo-count"><strong>0</strong> item left</span>

		<ul className="filters">
			<li>
				<a className="selected" href="#/">All</a>
			</li>
			<li>
				<a href="#/active">Active</a>
			</li>
			<li>
				<a href="#/completed">Completed</a>
			</li>
		</ul>

		<button className="clear-completed">Clear completed</button>
	</footer>
);

ReactDOM.render( <App />, document.getElementById( 'app-mount-root' ) );

