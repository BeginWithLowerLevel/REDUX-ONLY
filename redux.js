const { createStore } = require("redux"); //import store from redux

const initialState = { age: 21 }; //define initial state

const reducers = (state = initialState, actions) => {
  //create reducers to add logic
  if (actions.type === "ADD") {
    const newState = { ...state }; //copy existing state
    newState.age += actions.payload;
    return newState; //return new state
  }
  if (actions.type === "SUBSTRACT") {
    const newState = { ...state };
    newState.age -= 1;
    return newState;
  }
};

const store = createStore(reducers); //use reducers in the global store

store.subscribe(() => { //use callback function
  console.log("state changed : " + JSON.stringify(store.getState()));
});

store.dispatch({ type: "ADD", payload: 10 }); //dispatch the commands

store.dispatch({ type: "SUBSTRACT" });
