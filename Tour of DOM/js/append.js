// 1. Where to add
const placesList = document.getElementById('places-list')

// 2. What to be added
const li = document.createElement('li')
li.innerText = 'paharbon'

// 3. Add the child
placesList.appendChild(li)

// # Adding a full section

/// Process-1:

// 1. Where to add
const mainContainer = document.getElementById('main-container')

// 2. What to be added
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'My Daily Activities'
section.appendChild(h1)

const ul = document.createElement('ul')
section.appendChild(ul)

const li1 = document.createElement('li')
li1.innerText = 'Finishing Prayer 5 times '

const li2 = document.createElement('li')
li2.innerText = 'Doing WebDev'

const li3 = document.createElement('li')
li3.innerText = 'Self Development'

const li4 = document.createElement('li')
li4.innerText = 'Quranic Research'

const li5 = document.createElement('li')
li5.innerText = 'Finishing 2100 project'

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)

mainContainer.appendChild(section)

console.log(section)

// Process-2: (Set innerHTML directly)

const sectionFashion = document.createElement('section')
sectionFashion.innerHTML = `
<h1>My Fashion Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Sherwani</ii>
    <li>Punjabi</ii>
    <li>Suit</ii>
</ul>


`

mainContainer.appendChild(sectionFashion);