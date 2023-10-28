
// We declare the function with the exact name "fromEuroToDollar"
// const fromEuroToDollar = function(valueInEuro) {
//     // Convert the given valueInEuro to dollars
//     let valueInDollar = valueInEuro * 1.07;
//     // return the dollar value
//     return valueInDollar;
// }

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
// console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollarAmount){
    return (dollarAmount * oneEuroIs.JPY * 0.93);
}
console.log(fromDollarToYen(1));

function fromEuroToDollar(EuroAmount){
    return (EuroAmount * oneEuroIs.USD);
}
console.log(fromEuroToDollar(1));

function fromYenToPound(Yenamount){
    return ((Yenamount * 0.006) * oneEuroIs.GBP);
}
console.log(fromYenToPound(1));

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar,fromYenToPound,fromDollarToYen };



