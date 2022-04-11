const rowWrapper = document.querySelector(".row");
for (let i = 1 ; i <= 100 ; i ++) {
    const newBox = document.createElement("div");
    const stringI = "" + i;
    newBox.classList.add ("box");
    if (!(i % 3)) {
        newBox.innerHTML = "Fizz";
    }
    if (!(i % 5)) {
        newBox.innerHTML += "Buzz";
    }
    // Piripicchio 
    if (!(i % 7) || stringI[stringI.length -1 ] == "7") {
        newBox.innerHTML += "Piripicchio";
    }
    if (!newBox.innerHTML) {
        newBox.innerHTML = i;
    }
    // milestone 3
    else {
        newBox.classList.add ((newBox.innerHTML).toLowerCase());
    }
    rowWrapper.append (newBox);
}

