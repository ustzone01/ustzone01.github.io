// debugger;
// console.log('Hello world!');
alert('I am being loaded! (my name is utils.js) (counter: 5)');

// https://stackoverflow.com/a/824060
function deleteEmptyLineBeforePrevSibling1(curScript_1)
{
  debugger;
  var elem3 = curScript_1.previousSibling;
  var elem4 = curScript_1.previousSibling.previousSibling;
  var elem5 = curScript_1.nextSibling; // next sibling is not yet built

  elem4.nodeValue = elem4.nodeValue.slice(0,-1); // remove last 1 chars from it
}

function deleteLineBreakJustBeforePrevSibling1(curScript_1)
{
  deleteEmptyLineBeforePrevSibling1(curScript_1);
}

function deleteThisLineAndLineBeforeMe1(curScript_1)
{
  var elem4 = curScript_1.previousSibling;

  elem4.nodeValue = elem4.nodeValue.slice(0,-2); // remove last 2 chars from it
}  

