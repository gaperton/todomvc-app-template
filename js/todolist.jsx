import React from 'nestedreact'
import cx from 'classnames'

import ToDoModel from './model'

const TodoList = React.createClass({
	attributes : {
		editing : ToDoModel.value( null )
	},

	render(){
		const { todos } = this.props,
			  editingLink = this.state.getLink( 'editing' );

		return (
			<section className="main">
				<input className="toggle-all" type="checkbox"
					checkedLink={ todos.getLink( 'allDone' ) } />
				<label htmlFor="toggle-all">Mark all as complete</label>

				<ul className="todo-list">
					{ todos.map( todo => (
						<TodoItem key={ todo.cid } todo={ todo } editingLink={ editingLink } />
					))}
				</ul>
			</section>
		);
	}
});

export default TodoList;

const TodoItem = ({ todo, editingLink }) => {
	const editing = editingLink.value === todo,
		className = cx({
		'completed' : todo.done,
		'view' 		: !todo.done,
		'editing' 	: editing
	});

	return (
		<li className={ className }>
			<div className="view">
				<input className="toggle" type="checkbox" checkedLink={ todo.getLink( 'done' ) } />
				<label onDoubleClick={ () => editingLink.set( todo ) }>{ todo.desc }</label>
				<button className="destroy" onClick={ () => todo.remove() }></button>
			</div>
			{ editing && <input className="edit" valueLink={ todo.getLink( 'desc' ) }
				   autoFocus={ true } onBlur={ () => editingLink.set( null ) }
								onKeyDown={ e => e.keyCode === 13 && editingLink.set( null ) } /> }
		</li>
	);
};
