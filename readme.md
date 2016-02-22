# NestedReact • [TodoMVC](http://todomvc.com)

React application architecture with [classical OO models](https://github.com/volicon/nestedtypes) in the data layer.

Feature list:

- First-class support for mutable models and collections in props, state, and context.
    - Unidirectional data flow and safe *pure render optimization*.
    - Two-way data binding ([Guide to Data Binding Use Cases](https://github.com/Volicon/NestedReact/blob/master/example/databinding.md))
    - Optional local component subtree updates.     
- Lightweight type annotations for props, *state*, and context as a replacement for `PropTypes`.
- Gradual transition procedure for backbone applications ([Backbone Migration Guide](https://github.com/Volicon/NestedReact/blob/master/docs/BackboneViews.md)):
    - Complete interoperation with existing Backbone Views allowing you to reuse existing code and avoid upfront application rewrite.
    - Any type of application refactoring strategy is possible - top-to-bottom, bottom-to-top, and random parts at the middle.  
    - Support for Backbone events and jQuery accessors in React components simplifies View refactoring. 

## Resources

- [NestedReact docs](https://github.com/Volicon/NestedReact)
- [Post-backbone models](https://github.com/Volicon/NestedTypes): 10x more performance, type safety, aggregation and relations right out of box. 
- [Used by](http://www.volicon.com/)

## Implementation

This TodoMVC application is written to demonstrate how powerful and expressive declarative OO data layer can be in React.

It features pure unidirectional data flow (which is common for Flux applications) achieved with conventional design
technique. Solution is several times shorter than any `flux` implementation, and in fact is one of the
 most compact and clean TodoMVC implementations available.

##FAQ
##### What does `editing : ToDo.from( '^props.todos' )` from `todolist.jsx` mean?
Shortly, this reference is a path relative to `this`. Symbol `^` means that we reference something from the upper level. Methods `.from` and `.subsetOf` are serialized as `id` and array of `id` from the model. You work with them same as with simple model or collection. To get this `id` we need a reference to the whole model. 

For instance, `someAttr : Model.from( 'items' )` means that in `someAttr` you have one of the models from collection `item`. Common use case: you have a list and you need a reference for selected item. 

## Credit

Created by Vlad Balin & [Volicon](http://www.volicon.com/)
