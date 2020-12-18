var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];





function calc() {
    var dd = parseInt(document.getElementById('day').value);
    var mm = parseInt(document.getElementById('month').value);
    var yy = parseInt(document.getElementById('year').value);
    var gender = document.getElementById('status').value;
    var cc = parseInt(document.getElementById('century').value);

    var day=parseInt(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7)

    if (dd <= 0 || dd == " " || dd > 31) {
        alert("invalid date")
    }
    if (mm <= 0 || mm == " " || mm > 12) {

        alert("invalid months")
    }
    if (yy <= 0 || yy == " " || yy > 3080) {
        alert("invalid year")
    }
    if (cc <= 0 || cc == " " || cc > 21) {
        alert("invalid century")
    }
    if (gender ==="male"){
        document.getElementById("name") .innerHTML="Your Akan name is:  " + males[day]
    } else if (gender ==="female"){
        document.getElementById("name") .innerHTML="Your Akan name is: " + females[day]
    } 
}








