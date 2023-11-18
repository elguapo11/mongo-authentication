export function display() {
  return ' Sample function to show client';
}

export function show(x) {
  //Notice the 'export' which allows me to export to client

  return x + ' displaying how to output multiple functions';
}

//This is simply a test to see how to import simple functions to the client and seeing the folder structure and exports.
//the above is displayed and is in the app.jsx file

export default display;
