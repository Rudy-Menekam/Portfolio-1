/** *******************************************
* Pr0ject section JS implementation
********************************************* */

const card1 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://github.com/Rudy-Menekam',
    'https://rudy-menekam.github.io/',
  ],
  image: './images/6.png',

};
const card2 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://github.com/Rudy-Menekam',
    'https://rudy-menekam.github.io/',
  ],
  image: './images/Group 109.png',

};
const card3 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://github.com/Rudy-Menekam',
    'https://rudy-menekam.github.io/',
  ],
  image: './images/3.png',

};
const card4 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://github.com/Rudy-Menekam',
    'https://rudy-menekam.github.io/',
  ],
  image: './images/4.png',

};
const card5 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://github.com/Rudy-Menekam',
    'https://rudy-menekam.github.io/',
  ],
  image: './images/5.png',

};
const card6 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript',
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://github.com/Rudy-Menekam',
    'https://rudy-menekam.github.io/',
  ],
  image: './images/1.png',
};

const projectData = [card1, card2, card3, card4, card5, card6];

function modal(number) {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
  const title = document.querySelector('#card-title');
  const list = document.querySelector('#card-list');
  list.innerHTML = '';
  const img = document.querySelector('.card-image');
  const desc = document.querySelector('#card-description');
  const buttonsrc = document.querySelector('#card-button-source');
  const buttonlive = document.querySelector('#card-button-live');

  title.innerHTML = projectData[number].title;

  for (let i = 0; i < projectData[number].technologies.length; i += 1) {
    const li = document.createElement('li');
    li.textContent = projectData[number].technologies[i];
    list.appendChild(li);
  }

  img.setAttribute('src', projectData[number].image);
  buttonsrc.setAttribute('onclick', `window.open("${projectData[number].link[1]}", "_blank");`);
  buttonlive.setAttribute('onclick', `window.open("${projectData[number].link[0]}", "_blank");`);
  desc.innerHTML = projectData[number].description;
}
function toggle() {
  const card = document.querySelector('#card');
  card.classList.toggle('invisible');
}
toggle();
modal();
