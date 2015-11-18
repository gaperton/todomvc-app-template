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
			}
		}
	}
});

export default ToDo;
