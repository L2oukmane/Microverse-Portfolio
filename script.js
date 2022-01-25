function openCloseMenu() {
  const x = document.querySelector('.desktop-nav-bar');
  const y = document.querySelector('body');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
  } else {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
  }
}
document.getElementById('onclick-open').addEventListener('click', openCloseMenu);
document.getElementById('onclick-close').addEventListener('click', openCloseMenu);
document.getElementById('onclick-portfolio').addEventListener('click', openCloseMenu);
document.getElementById('onclick-about').addEventListener('click', openCloseMenu);
document.getElementById('onclick-contact').addEventListener('click', openCloseMenu);


function popUp(){
let container = document.querySelector('.grid-container');
const workList = document.createElement('li');
workList.classList.add('work');
workList.classList.add('work1');
let workImg = document.createElement('img');
workImg.classList.add('img1');
workImg.setAttribute('src','portfolioimgs/Snap1.svg');
workImg.setAttribute('alt','work1Snapshot');
workList.appendChild(workImg); 
let descriptionDiv = document.createElement('div');
descriptionDiv.classList.add('work-descreption');
let heading1 = document.createElement('h1');
heading1.classList.add('tonic-class');
heading1.appendChild(document.createTextNode('Tonic'));
descriptionDiv.appendChild(heading1);
let canopy = document.createElement('div');
canopy.classList.add('canopy');
let heading3 = document.createElement('h3');
heading3.appendChild(document.createTextNode('CANOPY'));
let cardsList  =document.createElement('ul');
cardsList.classList.add('cards');
let list1 = document.createElement('li');
let list2 = document.createElement('li');
list1.classList.add('info');
list2.classList.add('info');
list1.appendChild(document.createTextNode('Back End dev'));
list2.appendChild(document.createTextNode('2015'));
cardsList.appendChild(list1);
cardsList.appendChild(list2);
canopy.appendChild(heading3);
canopy.appendChild(cardsList);
descriptionDiv.appendChild(canopy);
let description = document.createElement('p');
description.classList.add('description');
description.appendChild(document.createTextNode('A daily selection of privately personalized reads; no accounts or sign-ups required.'));
descriptionDiv.appendChild(description);
let toolsDiv = document.createElement('div');
toolsDiv.classList.add('tools');
let toolsPara1 = document.createElement('p');
let toolsPara2 = document.createElement('p');
let toolsPara3 = document.createElement('p');
toolsPara1.appendChild(document.createTextNode('html'));
toolsPara2.appendChild(document.createTextNode('css'));
toolsPara3.appendChild(document.createTextNode('javascript')); 
toolsDiv.appendChild(toolsPara1);
toolsDiv.appendChild(toolsPara2);
toolsDiv.appendChild(toolsPara3);
descriptionDiv.appendChild(toolsDiv);
let viewDiv = document.createElement('div');
viewDiv.classList.add('view-project');
let viewBtn = document.createElement('button');
viewBtn.setAttribute('type', 'button');
viewBtn.appendChild(document.createTextNode('See Project'));
viewDiv.appendChild(viewBtn);
descriptionDiv.appendChild(viewDiv);


workList.appendChild(descriptionDiv);
container.appendChild(workList);



 

}

document.addEventListener('DOMContentLoaded', function() {
  popUp();
});