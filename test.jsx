import React from 'nestedreact'
import ReactDOM from 'react-dom'


const Input = ({ valueLink }) => (
    <div>
        <label>
            Name: <input value={ valueLink.value }
                         onChange={ e => valueLink.set( e.target.value ) } />
        </label>
    </div>
);

const App = React.createClass({
    attributes : {
        name1 : 'Vlad',
        name2 : 'Alex'
    },

	render(){
		return (
            <div>
				<span>Hello World!</span>
                <Input valueLink={ this.model.getLink( 'name1' ) } />
                <Input valueLink={ this.model.getLink( 'name2') } />
            </div>
		);
	}
});

ReactDOM.render( <App />, document.getElementById( 'app-mount-root' ) );
