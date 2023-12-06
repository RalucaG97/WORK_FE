//THIS FILE DO THE APPEAREANCE FOR PLANET PAGE
const planetList = JSON.parse(localStorage.getItem('planetList'));

console.log(planetList);

//NAV BAR
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
    h4.textContent=element.title;
    a.setAttribute('href',"");
    a.appendChild(h4);
    li.appendChild(a);
    parent.appendChild(li);
}

function createNavBar(parent){
    const navigation = document.createElement('nav');
    const ul = document.createElement('ul');
    const logo = createElement("div",{id: "logo" },"");
    const h2 = createElement("h2","","The Planets");
    const off = createElement("li","");
    const offAnch = createElement("a",{href:"", class:"off-icon"});
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

const mainBody = createElement("div", {class: "mainBody"});
createNavBar(mainBody);
document.body.appendChild(mainBody);

