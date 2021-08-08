// Pre-curso skylab.
// Airlines-pro
// Alvaro Amorós
// 08/08/21
let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

// Global variable. User type.

// Function. MAIN.
mainFlightsPro = flightsArray => { // Takes an array with flights as input, whichi is then pased as input of the other functions. The array has to be inputed
    greateUser();                  // only to the MAIN function, as from there it is transmited to the whole program
    allFlights(flightsArray);
    meanPrice(flightsArray);
    lastFlights(flightsArray);
    interfaceOptions(flightsArray);

  }
  
  // Function. Greate user
  greateUser = () => alert(`Hello, ${prompt("User name: ")}.`); // Alert window with a prompt user name nested insidee. Called in MAIN
  
  // Function. Print all available flights
  allFlights = flightsArray => { // Flight array as input. Called IN MAIN
    console.log("All flights: ");
    for (let i = 0; i < flightsArray.length; i++) { // Intinerates trought the array ptrinting the data
      console.log(`ID: ${flightsArray[i].id} - to: ${flightsArray[i].to} - from: ${flightsArray[i].from} - cost: ${flightsArray[i].cost} - scales: ${flightsArray[i].scale}`)
    }
  };
  
  // Function. Mean price of flights
  meanPrice = flightsArray => { // Flights array as input. Called in MAIN
    let totalSum = 0; // Local var to store the sum of the princes of all flights
    for (let i = 0; i < flightsArray.length; i++) { //Itinerate trought the array of flights
      totalSum += flightsArray[i].cost; // Add the cost of each to the totalSum var
    }
    console.log(`Mean price: ${(totalSum / flightsArray.length).toFixed(2)}€`); // Divide totalSum by the length of the array and print in console
  }
  
  // Function. Last five flights
  lastFlights = flightsArray => { //Flights array as input. Called in MAIN.
    console.log("The last five flights of today go to:");
    for (let i = flightsArray.length - 1; i >= (flightsArray.length - 5); i--) { // Loop trought the array five times starting by the last flight
      console.log(flightsArray[i].to); // Print each destination
    }
  }
  
  // Function. User type rompt
  userType = () => { // No imput. Called in interfaceOptions
    let user = window.prompt("Type of user: "); // Local var to save the user type
    if (user === null) { // If null return false (in order tu finish the program in the enxt function)
      return false;
    } else if (user.toUpperCase() !== "ADMIN" && user.toUpperCase() !== "USER") { // If something different than user or admin was inputed, call the function again
      userType();
    } else {
      return user; // Returns the user type
    }
  }
  
  // Function. Stablishes path for user or admin
  interfaceOptions = flightsArray => { // Flights array as input. Called in MAIN.
    user = userType(); // CAll function to define the user type
    if (user === false) { // If "cancell" was clicked, finish the program
      alert("Finishing program.")
      return;
    } else if (user.toUpperCase() === "ADMIN") { // If admin (case insensitive) vas imputed. Call function adminInterface
      adminInterface(flightsArray);
    } else  {
      userInterface(flightsArray); // Otherwise call userInterface
    } 
  }
  
  // Function. Admin inteface options
  actionType = () => {  // No input. Called by adminInterface
    let action = window.prompt("DELETE or ADD flight: ") // Prompt for action type and save in local variable 
    if (action == null) { // If "cancell" was clicked, return in order to finish the program in the next function
      return false;
    } else if (action.toUpperCase() !== "ADD" && action.toUpperCase() !== "DELETE") { // if the input whas different that add or delete (case insensitive), call the function again.
      actionType();
    } else {
      return action; // Else return the input
    }
  }
  // Function. Stablish path to add, delete or finish
  adminInterface = flightsArray => { // Flight array as input. Called by interfaceOptions.
    let action = actionType (); // Call action type and save in local variable
    if (action === false) { // If "cancell" button was clicked, finish the program
      alert("Finishing program.");
      return;
    } else if (action.toUpperCase() === "ADD") { // If ADD was imputed, call the function newFlight
      newFlight(flightsArray)
    } else   {
      deleteFlight(flightsArray) // Else, call the function deleteFlight
    } 
  }

  
  // Function. Ads new flight. Three nested functions -> Ask for data -> Push data -> Ask for other operations
  newFlight = (flightsArray) => adminInterface(pushFlight(flightsArray)); // Takes flight array as input. Two nested functions. First pushFlight ot add flight ot the array
  //                                                                         then calls adminInterface to ask the user for further action.
  
  // Function. Asks for data of new flight
  askData = (flightsArray) => { // Flights array as input. Called by pushFlight.
    let flight = { // Ads id and prompts user for info about the flight.
      id: flightsArray.length, 
      to: window.prompt("To: "),
      from: window.prompt("From: "),
      cost: window.prompt("Price: "),
      scale: window.confirm("Scales: ")
    };
    alert('Flight successfully added')
    return flight; // Return an object with the flight data.
  }
  
  // Function. Checks if there is sapce and pushes the flight into the array
  pushFlight = flightsArray => {
    if (flightsArray.length > 15) { // Chek that the are nor more than 15 flights
      alert("No space"); // If so return false with an alert
      return false;
    } else {
      flightsArray.push(askData(flightsArray)); // If there is space for more flights, call the askData function.
    }
    return flightsArray;
  }
  
  // Function. Delete flight. 
  deleteFlight = (flightsArray) => adminInterface(askRemove(flightsArray)) // Flight array as input. Called by adminInterface
  //                                                                         Two nested functions => ask which flight to delete and Delete -> Ask for other operations
  
  // Function. Overrrides original flights array with a new array that filteres out the selected ID
  askRemove = (flightsArray) => { // Flights array as input. Called by deleteFlight,
    allFlights(flightsArray); // Calls the allFlights function to print all the existing flights
    let idDelete = parseInt(window.prompt("Delete ID:")); // Ask for the id of the flight to be deleted and save in local var
    for (let i = 0; i < flightsArray.length; i++) { // Intinerate trought the id's of the flights in array
      if (idDelete === flightsArray[i].id) { // If match with id, procede to delete
        flightsArray = flightsArray.filter(function (filterFunction) { return filterFunction.id != idDelete; }); // use the filter propety to create a new array with the elements that different
        alert('Flight successfully deleted') //                                                                     from idDelete var. Then overrride this new array on fligtsArray.
        return flightsArray; // Return flught array after deletion was completed
      }
    }
    alert("Flight not found"); // If there was no match with the inputed id, alert and return the flight array
    return adminInterface (flightsArray);
}

  // Function. User options
  userInterface = (flightsArray) => {  //Flights array as input. called by interfaceOptions
    let maxPrice = window.prompt("Max price: "); // Promt user for price limits
    let minPrice = window.prompt("Min price: ");
    if (maxPrice === null && minPrice === null || maxPrice === "" && minPrice === "") { // If both options are left empty, rcall the function buyFlight with the whole array as input
      buyFlight(flightsArray);
    } else {
      filterArray(flightsArray, maxPrice, minPrice); // If input was provided, call the function filterArray, input flightArray, max price and min price
    }
    
  }

  // Function. Filter max and min price
  filterArray = (flightsArray, maxPrice, minPrice) => {
    let flightsMach = flightsArray.filter(function(maxLimit) { return maxLimit.cost < maxPrice; }); //Create new local var and add to int flights htat pas the condition set by max price
    flightsMach = flightsMach.filter(function(minLimit) { return minLimit.cost >= minPrice; }); // Take the precius array and filter out by min price condition. Then overrride the array.
    if (flightsMach.length < 1) { // If no flight was returned, alert and call again userInterface, with the whole array of flights as input
      alert ("No flights in this price range");
      userInterface (flightsArray);
    } else { // else, call the function buyFlight with the array of flights that match the restrictions as input.
      return buyFlight(flightsMach);
    }
  }
  
  // Function. Print and buy flight
  buyFlight = flightsMach => { 
    allFlights(flightsMach); // Print all fligths that mmet the conditions
    let idBuy = window.prompt("ID of flight you wanna buy: "); // Asks for id to be deleted
    if (idBuy === null || idBuy === NaN) { // If no id is provided, finish the program
      alert("Finishing program");
      return;
    } else {
      for (let i = 0; i < flightsMach.length; i++) { // If id is provided, loop trought  the array of flights
      if (parseInt(idBuy) === flightsMach[i].id) { // If match id is found, buy flight and finish program
        return alert ('Thanks for buying!')
      }
    } // If no match was found, call the function buyFlight again.
    alert ('Flight not found');
    return buyFlight(flightsMach);
    }
    
  }
  
  mainFlightsPro(flights);