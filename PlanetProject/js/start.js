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

const mainBody = createElement("div", {class: "mainBody"});
const h1 = createElement("h1",{class: "title"}, "The Planets");
const start = createElement("button");
const details = createElement("div", {class: "buttonName"},"start");
start.appendChild(details);
mainBody.appendChild(h1);
mainBody.appendChild(start);
document.body.appendChild(mainBody);

start.addEventListener("click",()=>{
  window.location.href = './login.html';
})
