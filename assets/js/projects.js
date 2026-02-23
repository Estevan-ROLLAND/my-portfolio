const sections = document.querySelectorAll('.section-link');
let activeSection = sections[0];

activeSection.classList.add('active');
activeSection.style.fontSize = '1.5em';

sections.forEach(section => {
    section.addEventListener('click', function (event) {
        activeSection.classList.remove('active');
        activeSection.style.fontSize = '1em';
        section.classList.add('active');
        section.style.fontSize = '1.5em';
        activeSection = section;

    })

});