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
var area9 = $("#last")



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
    localStorage.setItem("9", area1.val()) // gives the 9AM slot a key and value pair, but nothing for the 5 o clock slot
    localStorage.setItem("10", area2.val())
    localStorage.setItem("11", area3.val())
    localStorage.setItem("12", area4.val())
    localStorage.setItem("1", area5.val())
    localStorage.setItem("2", area6.val())
    localStorage.setItem("3", area7.val())
    localStorage.setItem("4", area8.val())
    localStorage.setItem("5", area9.val())
};

function displayInfo(){
    var refreshArea1 = localStorage.getItem("9")
    var refreshArea2 = localStorage.getItem("10")
    var refreshArea3 = localStorage.getItem("11")
    var refreshArea4 = localStorage.getItem("12")
    var refreshArea5 = localStorage.getItem("1")
    var refreshArea6 = localStorage.getItem("2")
    var refreshArea7 = localStorage.getItem("3")
    var refreshArea8 = localStorage.getItem("4")
    var refreshArea9 = localStorage.getItem("5")
    area1.text(refreshArea1)
    area2.text(refreshArea2)
    area3.text(refreshArea3)
    area4.text(refreshArea4)
    area5.text(refreshArea5)
    area6.text(refreshArea6)
    area7.text(refreshArea7)
    area8.text(refreshArea8)
    area9.text(refreshArea9)
}

// creating the function that takes in an element and a color and changes the row based on the time of day
function newColor(element, color) {
    element.style.backgroundColor = color;
}


// creating a for loop to add an event listener to every save button
for (var i = 0; i < inputText.length; i++) {
    saveButton[i].addEventListener("click", SaveInfo)
}

date.append(getDate());
displayInfo();




