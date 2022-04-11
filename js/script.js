// Per tutti i numeri da 1 a 100 compreso 
for (let i = 1 ; i <= 100 ; i++ ) {
    console.log(`${!(i % 3) ? (`Fizz`) : "" }${!(i % 5) ? (`Buzz`) : "" }${(i % 3 && i % 5) ? i : "" }`);
}