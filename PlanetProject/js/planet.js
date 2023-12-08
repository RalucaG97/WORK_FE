//THIS FILE DO THE APPEAREANCE FOR PLANET PAGE
const planetList = JSON.parse(localStorage.getItem('planetList'));

console.log(planetList);

function createElement(tagName, attributes, textContent) {
    const element = document.createElement(tagName);
    if (attributes) {
      for (const attribute in attributes) {
        if (attributes.hasOwnProperty(attribute)) {
          element.setAttribute(attribute, attributes[attribute]);
        }
      }
    }
    if (textContent) {
      element.textContent = textContent;
    }
    return element;
  }

function createLi(parent,element){
    const li= document.createElement('li');
    const a=document.createElement('a');
    const h4=document.createElement('h4');
    const link = "./planet?planetId="+ element.id;
    h4.textContent=element.title;
    a.setAttribute('href',link);
    a.appendChild(h4);
    li.appendChild(a);
    parent.appendChild(li);
}

function createNavBar(parent)
{
  const navigation = document.createElement('nav');
  const ul = document.createElement('ul');
  const logo = createElement("a",{href:"./main.html", id: "logo" },"");
  const h2 = createElement("h2","","The Planets");
  const off = createElement("li","");
  const offAnch = createElement("a",{href:"./login.html", class:"off-icon"});
  const offImg = createElement("img", {src: "./assets/power-16.png"});

  planetList.forEach((elem) => {
      createLi(ul,elem);
  })

  offAnch.appendChild(offImg);
  off.appendChild(offAnch);
  ul.appendChild(off);
  logo.appendChild(h2);
  navigation.appendChild(logo);
  navigation.appendChild(ul);
  parent.appendChild(navigation);
}

function createMain(mainBody,planet){
  const divPlanetUpper = createElement("div",{class:'upper'});
  const divLower = createElement("div",{class:'lower'});
  const planetImg = createElement("img", {src:planet.overviewImg,class:'left'});
  const planetDesc = createElement ("div",{class: 'right'});
  const title = createElement ("h1",{class:'title'},planet.title);
  planetDesc.appendChild(title);
  divPlanetUpper.appendChild(planetImg);
  divPlanetUpper.appendChild(planetDesc);
  mainBody.appendChild(divPlanetUpper);
  createLower(divLower,planet);
  mainBody.appendChild(divLower);
}

function createLowerCard(main, text, title){
  const rot = createElement("div", {class:"square"});
  const rTitle = createElement("h4","",title);
  const rText =createElement("h2","", text);
  rot.appendChild(rTitle);
  rot.appendChild(rText);
  main.appendChild(rot);
}

function createLower(main,planet){
  createLowerCard(main,planet.rotation,"Rotation Time");
  createLowerCard(main,planet.revolution,"Revolution Time");
  createLowerCard(main,planet.radius,"Radius");
  createLowerCard(main,planet.temp,"Average temp.");
}

const urlParam = new URLSearchParams(window.location.search);
const myParam = urlParam.get('planetId');
console.log(myParam);
const planet = planetList.find((e)=>e.id==myParam);
console.log(planet);
if(planet){
  const mainBody = createElement("div", {class: "mainBody"});
  const main = createElement("div",{class:'main'});
  createNavBar(mainBody);
  createMain(main,planet);
  mainBody.appendChild(main);
  document.body.appendChild(mainBody);
}
else{
  alert("ERROR: the id was not found");
}


