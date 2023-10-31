var vehicul = prompt("Introduceti tipul de vehicul:");
var capacitate= prompt("Introduceti capacitatea:");
var impozit=0;

if (["motocicleta", "triciclu", "cvadriciclu", "autoturism"].includes(vehicul) && (capacitate <= 1600)){
    capacitate=capacitate/200;
    impozit=capacitate*8;
    alert("Impozitul pentru " + vehicul + " este: " + Math.floor(impozit)+ " lei -> prima varianta");
}
else if(["motocicleta", "triciclu", "cvadriciclu"].includes(vehicul) && (capacitate > 1600)){
    capacitate=capacitate/200;
    impozit=capacitate*9;
    alert("Impozitul pentru " + vehicul + " este: " + Math.floor(impozit)+ " lei -> a 2a varianta");
}
else if(vehicul==="autoturism")
{
    if(1600 < capacitate && capacitate <= 2000){
        capacitate=capacitate/200;
        impozit=capacitate*22;
        alert("Impozitul pentru " + vehicul + " este: " + Math.floor(impozit)+ " lei -> a 3a varianta");
    }
    else if(2000 < capacitate && capacitate<= 2600)
    {
        capacitate=capacitate/200;
        impozit=capacitate*85;
        alert("Impozitul pentru " + vehicul + " este: " + Math.floor(impozit)+ " lei -> a 4a varianta");
    }
    else if(2600 < capacitate && capacitate <= 3000)
    {
        capacitate=capacitate/200;
        impozit=capacitate*171;
        alert("Impozitul pentru " + vehicul + " este: " + Math.floor(impozit)+ " lei -> a 5a varianta");
    }
    else if(3000 < capacitate)
    {
        capacitate=capacitate/200;
        impozit=capacitate*345;
        alert("Impozitul pentru " + vehicul + " este: " + Math.floor(impozit)+ " lei -> a 6a varianta");
    }
}
else if(["autobuz", "autocar", "microbuz"].includes(vehicul))
{
    capacitate=capacitate/200;
    impozit=capacitate*28;
    alert("Impozitul pentru " + vehicul + " este: " + Math.floor(impozit)+ " lei -> a 7a varianta");
}
else if(vehicul==="tractor")
{
    capacitate=capacitate/200;
    impozit=capacitate*22;
    alert("Impozitul pentru " + vehicul + " este: " + Math.floor(impozit)+ " lei -> a 8a varianta");
}
else
    alert("Nu se potriveste");


 



