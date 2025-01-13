// Who Is Buying Lunch Today?

function whosPaying(names) {
    // First try:
    // var selected = Math.round(Math.random() * (names.length - 1));

    // Using Math.floor() is not necessary to sub length -1, cause it will go from 0-4
    var selected = Math.floor(Math.random() * (names.length));
    
    // console.log(selected);

    return names[selected] + " is going to buy lunch today!";
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);