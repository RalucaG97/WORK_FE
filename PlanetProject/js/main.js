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

function createList(parrent, create,list){
    const ul = createElement('ul');
    list.forEach((elem) => {
      const li =createElement('li',{class:elem.title, id:elem.id});
      const link = "./planet"+ "?planetId=" + elem.id;
      const a=createElement('a',{href:link});
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
    const logo = createElement("div",{id: "logo" },"");
    const h2 = createElement("h2","","The Planets");
    const search = createSearch();
    const offAnch = createElement("a",{href:"./login.html", class:"off-icon"});
    const offImg = createElement("img", {src: "./assets/power-16.png"});
    offAnch.appendChild(offImg);
    logo.appendChild(h2);
    navigation.appendChild(logo);
    navigation.appendChild(search);
    navigation.appendChild(offAnch);
    parent.appendChild(navigation);
}

function createSearch(){
    const search = createElement("input",{type:"search", class:"search", id:"search", placeholder:"Search..."},"");
    return search;
}

function search(searchValue){
  const filterList = planetList.filter((element)=>{
    const toLowerCase =element.title.toLowerCase();
    return toLowerCase.includes(searchValue)
  })
  createList(planets,createElement,filterList);
}

const mainBody = createElement("div", {class: "mainBody"});
createNavBar(mainBody);
document.body.appendChild(mainBody);

//MAIN PAGE
const main = createElement("div",{class:"main"});
const title = createElement("h2",{class:"title"},"The solar sistem");
const planets = createElement("div",{class:"allPlanets"});
createList(planets,createElement,planetList);
main.appendChild(title);
main.appendChild(planets);
mainBody.appendChild(main);

const searchInput = document.getElementById("search");
searchInput.addEventListener('input',(event)=>{
  const ul= document.querySelector("ul");
  ul.remove();
  search(event.target.value.toLowerCase());
})
