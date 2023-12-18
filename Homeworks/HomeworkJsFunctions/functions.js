//Creati o functie care sa calculeze venitul total anual in lei al unei persoane prin extragerea numerelor din textele de mai jos. Functia trebuie sa intoarca (return) o propozitie de forma: “Venitul total anual al lui NUME este de VALOARE lei”.
function valute(suma,valuta){
    if(valuta==="usd"){
        suma = suma * 4.65;
        return suma;
    } 
    else if(valuta==="euro")
    {
        suma = suma * 4.96;
        return suma;
    } 
    else if(valuta==="lei"){
        return suma;
    }
}

function computeIncome(sentence){
    //splituim propozitia
    var sentenceSplit = sentence.split(/[ /,]/);
    //primul cuvant va fi numele 
    var nume = sentenceSplit[0];
    var income=0;
    for(var i=0; i<sentenceSplit.length; i++)
    {
        //testam daca atunci cand parsam fiecare cuvant, ne va da "not a number" atunci lasam cuvantul in pace si trecem mai departe
        if(!isNaN(parseInt(sentenceSplit[i])))
        {
            //daca e number, atunci il modificam si in array si il folosim
            sentenceSplit[i]=parseInt(sentenceSplit[i])
            //convertim banii din orice moneda in lei
            var money = valute(sentenceSplit[i],sentenceSplit[i+1])
            //daca banii sunt pe luna, atunci inmultim banii cu 12 luni si salvam in income
            if(sentenceSplit[i+2]==="luna")
            {
                income = income + money*12;
                console.log(income,"dintr-o luna pe an")
            }//daca nu este pe luna si este pe an, atunci suma va fi adunata o singura data, la fel si pentru bonus, va fi salvat in income o singura data. Din aceasta cauza nu mai trebuie sa verificam [i+2], pt ca pt orice cuvant pe pozitia [i+2], la income va fi salvat o singura data
            else
            {
                income = income + money;
                console.log(income,"anual si bonus")
            }
        }
    }
    console.log(sentenceSplit)
    console.log("Venitul total anual al lui",nume,"este de",income,"lei")
}

const firstSentence = "Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing"
const secondSentence = "Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei si mai castiga suplimentar aproximativ 500 usd/luna din freelancing"

computeIncome(firstSentence)
computeIncome(secondSentence)


