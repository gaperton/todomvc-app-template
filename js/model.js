import { Model } from 'nestedtypes'

let ToDo = Model.extend({
	defaults : {
		done : Boolean,
		desc : String
	},

	remove(){
		this.collection.remove( this );
	},

	collection : {
		addTodo( desc ){
			this.add( new ToDo({ desc : desc }) );
		},

		clearCompleted(){
			this.remove( this.filter( todo => todo.done ) );
		},

		properties : {
			allDone : {
				get(){
					return this.every( todo => todo.done );
				},
				set( val ){
					this.transaction( () =>{
						this.each( todo => todo.done = val );
					});
				}
			},

			activeCount(){
				return this.filter( todo => !todo.done ).length;
			}
		}
	}
});

export default ToDo;
