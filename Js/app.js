const endDate = "30 January 2024 11:00 PM"

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff =(end-now)/1000;

    if (diff <0) return;
    
    //convert into days
    input[0].value = Math.floor(diff /3600 /24);
    //convert into hours
    input[1].value = Math.floor(diff /3600) %24;
    //convert into minutes
    input[2].value = Math.floor(diff /60) %60;
    //convert into Seconds
    input[3].value = Math.floor(diff) %60;
}

//initail Call
clock()


// 1 Day = 24 hrs
// 1 hr = 60 mins
// 60 mins = 3600 seconds

setInterval (
    () => {
        clock()
    },
    1000
)