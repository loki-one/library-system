//Use of IIFE: to hide other varibles in the library except the ones you want to share with rest of the program
//The aim is to avoid variable name conflicts
//Current approach: One global variable per library.
// 1. Create: Run the library in IIFE and attach to window.
// 2. Use: Access library from window (globally).
//With this approach we are attaching one global variable per library so it will cause problem when there are
//100 libraries in our app and this will result in 100 global variables so we need an approach there will be
//just one global variable
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

  window.sandwichLibrary = sandwichLibrary;

})();

//Another approach: One global variable period. Here instead of attaching to window object you return the library.
//1. Create: librarySystem('libraryName',function(){ /* return library */ });
//2. Use: librarySystem('libraryName');

// Another Approach: Step 1
(function(){

  var libraryStorage = {};

  function librarySystem(libraryName, callback){
    if(arguments.length > 1){
      //Creating a library as there are two arguments
      libraryStorage[libraryName] = callback();
    }else{
      return libraryStorage[libraryName];
    }
  }

  window.librarySystem = librarySystem;

})();

//Type below in console to use above librarySystem
librarySystem('sandwichLibrary', function(){

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
  }

  return sandwichLibrary;

});

//Another Approach: Step 2
//librarySystem('sandwichLibrary');

//Using it in your app
(function(){
  var sandwichLibrary = librarySystem('sandwichLibrary');
  console.log(sandwichLibrary);
})();
