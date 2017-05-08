"use strict";

var actions={
  action3: function(action){
                return action;
            },

  action4: {type: 42},

  action5: function(action){
    return function(dispatch){
      setTimeout(()=> dispatch(action),3000);
    }
  }
}

function onChange(x){
  ReactEventListener(x);
}

var props = {
  getWeather: actions.action3,
  updateSelector: actions.action5

};

function ReactEventListener(event,action){
  let mapping = {};
  function register(a){
    cl('registering: ' + a)
  }


}
 // -------------- Poor man's redux (START) --------------
function ReduxConnect(action) {
  if (!this){
    dispatchProxy(action);
  } else {
    this.dispatchproxy = dispatchProxy;
  }

  function dispatchProxy (action){
    if (typeof(action) === 'function'){
      action(dispatch);
    } else if (typeof(action) === 'object'){
      dispatch(action);
    } else {
      cl("Warning: action must be a simple Object");
    }
  }

  function dispatch (action){
    let targetString = JSON.stringify(action);
    cl("dispatching: " + targetString);
  }
}
// -------------- Poor man's redux (END)--------------

var action1 = {type: 5};

var action2 = function(action){
  return function(dispatch){
    setTimeout(()=> dispatch(action), 6000);
  }
}

ReduxConnect(action1);
ReduxConnect(action2({type: 'delayed-6-seconds'}));
ReduxConnect(actions.action3({type: 'displayResult', movieName: 'Fight Club'}));
ReduxConnect(actions.action4);
ReduxConnect(actions.action5({type: 'trigger'}));

ReduxConnect(props.getWeather({type: 'showGears'}));
ReduxConnect(props.updateSelector({type: 'noResponse-3-second-delay'}));

(new ReduxConnect).dispatchproxy({type: 'dangly'});

let RC2 = new ReduxConnect;
RC2.dispatchproxy({type: 'Bragg'});
ReduxConnect(666);
new ReduxConnect(666);


function cl(message){
  console.log('\x1b[32m' + message + '\x1b[0m');
}
