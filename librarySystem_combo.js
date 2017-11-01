//window.sandwichJS has an original value.
window.sandwichLibrary = 'Library with books about sandwiches.'

//sandwichJS loads.
(function(){

  var breads = {
    wheat: 'The healthy option',
    white: 'The unhealthy option'
  };

  var fillings = {
    turkey: 'For boring sandwiches',
    cheese: 'For the vegetarians'
  };

  var sandwichLibrary = {
    breads: breads,
    fillings: fillings
  };

  // //Handle window case.
  // window.sandwichLibrary = sandwichLibrary;
  // //Handle librarySystem case.
  // librarySystem('sandwichLibrary', function(){
  //   return sandwichLibrary;
  // })
  // But the above method is not dynamic.

  //if librarySystem function exists then use that or else use window.sandwichLibrary variable
  if(typeof librarySystem !== 'undefined'){
    librarySystem('sandwichLibrary', function(){
      return sandwichLibrary;
    });
  }else{

    var oldSandwichLibrary = window.sandwichLibrary;

    sandwichLibrary.noConflict = function(){
      window.sandwichLibrary = oldSandwichLibrary;
      return sandwichLibrary;
    };

    window.sandwichLibrary = sandwichLibrary;
  }

})();

// This will reset window.sandwichLibrary to the original value which is the string.
// Then how will we use our own sandwichLibrary.So the solution is noConflict() will return our sandwichLibrary.
var sandwichJS = sandwichLibrary.noConflict();

// You want to print window.sandwichLibrary i.e. you want the string library with books about sandwiches
// But you won't be able to because in the else loop we override window.sandwichLibrary with our library.
// To avoid this we run a noConflict()
console.log(sandwichLibrary);

// We can still use sandwichJS.
console.log(sandwichJS.breads.white);
