var pcLaunch = Math.floor(Math.random()*6 + 1);
var userLaunch = Math.floor(Math.random()*6 + 1);

if (pcLaunch > userLaunch) {
    document.getElementById("result").innerHTML = "Sorry, PC won "+pcLaunch+" to "+userLaunch;
} else if (pcLaunch < userLaunch) {
    document.getElementById("result").innerHTML = "Congrats! You won "+userLaunch+" to "+pcLaunch;
} else {
    document.getElementById("result").innerHTML = "Draw!"
}