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
function clearContent() {
  document.getElementsByClassName('content_wrapper')[0].remove();
}
function populateHome() {
  const targetContainer = document.querySelector('.tabContent');
  clearContent();
  const newContentWrapper = createDOMElement('div', {
    className: 'content_wrapper'
  });
  const homeTitle = createDOMElement('h2', {
    className: 'home_title',
    innerHTML: 'About me'
  });
  const paraContent1 = `I am a PhD Student at the Department of Computational and Data Sciences at Indian Institute of Sciences, Bengaluru. I work primarily in the area of Model Stealing Attacks and Domain Adaptation.`
  const homePara1 = createDOMElement('p', {
    className: 'para',
    innerHTML: paraContent1
  });
  const paraContent2 = `Prior to this, I did my Masters from Indian Institute of Technology, Bombay (2017-2019) in Computer Science. During my Masters, I worked on several projects in machine learning and deep learning and its applications on NLP tasks such as search and data mining, relation extraction and question answering.`
  const homePara2 = createDOMElement('p', {
    className: 'para',
    innerHTML: paraContent2
  });
  const paraContent3 = `At Microsoft, I worked as part of the ranking, allocation and pricing team in Bing Ads.`
  const homePara3 = createDOMElement('p', {
    className: 'para',
    innerHTML: paraContent3
  });
  const paraContent4 = `After acquiring rich industrial experience for a year, I joined <a href="https://val.cds.iisc.ac.in/" target="_blank">VAL lab</a> as a PhD student under the guidance of <a href="http://cds.iisc.ac.in/faculty/venky/" target="_blank">Prof. Venkatesh Babu</a>.`
  const homePara4 = createDOMElement('p', {
    className: 'para',
    innerHTML: paraContent4
  });
  newContentWrapper.appendChild(homeTitle);
  newContentWrapper.appendChild(homePara1);
  newContentWrapper.appendChild(homePara2);
  newContentWrapper.appendChild(homePara3);
  newContentWrapper.appendChild(homePara4);
  targetContainer.appendChild(newContentWrapper);
}
function populateAcademic() {
  clearContent();
  const targetContainer = document.querySelector('.tabContent');
  const newContentWrapper = createDOMElement('div', {
    className: 'content_wrapper'
  });
  const academicTitleProjects = createDOMElement('h2', {
    className: 'academic_title',
    innerHTML: 'Projects'
  });
  const academicTitlePublications = createDOMElement('h2', {
    className: 'academic_title',
    innerHTML: 'Publications'
  });
  const publications = [
    {
      title: 'Towards Data-Free Model Stealing in a Hard Label Setting (published at CVPR 2022)',
      link: 'https://sites.google.com/view/dfms-hl'
    }
  ];
  const listWrapperPublications = createDOMElement('ul', {
    className: 'publications_list'
  });
  publications.forEach(publication => {
    const listItem = createDOMElement('li', {
      innerHTML: `<span> ${ publication.title }: <a href=${publication.link} target="_blank">${publication.link}</a></span>`
    });
    listWrapperPublications.appendChild(listItem);
  });

  const projects = [
    {
      title: 'Data Poisoning: DLCV Course Project',
      link: 'https://github.com/sunan93/DLCV-Course-Project'
    },
    // {
    //   title: ' DS200 Assignment-1',
    //   link: 'https://github.com/sunan93/DS200-Assignment-1'
    // },
    {
      title: 'Past Projects available at',
      link: 'https://github.com/sunan93/'
    }
  ];
  const listWrapperProjects = createDOMElement('ul', {
    className: 'project_list'
  });
  projects.forEach(project => {
    const listItem = createDOMElement('li', {
      innerHTML: `<span> ${project.title}: <a href=${project.link} target="_blank">${project.link}</a></span>`
    });
    listWrapperProjects.appendChild(listItem);
  });
  newContentWrapper.appendChild(academicTitlePublications);
  newContentWrapper.appendChild(listWrapperPublications);
  newContentWrapper.appendChild(academicTitleProjects);
  newContentWrapper.appendChild(listWrapperProjects);
  targetContainer.appendChild(newContentWrapper);
}
function populateWorkExperience() {
  clearContent();
  const targetContainer = document.querySelector('.tabContent');
  const newContentWrapper = createDOMElement('div', {
    className: 'content_wrapper'
  });
  const workExTitle = createDOMElement('h2', {
    className: 'work_ex_title',
    innerHTML: 'Past Work Experience'
  });
  const workExList = [
    {
      post: 'Research Engineer',
      company: 'Centre for Development of Telematics',
      duration: 'Aug 2015 to July 2017'
    },
    {
      post: 'Data and Applied Scientist',
      company: 'Microsoft',
      duration: ' July 2019 to Aug 2020'
    },
  ];
  const listWrapperWork = createDOMElement('ul', {
    className: 'work_list'
  });
  workExList.forEach(workEx => {
    const listItem = createDOMElement('li', {
      innerHTML: `<span> <strong>${workEx.post}</strong>, <strong>${workEx.company}</strong>, ${workEx.duration}`
    });
    listWrapperWork.appendChild(listItem);
  });

  const educationList = [
    {
      college: 'NIT Durgapur',
      degree: 'BTech, CSE',
      duration: '[2011 to 2015]'
    },
    {
      college: 'IIT Bombay',
      degree: 'MTech, CSE',
      duration: '[2017 to 2019]'
    },
    {
      college: 'IISC Bengaluru',
      degree: 'PhD, CDS',
      duration: '[2020 to Present]'
    }
  ];
  const listWrapperEdu = createDOMElement('ul', {
    className: 'education_list'
  });
  educationList.forEach(education => {
    const listItem = createDOMElement('li', {
      innerHTML: `<span> <strong>${education.college}</strong>, <strong>${education.degree}</strong>, ${education.duration}`
    });
    listWrapperEdu.appendChild(listItem);
  });
  const educationTitle = createDOMElement('h2', {
    className: 'education_title',
    innerHTML: 'Education'
  });
  newContentWrapper.appendChild(workExTitle);
  newContentWrapper.appendChild(listWrapperWork);
  newContentWrapper.appendChild(educationTitle);
  targetContainer.appendChild(newContentWrapper);
  newContentWrapper.appendChild(listWrapperEdu);
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