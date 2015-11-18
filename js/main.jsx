import 'css/app.css'
import React from 'nestedreact'
import ReactDOM from 'react-dom'
import ToDoModel from './model.js'
import TodoList from './todolist.jsx'
import Filter from './filter.jsx'
import AddTodo from './addtodo.jsx'

const App = React.createClass({
	attributes : {
		id : 'todo-mvc',
		todos : ToDoModel.Collection,
		filterDone : Boolean.value( null )
	},

	componentWillMount(){
		let { state } = this;
		const json = localStorage.getItem( state.id );
		json && ( state.set( JSON.parse( json ), { parse: true }) );
		window.onunload = () => localStorage.setItem( state.id, JSON.stringify( state ) );
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

ReactDOM.render( <App />, document.getElementById( 'app-mount-root' ) );

