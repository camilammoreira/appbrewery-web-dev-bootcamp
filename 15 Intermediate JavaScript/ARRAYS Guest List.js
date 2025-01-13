// Guest List 

var guestList = ["Angela", "Jack", "Pam", "Lara"];

function guestCheck(guestName) {
    if (guestList.includes(guestName)) {
        return "Welcome, " + guestName + "!";
    } else {
        return "Sorry, you are not on the list"
    }
}

guestCheck("Lara");