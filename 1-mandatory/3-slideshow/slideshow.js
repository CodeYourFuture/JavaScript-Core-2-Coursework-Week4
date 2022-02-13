// Write your code here

const cursorSpeed = [0.5, 0.25, 2.25, 1.75, 0.25, 2.25, 0.25, 1.75, 0.25, 1.5]
let shColor = 'rgba(0, 0, 0, 0.2)';
let contourColor = 'black';
let bgColor = '#EEEEEE';

const setBG = () => {
    document.getElementById('animatedText').innerHTML = ' ';
    Array.from(Array(10).keys()).forEach((i) => {
        const h2Row = document.createElement('h2');
        h2Row.style.setProperty('--i', cursorSpeed[i])
        h2Row.style.setProperty('--shadow-color', shColor)
        Array.from(Array(10).keys()).forEach((j) => {
            const span = document.createElement('span');
            span.innerText = 'CodeYourFuture'
            if (j % 2 !== 0) span.style.webkitTextStroke = `2px ${contourColor}`;
            h2Row.appendChild(span);
        })
        document.getElementById('animatedText').appendChild(h2Row);
        document.body.style.backgroundColor = bgColor;
    })
}
const images = [
    {url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: 'The View from The Shard, London, United Kingdom', author: 'Benjamin Davies'},
    {url: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: 'Tower Bridge, London, United Kingdom', author: 'Charles Postiaux'},
    {url: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', title: 'Big Ben, London, United Kingdom', author: 'Marcin Nowak'},
    {url: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: 'Big Ben', author: 'Lucas Davies'},
    {url: 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: 'London East Side from The Shard', author: 'Giammarco'},
]
let i = 0;
let timeInterval = 2000;
const imgContainer = document.getElementById('img-container');
const next = document.getElementById('next');
const prev = document.getElementById('previous');
const aNext = document.getElementById('auto-forward');
const aPrev = document.getElementById('auto-back');
const stop = document.getElementById('stop');
let slideshowState;
let darkMode = false;

const DIRECTIONS = {
    NEXT: 1, 
    PREV: -1
}
let currDirection = DIRECTIONS.NEXT;

const displayImage = () => {
    const imgEl = document.getElementById('img');
    imgEl.setAttribute('src', images[i].url);
    document.getElementById('description').innerText = `${images[i].title} by ${images[i].author}`
}

const changeImage = () => {
    if (currDirection === DIRECTIONS.NEXT) {
        i = i === images.length - 1 ? 0 : i + 1;
    } else {
        i = i === 0 ? images.length - 1 : i - 1;
    }
    displayImage()
}

next.addEventListener('click', () => {
    currDirection = DIRECTIONS.NEXT;
    changeImage()
})

prev.addEventListener('click', () => {
    currDirection = DIRECTIONS.PREV;
    changeImage()
});

aNext.addEventListener('click', () => {
    clearInterval(slideshowState);
    currDirection = DIRECTIONS.NEXT
    slideshowState = setInterval(changeImage, timeInterval);
})

aPrev.addEventListener('click', () => {
    clearInterval(slideshowState);
    currDirection = DIRECTIONS.PREV
    slideshowState = setInterval(changeImage, timeInterval);
})

stop.addEventListener('click', ()=> {
    clearInterval(slideshowState)
})

const timeSelect = document.getElementById('timeInterval');

for (let i = 1; i <= 60; i++) {
    const optionEl = document.createElement('option');
    if (i * 1000 === timeInterval ) {
        optionEl.setAttribute('selected', true);
    }
    optionEl.setAttribute('value', i);
    optionEl.innerText = i;
    timeSelect.appendChild(optionEl);
}

document.getElementById('timeInterval').addEventListener('change', (e) => {
    console.log(e.target.value)
    if (e.target.value) {
        timeInterval = e.target.value * 1000
    } else {
        timeInterval = 2000 
    }
    if (slideshowState) {
        clearInterval(slideshowState);
        slideshowState = setInterval(changeImage, timeInterval);
    }    
})

document.getElementById('darkmode').addEventListener('click', () => {
    document.getElementById('darkmodeIcon').classList.toggle('fa-moon')
    document.getElementById('darkmodeIcon').classList.toggle('fa-sun')
    document.getElementById('description').classList.toggle("text-light")
    darkMode = !darkMode;
    shColor = darkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.2)';;
    bgColor = darkMode ? '#424242' : '#eeeeee';
    contourColor = darkMode ? '#eeeeee' : '#424242';
    setBG();
});

setBG();
displayImage();
