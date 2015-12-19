# NestedReact • [TodoMVC](http://todomvc.com)

This is React add-on providing advanced data binding and state management to React applications, as well as convergence layer for intermixing React components and Backbone Views. 

- Unidirectional data flow with OO data layer.
- Advanced component's state management with [NestedTypes](https://github.com/Volicon/backbone.nestedTypes).
- Comprehensive two-way data binding - [Guide to Data Binding Use Cases](/example/databinding.md)
- Transparent interoperation with Backbone Views:
	- React component can be used as backbone View. `new MyComponent.View({ props })`
	- Backbone Views can be used as React components. `<React.subview View={ MyView } />`
	- Simplified refactoring of Backbone Views to React components. `this.$`, `this.$el`, `this.$( sel )`, `this.model` works for React components too, as well as `this.trigger` and `this.listenTo`.

Also, if you have Backbone application and want to start writing with React - you have no excuses any more.
Wanna keep some of your cool Views? They works just fine? Keep 'em. 
And use them in your new components written with React, which in turn you may use in other Backbone Views.

## Resources

- [Documentation](https://github.com/Volicon/NestedReact)
- [Used by](http://www.volicon.com/)

## Implementation

This TodoMVC application is written to demonstrate two-way data binding, data layer, and state management facilities,
provided by combination of [NestedReact](https://github.com/Volicon/NestedReact) and 
[NestedTypes](https://github.com/Volicon/NestedTypes) data framework.

This example shows how to achieve pure unidirectional data flow (which is common for Flux applications)
without the usage of `Flux` pattern and excessive implementation efforts.

##FAQ
### What does `editing : ToDo.from( '^props.todos' )` from `todolist.jsx` mean?
Shortly, this reference is a path relative to `this`. Symbol `^` means that we reference something from the upper level. Methods `.from` and `.subsetOf` are serialized as `id` and array of `id` from the model. You work with them same as with simple model or collection. To get this `id` we need a reference to the whole model. 

For instance, `someAttr : Model.from( 'items' )` means that in `someAttr` you have one of the models from collection `item`. Common use case: you have a list and you need a reference for selected item. 

## Credit

Created by Vlad Balin & [Volicon](http://www.volicon.com/)
