
var x = [{a:6,b:66},[1,2,3],{c:45}, {x:[-1,-2,-3], y:{yy: 99}}];
var y = {keyarray: [1,2,3,4,5]}

function spillTheBeans(input){
  // if (typeof(input) === 'number' || typeof(input) === 'string')
  // console.log('input: ' + input);
  if (input instanceof Array){
    console.log('[');
    for (var x in input) {
      if (typeof(input[x]) === 'object'){
        spillTheBeans(input[x]);
      } else {
        console.log(input[x])
      }
    }
    console.log(']');
  }
  else if (typeof(input) === 'object'){
    console.log('{');
    Object.keys(input).forEach( key => {
      console.log(key+":");
      if (typeof(input[key]) === 'object'){
        spillTheBeans(input[key]);
      } else {
        console.log(input[key]);
      }

    });
    console.log('}');
  }

}

spillTheBeans(x);
