var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers/index');

var store = createStore(reducers.hotColdReducer);

module.exports  = store;