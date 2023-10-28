function display() {
  const arr = [1, 2, 2];
  return arr + 'String';
}
display();

function show() {
  const arr = [1, 2, 2];
  return arr + 'Hello';
}

show();

//This is simply a test to see how to import simple functions to the client and seeing the folder structure and exports.
//the above is displayed and is in the app.jsx file

export default show;
