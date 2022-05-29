var date = $("#currentDay")
var hour = parseInt(moment().format("H"))
var tableRow = $(".row")
// function to get the date, passing in the days and months for our values
function getDate(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var months = ["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    var today = new Date();
    var d = today.getDay(days);
    var m = today.getMonth(months);
    var daym = today.getDate();
    var currentDate = date.textContent = days[d] + " " +  months[m] + " " + daym;

    return currentDate;
}

// function to change the color of the row based on the hour of the day
Array.from(tableRow).forEach(row => {
    var rowString = row.id, rowHour;
    if (rowString){
        rowHour = parseInt(rowString); // turning our row id into an integer
    }
    if (rowHour){
        if(hour === rowHour){
            newColor(row, "#880000")
        }
         else if((hour < rowHour)){
            newColor(row, "#008800");
        } else if((hour > rowHour)){
            newColor(row, "darkgrey");
        } 
    }           
});

// creating the function that takes in an element and a color and changes the row based on the time of day
function newColor(element, color){
    element.style.backgroundColor = color; 
}

date.append(getDate());

document.querySelector("#row")





