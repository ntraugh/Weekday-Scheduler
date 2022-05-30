var date = $("#currentDay")
var hour = parseInt(moment().format("H"))
var tableRow = $(".row")
var saveButton = $(".saveBtn")
var inputText = $(".content")
var area1 = $("#1")
var area2 = $("#2")
var area3 = $("#3")
var area4 = $("#4")
var area5 = $("#5")
var area6 = $("#6")
var area7 = $("#7")
var area8 = $("#8")
var area9 = $("#9")



// function to get the date, passing in the days and months for our values
function getDate() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var today = new Date();
    var d = today.getDay(days);
    var m = today.getMonth(months);
    var daym = today.getDate();
    var currentDate = date.textContent = days[d] + " " + months[m] + " " + daym;

    return currentDate;
}

// function to change the color of the row based on the hour of the day
Array.from(tableRow).forEach(row => {
    var rowString = row.id, rowHour;
    if (rowString) {
        rowHour = parseInt(rowString); // turning our row id into an integer
    }
    if (hour === rowHour) {
        newColor(row, "#880000")
        } else if (hour < rowHour) {
            newColor(row, "#008800");
        } else if (hour > rowHour) {
            newColor(row, "#555555");
        }
    }
);
        

// function for storing our values into local storage
function SaveInfo() {
    localStorage.setItem("9AM", area1.val()) // gives the 9AM slot a key and value pair, but nothing else
    localStorage.setItem("10AM", area2.val())
    localStorage.setItem("11AM", area3.val())
    localStorage.setItem("12PM", area4.val())
    localStorage.setItem("1PM", area5.val())
    localStorage.setItem("2PM", area6.val())
    localStorage.setItem("3PM", area7.val())
    localStorage.setItem("4PM", area8.val())
    localStorage.setItem("5PM", area9.val())
};

// creating a for loop to add an event listener to every save button
for (var i = 0; i < inputText.length; i++) {
    saveButton[i].addEventListener("click", SaveInfo)
}


// creating the function that takes in an element and a color and changes the row based on the time of day
function newColor(element, color) {
    element.style.backgroundColor = color;
}

date.append(getDate());






