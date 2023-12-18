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
  const divImg = createElement("div",{class:'left', id:"left"});
  const planetImg = createElement("img", {src:planet.overviewImg, id:"planet"});
  const planetDesc = createElement ("div",{class: 'right'});
  planetImg.style.width = planet.width;
  planetImg.style.height = planet.height;
  divImg.appendChild(planetImg);
  divPlanetUpper.appendChild(divImg);
  createUpperRight(planetDesc,planet);
  divPlanetUpper.appendChild(planetDesc);
  mainBody.appendChild(divPlanetUpper);
  createLower(divLower,planet);
  mainBody.appendChild(divLower);
}

function createUpperRight(parent,planet){
  const title = createElement ("h1",{class:'title'},planet.title);
  const description = createElement("p", {id:'description'},planet.overview);
  const link =createElement("a",{id:"link", href:planet.url, target:"_blank"},"Wikipedia");
  const label= createElement("label",{for:"link"},"Source: ");
  const source = createElement("div",{class:"source"});
  const buttonList =createElement("div",{class:"list"});
  createList(buttonList,planet)
  parent.appendChild(title);
  parent.appendChild(description);
  source.appendChild(label);
  source.appendChild(link);
  parent.appendChild(source);
  parent.appendChild(buttonList);
}

function createList(parent,planet){
  const overview= createElement('button',{type:'button', id:"overview", style:"background-color:" + planet.color});
  const index1=createElement('div',{class:"index"},"01");
  const div1= createElement("div",{class:"buttonName"},"overview");
  const internal= createElement('button',{type:'button', id:"internal"});
  const index2=createElement('div',{class:"index"},"02");
  const div2=createElement('div',{class:"buttonName"},"internal structure");
  const surface= createElement('button',{type:'button', id:"surface"});
  const index3=createElement('div',{class:"index"},"03");
  const div3=createElement('div',{class:"buttonName"},"surface");
  overview.appendChild(index1);
  overview.appendChild(div1);
  internal.appendChild(index2);
  internal.appendChild(div2);
  surface.appendChild(index3);
  surface.appendChild(div3);
  parent.appendChild(overview);
  parent.appendChild(internal);
  parent.appendChild(surface);
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
  //Build all the main body
  const mainBody = createElement("div", {class: "mainBody"});
  const main = createElement("div",{class:'main'});
  createNavBar(mainBody);
  createMain(main,planet);
  mainBody.appendChild(main);
  document.body.appendChild(mainBody);

  //give the buttons some actions
  const overview = document.getElementById("overview");
  const internal = document.getElementById("internal");
  const surface = document.getElementById("surface");

  console.log(overview,internal,surface);
  const img=document.getElementById("planet");
  const divImg=document.getElementById("left");
  const description = document.getElementById("description");
  //overview button
  overview.addEventListener("click",(e)=>{
    e.preventDefault();
    img.setAttribute("src",planet.overviewImg);
    const surface=document.getElementById("surfaceImg");
    if(surface){
      surface.remove();
    }
    description.textContent=planet.overview;
  })
  overview.addEventListener('focus', function () {
    overview.style.backgroundColor = planet.color; // Change to your desired color
  });
  overview.addEventListener('blur', function () {
    overview.style.backgroundColor = ''; // Reset to the default color or remove this line if not needed
  });
  //internal button
  internal.addEventListener("click",(e)=>{
    e.preventDefault();
    overview.setAttribute("style","background-color: ''")
    const surface=document.getElementById("surfaceImg");
    img.setAttribute("src",planet.internalStructureImg);
    if(surface){
      surface.remove();
    }
    description.textContent=planet.internalStructure;
  })
  internal.addEventListener('focus', function () {
    internal.style.backgroundColor = planet.color; // Change to your desired color
  });
  internal.addEventListener('blur', function () {
    internal.style.backgroundColor = ''; // Reset to the default color or remove this line if not needed
  });
  //surface button
  surface.addEventListener("click",(e)=>{
    e.preventDefault();
    overview.setAttribute("style","background-color: ''")
    const surface=document.getElementById("surfaceImg");
    if(!surface){
      img.setAttribute("src",planet.overviewImg);
      const surface = createElement("img",{src:planet.surfaceImg,id:"surfaceImg"});
      divImg.appendChild(surface);
    }
    description.textContent=planet.surface;
  })
  surface.addEventListener('focus', function () {
    surface.style.backgroundColor = planet.color; // Change to your desired color
  });
  surface.addEventListener('blur', function () {
    surface.style.backgroundColor = ''; // Reset to the default color or remove this line if not needed
  });
}
else{
  alert("ERROR: the id was not found");
}

