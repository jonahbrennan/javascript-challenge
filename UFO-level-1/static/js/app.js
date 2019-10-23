// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Complete the click handler for the form
button.on("click", function() {
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
