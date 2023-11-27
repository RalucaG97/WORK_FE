//se da un string "abbcccddddeeeeeffffff" iar la final treb sa afiseze "abbccc4d5e6f"
var array="abbcccddddeeeeeffffffgggghhhiikkkkkkkkkkkkkkllllll"
var arrayNou=[];

array=array.split('');
console.log(array);

var literaCurenta = array[0];
var contor=1;

for (var i=0; i<=array.length;i++)
{
    if(literaCurenta==array[i+1]){
        contor++;
    }
    else{
        if(contor<4)
        {
            while(contor)
            {
                arrayNou= arrayNou+literaCurenta;
                contor--;
            }
        }
        else{
            arrayNou=arrayNou + contor + literaCurenta;
        }
        literaCurenta = array[i+1];
        contor = 1;
    }
}

console.log(arrayNou)