import './security.css'

const security = document.querySelector('.securityContent') as HTMLElement;
if (!security) {
    throw new Error('security content not found!');
}

export const renderSecurity = ():void => {
    createSecurityContainers();
    createSecurityHeading();
    createSecurityImage();
} 

const createSecurityContainers = (): void => {
    //Main security-container
    const securityContainer:HTMLDivElement = document.createElement('div');
    securityContainer.classList.add('securityContainer');
    security.appendChild(securityContainer);

 //Secondary container
    const securityContainerSecond:HTMLDivElement = document.createElement('div');
    securityContainerSecond.classList.add('securityContainerSecond');
    securityContainer.appendChild(securityContainerSecond); 

    //Third container
    const securityContainerThird:HTMLDivElement = document.createElement('div');
    securityContainerThird.classList.add('securityContainerThird');
    securityContainer.appendChild(securityContainerThird); 
}

const createSecurityHeading = (): void => {
    let securityContainerSecond = document.querySelector('.securityContainerSecond') as HTMLDivElement;
    const securityHeading:HTMLHeadingElement = document.createElement('h2');
    securityHeading.classList.add('securityHeading');
    securityHeading.innerText = 'We choose protection.';
    securityContainerSecond.appendChild(securityHeading);

}

const createSecurityImage = () => {
    let securityImageContainer = document.querySelector('.securityContainerSecond') as HTMLDivElement;

    const securityImage:HTMLImageElement = document.createElement('img');
    securityImage.classList.add('securityImage');
    securityImage.src = './family-background.jpg';
    securityImageContainer.appendChild(securityImage);
}