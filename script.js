
var populationArray = [10001,999,20034,6745,666];
var maxPopulation = 10000;
var isOverPopulated = false;

for (var index = 0; index < populationArray.length; index++) {
    if (populationArray[index] > maxPopulation) {
        console.log("smaller");
    } else if (populationArray[index] < maxPopulation) {
        console.log("larger");
        }
        else {
            console.log("equal");
        }
    if (index >= 2) {
            if (populationArray[index] > 100000 && maxPopulation < 100000 || isOverPopulated === false ) {
                console.log("Small cities!!!");
            } else {
                console.log("Large cities!!!");
            }
        } 
}
