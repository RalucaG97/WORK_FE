console.log("1. calculati media aritmetica a unui array de numere;")

var numbers=[1, 10, 20, 4, 8, 12, 5, 3, 2, 15, 13];
var sum =0;
var length=numbers.length;

console.log(numbers);
console.log("Lungime: " + length);

while(numbers.length!=0)
{
    sum= sum + numbers[0];
    numbers.shift();
}

console.log("Suma: "+sum);
console.log("Media aritmetica:" +sum/length);
console.log("--------------------------------")

console.log("2.avand un array cu numere, valori boolene si stringuri calculati suma tuturor numerelor. Ignorati toate valorile care nu sunt de tip numar;")

var arr=[null, 10, "20", 78, "Ana are mere",true, 9, undefined];
console.log(arr);
var sum = 0;

console.log("numerele sunt: ")
for(var i=0; i<arr.length; i++)
{
    if(typeof arr[i]==='number')
    {
        sum=sum+arr[i];
        console.log(arr[i]);
    }
}
console.log("Suma nr este: ",sum);
console.log("--------------------------------")

console.log("3. creati un program care afiseaza primele 20 numere din sirul lui Fibonacci;")

var termen1=0;
var termen2=1;
var Fibo=[];
Fibo.push(termen1);
Fibo.push(termen2);

for(var i=2; i<20; i++)
{
    var suma= termen2+termen1;
    termen1=termen2;
    termen2=suma;
    Fibo.push(termen2);
}

console.log("Primele 20 nr din sirul lui Fibonacci sunt: ",Fibo);