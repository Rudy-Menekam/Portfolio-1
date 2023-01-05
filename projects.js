/** *******************************************
* Pr0ject section JS implementation
********************************************* */
const projectData = [
  {
    id: 1,
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/1.png',
    sourceLink: 'https://github.com/Rudy-Menekam',
    liveLink: 'https://rudy-menekam.github.io/',
  },
  {
    id: 2,
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/2.png',
    sourceLink: 'https://github.com/Rudy-Menekam',
    liveLink: 'https://rudy-menekam.github.io/',
  },
  {
    id: 3,
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/3.png',
    sourceLink: 'https://github.com/Rudy-Menekam',
    liveLink: 'https://rudy-menekam.github.io/',
  },
  {
    id: 4,
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/4.png',
    sourceLink: 'https://github.com/Rudy-Menekam',
    liveLink: 'https://rudy-menekam.github.io/',
  },
  {
    id: 5,
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/5.png',
    sourceLink: 'https://github.com/Rudy-Menekam',
    liveLink: 'https://rudy-menekam.github.io/',
  },
  {
    id: 6,
    title: 'Project name goes here',
    technologies: [
      'HTML/CSS',
      'Ruby on Rails',
      'JavaScript',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/6.png',
    sourceLink: 'https://github.com/Rudy-Menekam',
    liveLink: 'https://rudy-menekam.github.io/',
  },
];
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
