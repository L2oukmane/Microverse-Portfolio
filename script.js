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
    heading2: {
      first: 'Canopy',
      second: 'Back End Dev',
      third: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap1.svg',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://l2oukmane.github.io/Portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/L2oukmane/Portfolio\'',
  },
  project2: {
    heading1: 'Multi-Post Stories',
    heading2: {
      first: 'Canopy',
      second: 'Back End Dev',
      third: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap2.svg',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://l2oukmane.github.io/Portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/L2oukmane/Portfolio\'',
  },
  project3: {
    heading1: 'Tonic',
    heading2: {
      first: 'Canopy',
      second: 'Back End Dev',
      third: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap3.svg',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://l2oukmane.github.io/Portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/L2oukmane/Portfolio\'',
  },
  project4: {
    heading1: 'Multi-Post Stories',
    heading2: {
      first: 'Canopy',
      second: 'Back End Dev',
      third: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'portfolioimgs/Snap4.svg',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://l2oukmane.github.io/Portfolio/index.html\'',
    linkSource: 'location.href=\'https://github.com/L2oukmane/Portfolio\'',
  },
};
function openClosePopup() {
  const x = document.querySelector('.popUp-container');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }
}
function createPopUp(project) {
  const title = document.getElementById('heading1');
  title.textContent = project.heading1;
  const closeImg = document.createElement('img');
  closeImg.classList.add('close-img');
  closeImg.setAttribute('src', 'portfolioimgs/close-black.svg');
  title.appendChild(closeImg);
  const heading3 = document.getElementById('heading3');
  heading3.textContent = project.heading2.first;
  const cards = document.getElementById('cardsList');
  cards.innerHTML = '';
  const list1 = document.createElement('li');
  const list2 = document.createElement('li');
  list1.classList.add('info');
  list2.classList.add('info');
  list1.appendChild(document.createTextNode(project.heading2.second));
  list2.appendChild(document.createTextNode(project.heading2.third));
  cards.appendChild(list1);
  cards.appendChild(list2);
  const description = document.getElementById('description-text');
  description.textContent = project.description;
  const projectTools = document.getElementById('project-tools');
  projectTools.innerHTML = '';
  for (let i = 0; i < project.languages.length; i += 1) {
    const language = document.createElement('p');
    const languageText = document.createTextNode(project.languages[i]);
    language.appendChild(languageText);
    projectTools.appendChild(language);
  }
  closeImg.addEventListener('click', () => {
    openClosePopup();
  });
  const liveButton = document.getElementById('live-button');
  liveButton.setAttribute('onclick', project.linkLive);
  const sourceButton = document.getElementById('source-button');
  sourceButton.setAttribute('onclick', project.linkSource);
  const popupImage = document.getElementById('popUp-img');
  popupImage.setAttribute('src', project.featuredImage);
}
function projectCards(project, counter) {
  counter += 1;
  let toolsDiv = '';
  for (let i = 0; i < project.languages.length; i += 1) {
    toolsDiv += `<p>${project.languages[i]}</p>`;
  }
  const container = document.querySelector('.grid-container');
  const workList = document.createElement('li');
  workList.classList.add('work');
  workList.classList.add(`work${counter}`);
  workList.innerHTML = `<img class="img1" src="${project.featuredImage}" alt="workSnapshot${counter}">
                        <div class="work-descreption">
                          <h1 class="tonic-class">${project.heading1}</h1>
                          <div class="canopy canopy-mobile">
                            <h3>${project.heading2.first}</h3>
                            <ul class="cards">
                              <li class="info">${project.heading2.second}</li>
                              <li class="info">${project.heading2.third}</li>
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
function createProjectCards(projects) {
  for (let i = 0; i < projects.length; i += 1) {
    projectCards(projects[i], i);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  createProjectCards(Object.values(projects));
});

function validateEmail(email, event, errorMsg) {
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const msg = document.getElementById('Errormessage');
    msg.innerText = errorMsg;
    msg.style.color = 'red';
    msg.style.fontSize = '15px';
  }
}
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  const errorMessage = 'Please enter an email address without any upper-case letters.';
  validateEmail(form.elements.email.value, event, errorMessage);
});
 
const contactForm = document.querySelector('.contactForm');
function formInfo(data){
const storedData = JSON.stringify(data);
localStorage.setItem('data', storedData);
}

contactForm.addEventListener('input', () => {
const data = {
  name: document.querySelector('.inputName').value,
  email: document.querySelector('.inputEmail').value,
  message:document.querySelector('.inputMessage').value,
}; 
formInfo(data);

})