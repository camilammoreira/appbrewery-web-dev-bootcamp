// 99 Bottles of Beers Lyrics

var count = 99;

function beer() {
  while (count > 0) {
    var bottlesLeft = count - 1;
    var bottleWord = "bottles";
    var bottleWordLeft = "bottles";
    if (count === 1 ) {
      bottleWord = "bottle";
    }
    if (bottlesLeft === 1) {
      bottleWordLeft = "bottle";
    }
    if (bottlesLeft === 0) {
      bottlesLeft = "no more"
    }
    console.log(count + " " + bottleWord + " of beer on the wall, " + count + " " + bottleWord + " of beer.\nTake one down and pass it around, " + bottlesLeft + " " + bottleWordLeft + " of beer on the wall.");
    count--;
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
}

beer()