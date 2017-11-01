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
    window.sandwichLibrary = sandwichLibrary;
  }

})();
