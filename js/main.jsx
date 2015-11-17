import 'css/app.css'
import React from 'nestedreact'
import ReactDOM from 'react-dom'

const App = () => (
	<div>
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="What needs to be done?" autofocus/>
			</header>

			<section className="main">
				<input className="toggle-all" type="checkbox"/>
					<label for="toggle-all">Mark all as complete</label>
					<ul className="todo-list">

						<li className="completed">
							<div className="view">
								<input className="toggle" type="checkbox" checked/>
									<label>Taste JavaScript</label>
									<button className="destroy"></button>
							</div>
							<input className="edit" value="Create a TodoMVC template"/>
						</li>
						<li>
							<div className="view">
								<input className="toggle" type="checkbox"/>
									<label>Buy a unicorn</label>
									<button className="destroy"></button>
							</div>
							<input className="edit" value="Rule the web"/>
						</li>
					</ul>
			</section>

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
		</section>
		<footer className="info">
			<p>Double-click to edit a todo</p>

			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>

			<p>Created by <a href="http://todomvc.com">you</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
	</div>
);

ReactDOM.render( <App />, document.getElementById( 'app-mount-root' ) );

