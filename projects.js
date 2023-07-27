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
  image: './images/vespa.png',

};
const card2 = {
  title: 'Vespa Booking App',
  technologies: [
    'Ruby',
    'Ruby on Rails',
    'React',
  ],
  description: 'This project is designed for the reservation of fancy vespas. If you are preparing for a special day or event and you want a cool Vespa for it, this website is the best place for you. If you have a luxurious Vespa and want to make some extra money from it, you can add it to our website and others will be able to reserve it.',
  link: [
    'https://vespa-rentals-msq2.onrender.com/',
    'https://github.com/Rudy-Menekam/Rentals-project-frontend',
  ],
  image: './images/vespa.png',

};
const card3 = {
  title: 'Budget App',
  technologies: [
    'HTML/CSS',
    'Ruby',
  ],
  description: 'Budget-App is a mobile web application where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what.',
  link: [
    'https://budget-app-faad.onrender.com/',
    'https://github.com/Rudy-Menekam/Budget-app',
  ],
  image: './images/3.png',

};
const card4 = {
  title: 'Space Traveler Hub',
  technologies: [
    'HTML/CSS',
    'React & redux',
    'JavaScript',
  ],
  description: 'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. Real live data is obtained from the SpaceX API.',
  link: [
    'https://github.com/Rudy-Menekam/space-travelers-hub',
    'https://github.com/Rudy-Menekam/space-travelers-hub',
  ],
  image: './images/2x.png',

};
const card5 = {
  title: 'covid-19-stats',
  technologies: [
    'HTML/CSS',
    'React and Redux',
    'JavaScript',
  ],
  description: 'A Covid-19 statistics app is a mobile responsive application designed to provide up-to-date information on the number of confirmed cases, deaths, and recoveries from the Covid-19 pandemic from different countries around the world. The app can help users track the current situation of the pandemic in their country.',
  link: [
    'https://world-covid19stats.netlify.app/',
    'https://github.com/Rudy-Menekam/covid-19-stats',
  ],
  image: './images/@2x.png',

};
const card6 = {
  title: 'Developers Community',
  technologies: [
    'HTML/CSS',
    'JavaScript',
  ],
  description: 'A community website that talks about various activities that regroups developers in the community. It showcases various events, hackathons, bootcamps and scholarships to community members who want to improve or build their skills in tech.',
  link: [
    'https://rudy-menekam.github.io/developers-community/',
    'https://github.com/Rudy-Menekam/developers-community',
  ],
  image: './images/coffee.png',
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
