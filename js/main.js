//анимация набранный текст

var typed = new Typed('.typing', {
  strings: ['', 'Веб Разраотчик', 'Программист', 'И твой хороший Друг)'],
  typeSpeed: 120,
  BackSpeed: 60,
  loop: true,
});

//меню

const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  liquid = nav.querySelectorAll('.liquid'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a,liquid');
  a.addEventListener('click', function () {
    removeBackSection();

    {
      for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector('a,liquid').classList.contains('active')) {
          addBackSection(j);
          //allSection[j].classList.add("back-section")
        }
        navList[j].querySelector('a,liquid').classList.remove('active');
      }
      this.classList.add('active');
      showSection(this);
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    }
  });
}

function removeBackSection() {
  for (let j = 0; j < totalSection; j++) {
    allSection[j].classList.remove('back-section');
  }
}

function addBackSection(num) {
  allSection[num].classList.add('back-section');
}

function showSection(element) {
  for (let i = 0; i < totalNavList; i++) {
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}

const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {}
}

function downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/resume.pdf';
  link.download = 'Ariion_resume.pdf';
  link.click();
}
