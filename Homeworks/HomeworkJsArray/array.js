let initialValues=[5, 1, true, undefined, "78",90,"Hello world"]
console.log(initialValues);

// 1.Declarati si initializati un alt array denumit otherValues si 
// populatil la fel ca initialValues dar cu mai multe tipuri de date dar.
//  Trebuie sa contina macar un tip numeric si un string

let otherValues=[null,6,true,2,"wantsome1","67",false]
console.log(otherValues);

// 2.Faceti push la otherValues array in initialValues array

let newArray=[];
newArray.push(...initialValues);
newArray.push(...otherValues);
console.log(newArray);

// 3.Folositi valorile de tip numeric din initialValues pentru a calcula 
// cateva operatii aritmetice(ex. Puteti adauga 2 la o anumita valoare);

// let newValue = initialValues[0]+2;
// let newValue2= initialValues[1]+2;
// console.log("adauga 2 la o anumita valoare:",newValue);
// console.log("adauga 2 la o anumita valoare:",newValue2);

// 4.Dupa ce a-ti facut operatiile, modificati valorile din initialValues
//  array cu noile valori obtinute pe baza operatiilor. Valorile sa fie
//  puse pe pozitiile corespunzatoare, sa nu fie adaugate ca valori noi
//  in array.
// Ex: Input: [1, 2, 3]
//       Output: [3, 4, 5] // Am adunat 2 la fiecare numar din array
console.log("before:",initialValues);
for(let i=0; i<initialValues.length;i++)
{
    if(typeof(initialValues[i])==="number")
    {
        initialValues[i]=initialValues[i]+2;
    }
}
console.log("after 4.:",initialValues);
// 5.Concatenati toate valorile de tip string din initialValues array cu
//  string-ul ”happy codding”;

for(let i=0; i<initialValues.length;i++)
{
    if(typeof(initialValues[i])==="string")
    {
        initialValues[i]=initialValues[i]+" happy codding";
    }
}
console.log("after 5.:",initialValues);
// 6.Folosing operatorul “!” inversati toate valorile boolene din
//  initialValues array;
// Ex: Input: [true, false]
//       Output: [false, true]
for(let i=0; i<initialValues.length;i++)
{
    if(typeof(initialValues[i])==="boolean")
    {
        initialValues[i]=!initialValues[i];
    }
}
console.log("after 6.:",initialValues);

// Cerintele 3,4,5,6 pentru otherValues:
console.log("before:",otherValues)
for(let i=0; i<otherValues.length;i++)
{
    if(typeof(otherValues[i])==="number")
    {
        otherValues[i]=otherValues[i]+2;
    }
    else if(typeof(otherValues[i])==="string")
    {
        otherValues[i]=otherValues[i]+" happy codding";
    }
    else if(typeof(otherValues[i])==="boolean")
    {
        otherValues[i]=!otherValues[i];
    }
}
console.log("after 3,4,5,6.:",otherValues);