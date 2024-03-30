const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid navy';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '5px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.getElementById('Places-Section');
// placesContainer.style.backgroundColor = 'YELLOW';

const placesContainer = document.getElementById('Places-Section');
placesContainer.classList.add('important-na-dile-kaj-korbe-na');
placesContainer.classList.remove('large-text');