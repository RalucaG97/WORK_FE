//THIS FILE DO THE APPEAREANCE FOR MAIN PAGE
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

function createList(parrent, create){
    const ul = createElement('ul');
    planetList.forEach((elem) => {
      const li =createElement('li');
      const a=createElement('a',{id:elem.id, href:""});
      const contTitle=create("h4","", elem.title);
      const contImg=create("img", {src: elem.overviewImg});
      a.appendChild(contImg);
      li.appendChild(a);
      li.appendChild(contTitle);
      ul.appendChild(li);
      parrent.appendChild(ul);
  });
}

function createNavBar(parent){
    const navigation = document.createElement('nav');
    const ul = createElement("ul");
    const logo = createElement("div",{id: "logo" },"");
    const h2 = createElement("h2","","The Planets");
    const search = createSearch();
    const offAnch = createElement("a",{href:"", class:"off-icon"});
    const offImg = createElement("img", {src: "./assets/power-16.png"});
    offAnch.appendChild(offImg);
    logo.appendChild(h2);
    navigation.appendChild(logo);
    navigation.appendChild(search);
    navigation.appendChild(offAnch);
    parent.appendChild(navigation);
}

function createSearch(){
    const search = createElement("input",{type:"search", class:"search", placeholder:"Search..."},"");
    return search;
}

const mainBody = createElement("div", {class: "mainBody"});
createNavBar(mainBody);
document.body.appendChild(mainBody);

//MAIN PAGE
const main = createElement("div",{class:"main"});
const title = createElement("h2",{class:"title"},"The solar sistem");
const planets = createElement("div",{class:"allPlanets"});
createList(planets,createElement);
main.appendChild(title);
main.appendChild(planets);
mainBody.appendChild(main);
