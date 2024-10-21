import './home.css';

const main = document.querySelector('.mainContent') as HTMLElement;
if (!main) {
    throw new Error('Main not found');
}

let homeContainer!:HTMLDivElement;
let headingTextContainer!:HTMLDivElement;
let heroImgContainer!:HTMLDivElement;

export const renderHome = (): void => {
    createHomeContainers();
    appendHomeContainers();
    renderHeroImg();
    renderHeadingText()
    renderHomeButton();
}

const createHomeContainers = (): void => {
    homeContainer = document.createElement('div');
    homeContainer.classList.add('homeContainer');

    headingTextContainer = document.createElement('div');
    headingTextContainer.classList.add('headingTextContainer');

    heroImgContainer = document.createElement('div');
    heroImgContainer.classList.add('heroImgContainer');
}

const appendHomeContainers = (): void => {
    main.appendChild(homeContainer);
    homeContainer.appendChild(heroImgContainer);
    homeContainer.appendChild(headingTextContainer);
}

const renderHeroImg = () => {
    const heroImg:HTMLImageElement = document.createElement('img');
    heroImg.classList.add('heroImg');
    heroImg.src = './mercedes-hero.png';
    heroImgContainer.appendChild(heroImg);   

 
}

const renderHeadingText = (): void => {
    const heading1: HTMLHeadingElement = document.createElement('h1');
    heading1.classList.add('heading1');
    heading1.innerHTML = 'Comfort<br>Security<br>Technology ';
    headingTextContainer.appendChild(heading1);

    const heading2: HTMLHeadingElement = document.createElement('h2');
    heading2.classList.add('heading2');
    heading2.innerHTML = 'Explore the new model-X.';
    headingTextContainer.appendChild(heading2);
}

const renderHomeButton = () => {
    const homeButton: HTMLButtonElement = document.createElement('button');
    homeButton.classList.add('homeButton');
    homeButton.innerText = 'Explore Model-X'
    headingTextContainer.appendChild(homeButton);
}