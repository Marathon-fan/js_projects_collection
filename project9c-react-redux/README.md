
# how to use it

Redux use unidirectional binding

action -> dispatcher -> store -> react view ->--
|                                               |
|------------------------------------------------


## action: user interactions  
encapsulates events; tringgered by user interactions and server; passed to dispatcher   
payload has type and data
```
{
	type: USER_SAVED
	data: {
		firstName:'Cory',
		lastName:'House';
	}
}
```

## dispatcher: notify everyone who cares   
Central Hub - There's only one   
Holds list of callbacks   
Broadcasts payload to registered callbacks   
sends actions to stores

### Constants  
Keeps things organized   
provides high level view of what the app actually does    

## store: hold app state    
Holds app state, logic, data retrieval   
Not a model-contains models   
One app may have one store or many stores    
Registers callbacks with dispatcher(Only stores are allowed to register dispatcher callbacks. Components are not allowed to do so)    
Uses Node's EventEmitter    

The structure of a Store
```
Every store has these common traits(aka interface)
1 Extend EventEmitter
2 addChangeListener and removeChangeListener
3 emitChange
```

```
          dispatcher
             |
             payload
             |
    -------------------------------         
    |           |                 |
  userSTore    AddressStore     ProductStore
```

As an application grows, the dispatcher becomes more vital, as it can be used to manage dependencies between the stores by invoking the registered callbacks in a specific order. Stores can declaratively wait for other stores to finished updating, and then update themselves accordingly.


## mapDispatchToProps
you can define a function called mapDispatchToProps() that receives the dispatch() method and returns callback props that you want to inject into the presentational component.

```
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}
```

```
const mapDispatchToProps = (dispatch, ownProps) => {
  const { opportunityId } = ownProps.params;
  return {
    setAdditionalIncome: (values, applicantId) => dispatch(setIncome(values, opportunityId, applicantId, true)),
    updateAdditionalIncome: (values, applicantId) => dispatch(updateIncome(values, applicantId, true)),
    removeAdditionalIncome: (incomeId, applicantId, sfid) =>
      dispatch(removeIncome(incomeId, opportunityId, applicantId, sfid, true)),
  };
};
```

## mapStateToProps vs mapDispatchToProps
```
mapStateToProps: It connects redux state to props of react component.

mapDispatchToProps: It connects redux actions to react props.

A really light example: ( I hope, you know what I mean)

// state
const mapStateToProps = state => {
  return { lists: state.lists };
};

// props
const mapDispatchToProps = ({ lists }) => (
  <ul>
    { 
      lists.map(el => (
        <li key={ el.id }>
          { el.heading }
        </li>
      )
    }
  </ul>
);

// Now, connect state to prop
const List = connect(mapStateToProps)(mapDispatchToProps);

```


## Actions

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

Here's an example action which represents adding a new todo item:
```
const ADD_TODO = 'ADD_TODO'
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```


## react view:  
Controller view:  
top level components(recommend using single or limited number top level components)  
Interacts with Stores   
Holds data in state   
Sends data to children as props(from parents to children)   

## Flux Flow in Detail   

Action(user click "save user" button)<------> ajax call(web API)
   |
sendActionPayload(payload sent to dispatcher)
   |
dispatcher(checks for registered callbacks)
   |
sendActionPayload(sends payload to all registered callbacks)
   |
Store(receiveds payload)
   |
updates storage and fires change event(store updates and emits change event)
   |
reactView---go back to action


## Flux is actually a design pattern  
1 register(function callback)- "Hey dispatcher, run me when actions happen. -Store"     
2 unregister(string id)-"Hey dispatcher, stop worrying about this action. -Store"     
3 waitFor(array<string> ids)-"Update this store first. -Store"     
4 dispatch(object payload)-"Hey dispatcher, tell the stores about this action. -Action"   
5 isDispatching()-"I'm busy dispatching callbacks right now"  

## Flux vs Publish-Subscribe Model   
differs in two ways:   
1 every payload is dispatched to all registered callbacks   
2 callbacks can wait for other callbacks   


## connect() and Provider   

two pieces of React Redux middleware: connect() and Provider. The two pieces work hand in hand. Provider ensures that our entire React application can potentially access data from the store. Then connect(), allows us to specify which data we are listening to (through mapStateToProps), and which component we are providing the data. 

### Provider   
Provider ensures that our entire React application can potentially access data from the store.  

We imported Provider from React Redux  
We used Provider to wrap our React application  
We passed our store instance into Provider as a prop, making it available to all of our other components.   

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>, /* code change */
  document.getElementById('root')
);

```

We just did a few things here:

We imported Provider from React Redux   
We used Provider to wrap our React application    
We passed our store instance into Provider as a prop, making it available to all of our other components.   


### connect    

// connect() is a function that injects Redux-related props into your component.

Then connect(), allows us to specify which data we are listening to (through mapStateToProps), and which component we are providing the data.   

```js
// The purpose of connect() is that you don't have to think about
// subscribing to the store or perf optimizations yourself, and
// instead you can specify how to get props based on Redux store state:

const ConnectedCounter = connect(
  // Given Redux state, return props
  state => ({
    value: state.counter,
  }),
  // Given Redux dispatch, return callback props
  dispatch => ({
    onIncrement() {
      dispatch({ type: 'INCREMENT' })
    }
  })
)(Counter)

```

```js
const mapStateToProps = (state) => { 
  return { items: state.items };
};

connect(mapStateToProps)(App);

```

## sample code    

```js
var AuthorPage = React.createClass({
  getInitialState: function() {
    ...
  }

  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    AuthorStore.removeChangeListener(this._onChange));
  },
  _onChange: function() {
    this.setState({ authors: AuthorStore.getAllAuthors()});
  },
})

```

## redux in pictures
```
redux state management flow
1 the only way to modify the store is through reducers

2 the only way to trigger reducers is to dispatch actions 
to change data, we need to dispatch an action  
to obtain data we need to get the current state of the store  

```
![dispatch-reducer-store-state](./pics/redux1.png)




```
Provider
a React component used to "provide" the store to its child components
```
![provider](./pics/redux3.png)




```
Connect

connect() is a function that injects Redux-related props into your component.
You can inject data and callbacks that change that data by dispatching actions.
```
![connect](./pics/redux4.png)

## property   


passing from parent to child

## react    

## reducer in react

```
reducer in react is “just a function.”

it retrieves a state and a function, and then has to return a state
```

## connect   

```
connect is a higher order function which returns a function which takes a component as an input 

connect is not really a higher-order component, it's a function that returns a higher-order component   
```

## redux saga
```
Redux-saga is a redux middleware library, that is designed to make handling side effects in your redux app nice and simple. It achieves this by leveraging an ES6 feature called Generators, allowing us to write asynchronous code that looks synchronous, and is very easy to test.


```

## summary   
Flux is a pattern for unidirectional data flows   
actions encapsulate events   
dispatcher is a central hub that holds callbacks   
stores hold app state   
flux has many implementations   




