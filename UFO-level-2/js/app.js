// alert("Welcome!")


// Starter Code
var tableData = data;


// Creating References
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Inputing the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

// Creating an Event Listener for the Button
button.on("click", () => {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    //Get the value property of the input element 
    var inputDate = inputFieldDate.property("value").trim();
    
    //Find the same date in the table Data    
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");
    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        //Add record
        addData(filterDate);
    }
    // Else:  if no matches
        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})