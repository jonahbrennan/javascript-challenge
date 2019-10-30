// from data.js
var tableData = data;

// Select the button
var buttonDate = d3.select("#filterDate-btn");
var buttonState = d3.select("#filterState-btn");
var buttonAll = d3.select("#filterAll-btn");


// Complete the click handler for the form
buttonDate.on("click", function() {
  // Select the input element and get the form input element.
  var inputElement = d3.select(".form-control");
    // Get the value property of the input element
  var inputValue = inputElement.property("value");
//   console.log(inputValue);
//   console.log(tableData);
  // Use the form input to filter the data
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  var datetime = filteredData.map(sighting => sighting.datetime);
  var city = filteredData.map(sighting => sighting.city);

// Get a reference to the table body
var tbody = d3.select("tbody");
// remove any children from the table th's
tbody.html("");

// Step 1: Loop Through `data` and console.log each ufoSightings object
filteredData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
});


// filteredData.forEach(function(ufoSightings) {
//     console.log(ufoSightings);
//     var row = tbody.append("tr");
//     Object.entries(ufoSightings).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the ufoSightings object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

// BONUS: Refactor to use Arrow Functions!
filteredData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


});

//////////////////////////////////////////////////////////////////////////////////////
// Click handler for the State form
//////////////////////////////////////////////////////////////////////////////////////

buttonState.on("click", function() {
  // Select the input element and get the form input element.
  // var inputElement = d3.select(".form-control");
  var inputElement = d3.select("#state");

    // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // console.log(inputValue);
  // console.log(tableData);
  // Use the form input to filter the data
  var filteredData = tableData.filter(sighting => sighting.state === inputValue);

  console.log(filteredData);

  var state = filteredData.map(sighting => sighting.state);
  var city = filteredData.map(sighting => sighting.city);

// Get a reference to the table body
var tbody = d3.select("tbody");
// remove any children from the table th's
tbody.html("");

// Step 1: Loop Through `data` and console.log each ufoSightings object
filteredData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
});

filteredData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


//////////////////////////////////////////////////////////////////////////////////////
// Click handler for the All form
//////////////////////////////////////////////////////////////////////////////////////

buttonAll.on("click", function() {
  // Select the input element and get the form input element.
  var inputElement = d3.select("#all1");
  var inputElement1 = d3.select("#all2");

  console.log("YOYOYOYOYOY");

  console.log(inputElement);

    // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue1 = inputElement1.property("value");

  console.log(inputValue);
  console.log(inputValue1);

  // console.log(tableData);
  // Use the form input to filter the data
  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  var refilteredData = filteredData.filter(sightingNew => sightingNew.state === inputValue1);
  console.log(refilteredData);

  // var state = filteredData.map(sighting => sighting.state);
  // var city = filteredData.map(sighting => sighting.city);

// Get a reference to the table body
var tbody = d3.select("tbody");
// remove any children from the table th's
tbody.html("");

// Step 1: Loop Through `data` and console.log each ufoSightings object
refilteredData.forEach(function(ufoSightings) {
  console.log(ufoSightings);
});

refilteredData.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
});

});