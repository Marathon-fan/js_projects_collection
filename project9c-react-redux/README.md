
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


## summary   
Flux is a pattern for unidirectional data flows   
actions encapsulate events   
dispatcher is a central hub that holds callbacks   
stores hold app state   
flux has many implementations   


