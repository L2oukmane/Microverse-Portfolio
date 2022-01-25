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
const projects = {
  project1: {
    heading1: 'Tonic',
    heading2: ['Canopy','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap1.svg',
    languages: ['html','css','javascript'],
    linkLive: '',
    linkSource: ''
  },
  project2: {
    heading1: 'Multi-Post Stories',
    heading2: ['Canopy','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap2.svg',
    languages: ['html','css','javascript'],
    linkLive: '',
    linkSource: ''
  },
  project3: {
    heading1: 'Tonic',
    heading2: ['Canopy','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap3.svg',
    languages: ['html','css','javascript'],
    linkLive: '',
    linkSource: ''
  },
  project4: {
    heading1: 'Multi-Post Stories',
    heading2: ['Canopy','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap4.svg',
    languages: ['html','css','javascript'],
    linkLive: '',
    linkSource: ''
  },
}
function createProjectCards(){
  let i = 1;
  for (const project in projects){
    projectCards(projects[project],i);
    i++;
  }
}
function projectCards(project,counter){
  let container = document.querySelector('.grid-container');
  const workList = document.createElement('li');
  workList.classList.add('work');
  workList.classList.add('work'+counter);
  let workImg = document.createElement('img');
  workImg.classList.add('img1');
  workImg.setAttribute('src',project.featuredImage);
  workImg.setAttribute('alt','workSnapshot'+counter);
  workList.appendChild(workImg); 
  let descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('work-descreption');
  let heading1 = document.createElement('h1');
  heading1.classList.add('tonic-class');
  heading1.appendChild(document.createTextNode(project.heading1));
  descriptionDiv.appendChild(heading1);
  let canopy = document.createElement('div');
  canopy.classList.add('canopy');
  let heading3 = document.createElement('h3');
  heading3.appendChild(document.createTextNode(project.heading2[0]));
  let cardsList  =document.createElement('ul');
  cardsList.classList.add('cards');
  let list1 = document.createElement('li');
  let list2 = document.createElement('li');
  list1.classList.add('info');
  list2.classList.add('info');
  list1.appendChild(document.createTextNode(project.heading2[1]));
  list2.appendChild(document.createTextNode(project.heading2[2]));
  cardsList.appendChild(list1);
  cardsList.appendChild(list2);
  canopy.appendChild(heading3);
  canopy.appendChild(cardsList);
  descriptionDiv.appendChild(canopy);
  let description = document.createElement('p');
  description.classList.add('description');
  description.appendChild(document.createTextNode(project.description));
  descriptionDiv.appendChild(description);
  let toolsDiv = document.createElement('div');
  toolsDiv.classList.add('tools');
  for (let i=0;i<project.languages.length;i++){
    const language = document.createElement('p');
    const languageText = document.createTextNode(project.languages[i]);
    language.appendChild(languageText);
    toolsDiv.appendChild(language);
  }
  descriptionDiv.appendChild(toolsDiv);
  let viewDiv = document.createElement('div');
  viewDiv.classList.add('view-project');
  let viewBtn = document.createElement('button');
  viewBtn.setAttribute('type', 'button');
  viewBtn.appendChild(document.createTextNode('See Project'));
  viewBtn.addEventListener('click', function() {
    openClosePopup();
    createPopUp(projects['project'+counter]);
    console.log("test");
  });
  
  viewDiv.appendChild(viewBtn);
  descriptionDiv.appendChild(viewDiv);


  workList.appendChild(descriptionDiv);
  container.appendChild(workList);
}
function openClosePopup(){
  const x = document.querySelector('.popUp-container');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }
}
function createPopUp(project){
  const title = document.getElementById('heading1');
  title.appendChild(document.createTextNode(project.heading1));
  const heading3 = document.getElementById('heading3');
  heading3.appendChild(document.createTextNode(project.heading2[0]));
  const cards = document.getElementById('cardsList');
  let list1 = document.createElement('li');
  let list2 = document.createElement('li');
  list1.classList.add('info');
  list2.classList.add('info');
  list1.appendChild(document.createTextNode(project.heading2[1]));
  list2.appendChild(document.createTextNode(project.heading2[2]));
  cards.appendChild(list1);
  cards.appendChild(list2);
  const description = document.getElementById('description-text');
  description.appendChild(document.createTextNode(project.description));
  const projectTools = document.getElementById('project-tools');
  for (let i=0;i<project.languages.length;i++){
    const language = document.createElement('p');
    const languageText = document.createTextNode(project.languages[i]);
    language.appendChild(languageText);
    projectTools.appendChild(language);
  }
  const liveButton = document.getElementById('live-button');
  liveButton.setAttribute('onclick',project.linkLive);
  const sourceButton = document.getElementById('source-button');
  sourceButton.setAttribute('onclick',project.linkSource);
}
document.addEventListener('DOMContentLoaded', function() {
  createProjectCards();
});