var date = $("#currentDay")
console.log("hello")

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


date.append(getDate());





