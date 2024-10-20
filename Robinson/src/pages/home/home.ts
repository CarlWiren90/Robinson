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