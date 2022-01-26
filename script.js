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
    linkLive: 'location.href=\'https://l2oukmane.github.io/Portfolio/index.html\'',
    linkSource: ''
  },
  project2: {
    heading1: 'Multi-Post Stories',
    heading2: ['Canopy','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap2.svg',
    languages: ['html','css','javascript'],
    linkLive: 'location.href=\'https://l2oukmane.github.io/Portfolio/index.html\'',
    linkSource: ''
  },
  project3: {
    heading1: 'Tonic',
    heading2: ['Canopy','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap3.svg',
    languages: ['html','css','javascript'],
    linkLive: 'location.href=\'https://l2oukmane.github.io/Portfolio/index.html\'',
    linkSource: ''
  },
  project4: {
    heading1: 'Multi-Post Stories',
    heading2: ['Canopy','Back End Dev','2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap4.svg',
    languages: ['html','css','javascript'],
    linkLive: 'location.href=\'https://l2oukmane.github.io/Portfolio/index.html\'',
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
  let toolsDiv = '';
  for (let i=0;i<project.languages.length;i++){
    toolsDiv += `<p>${project.languages[i]}</p>`;
  }
  let container = document.querySelector('.grid-container');
  const workList = document.createElement('li');
  workList.classList.add('work');
  workList.classList.add('work'+counter);
  workList.innerHTML = `<img class="img1" src="${project.featuredImage}" alt="workSnapshot${counter}">
                        <div class="work-descreption">
                          <h1 class="tonic-class">${project.heading1}</h1>
                          <div class="canopy">
                            <h3>${project.heading2[0]}</h3>
                            <ul class="cards">
                              <li class="info">${project.heading2[1]}</li>
                              <li class="info">${project.heading2[2]}</li>
                            </ul>
                          </div>
                          <p class="description">${project.description}</p>
                          <div class="tools">${toolsDiv}</div>
                          <div class="view-project">
                            <button class="project-button" type="button">See Project</button>
                          </div>
                        </div>`;
  workList.querySelector('.project-button').addEventListener('click', () => {
    openClosePopup();
    createPopUp(projects[`project${counter}`]);
  });
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
  title.textContent = project.heading1;
  const heading3 = document.getElementById('heading3');
  heading3.textContent = project.heading2[0];
  const cards = document.getElementById('cardsList');
  cards.innerHTML = '';
  let list1 = document.createElement('li');
  let list2 = document.createElement('li');
  list1.classList.add('info');
  list2.classList.add('info');
  list1.appendChild(document.createTextNode(project.heading2[1]));
  list2.appendChild(document.createTextNode(project.heading2[2]));
  cards.appendChild(list1);
  cards.appendChild(list2);
  const description = document.getElementById('description-text');
  description.textContent = project.description;
  const projectTools = document.getElementById('project-tools');
  projectTools.innerHTML = '';
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
  const popupImage = document.getElementById('popUp-img');
  popupImage.setAttribute('src', project.featuredImage);
}
document.addEventListener('DOMContentLoaded', function() {
  createProjectCards();
});