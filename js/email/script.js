var email = prompt("Please insert your email address to see if you're in the list")

var emailList = ["etabeta@yahoo.it", "alfabeto@gmail.com", "enigmista@outlook.it", "mappamondo@icloud.com", "attaccapanni@live.com"]

for (i=0; i < emailList.length; i++) {
    if (email === emailList[i]) {
        var invited = 1;
        i = emailList.length;
    }
}

if (invited == 1) {
    document.getElementById("response").innerHTML = "Congrats! You're invitation is confirmed! See you at the party (please don't forget to wear the mask!!!)";
} else {
    document.getElementById("response").innerHTML = "Sadly we can't find you're invitation anywhere. Please check again if you think you've wrongly written your email address, and feel free contact us if you wish to have further information. Thanks";
}