let currentTab;
function initPage() {
  currentTab = 'home';
  attachEvents();
  setActiveTab('home');
  populateTabContent();
}
function attachEvents() {
  const navPanel = document.querySelector('.navigationPanel');
  navPanel.addEventListener('click', handleTabClick);
}
function handleTabClick(event) {
  const tabClass = [ ...event.target.classList ];
  handleTabChange(tabClass[1]);
}
function handleTabChange(tabIndex) {
  currentTab = tabIndex;
  setActiveTab(tabIndex);
  populateTabContent();
}
function setActiveTab(tabIndex) {
  const active = document.querySelector(`.${tabIndex}`);
  const tabs = document.querySelectorAll('.tab');
  for(let i =0; i < tabs.length; i++) {
    if(tabs[i].classList) {
      tabs[i].classList.remove('activeTab');
    }
  }
  active.classList.add('activeTab');
}
function createDOMElement(type, config) {
  const elem = document.createElement(type);
  const { className, dataValue, src } = config;
  Object.keys(config).forEach(key => {
    if (key !== 'dataValue') {
      elem[key] = config[key];
    } else {
      elem.setAttribute('data-key', dataValue);
    }
  });
  return elem;
}
function populateHome() {
  console.log('Hello');
  const targetContainer = document.querySelector('.tabContent');
  document.getElementsByClassName('content_wrapper')[0].remove();
  const newContentWrapper = createDOMElement('div', {
    className: 'content_wrapper'
  });
  const homeTitle = createDOMElement('h2', {
    className: 'home_title',
    innerHTML: 'About me'
  });
  const paraContent1 = `I am a PhD student in the Department of Computational & Data Sciences at the Indian Institute of Science Bangalore. Prior to this, I have worked as a Data Scientist in IBM India Pvt. Ltd after completing my Masters in Computer Science & Engineering from Indian Institute of Technology, Kharagpur.`
  const homePara1 = createDOMElement('p', {
    className: 'para',
    innerHTML: paraContent1
  });
  newContentWrapper.appendChild(homeTitle);
  newContentWrapper.appendChild(homePara1);
  targetContainer.appendChild(newContentWrapper);
}
function populateAcademic() {
  console.log('Hi');
}
function populateWorkExperience() {
  console.log('Babli');
}
function populateTabContent() {
  switch (currentTab) {
    case 'home': {
      populateHome();
      break;
    }
    case 'academic': {
      populateAcademic();
      break;
    }
    case 'work_ex': {
      populateWorkExperience();
      break;
    }
    default: return null;
  }
}

initPage();