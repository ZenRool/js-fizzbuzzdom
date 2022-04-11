const rowWrapper = document.querySelector(".row");
const levare = " È buZz o fizz";

for (let i = 1 ; i <= 100 ; i ++) {
    const newBox = document.createElement("div");
    newBox.classList.add ("box");
    if (!(i % 3)){
        newBox.innerHTML = "Fizz";
    }
    if (!(i % 5)){
        newBox.innerHTML += "Buzz";
    }
    if (!newBox.innerHTML){
        newBox.innerHTML = i;
    }
    // milestone 3
    else {
        newBox.classList.add ((newBox.innerHTML).toLowerCase());
    }
    rowWrapper.append (newBox);
}