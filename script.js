
var berilganArray = [2, 4, 9, 10, 45, 67, 8, 90];
var juftSonlar = [];

console.log(berilganArray);

for (var i = 0; i < berilganArray.length; i++) {
    if (berilganArray[i] % 2 === 0) {
        juftSonlar.push(berilganArray[i]);
    }
}

 console.log(`Juft sonlar: ${juftSonlar}`)