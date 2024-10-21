import './selection.css';
import { mercedesCars } from '../../components/database-cars/databaseCars';


const selection = document.querySelector('.selectionContent');
if (!selection) {
    throw new Error('Selection not found');
}

let selectionContainer:HTMLDivElement;

export const renderSelection = (): void  => {
    createSelectionContainers();
    appendSelectionContainers();
    createSelectionHeaders();
    createCarDisplay();
/*     createSelectionBackground();
 */
}

const createSelectionContainers = (): void => {
    selectionContainer = document.createElement('div');
    selectionContainer.classList.add('selectionContainer');
}

const appendSelectionContainers = (): void => {
    selection?.appendChild(selectionContainer);
}

/* const createSelectionBackground = (): void => {
    const selectionBackground:HTMLImageElement = document.createElement('img');
    selectionBackground.classList.add('selectionBackground');
    selectionBackground.src = './background-2.jpg';
    selectionContainer.appendChild(selectionBackground);
} */

const createSelectionHeaders = (): void => {
    const selectionHeading1:HTMLHeadingElement = document.createElement('h2');
    selectionHeading1.classList.add('selectionHeading1');
    selectionHeading1.innerText = 'Our selected offers';
    selectionContainer.appendChild(selectionHeading1);
}

const createCarDisplay = (): void => {
    //Displaycontainer
    const carDisplayContainer: HTMLDivElement = document.createElement('div');
    carDisplayContainer.classList.add('carDisplayContainer');
    selectionContainer.appendChild(carDisplayContainer);

    mercedesCars.forEach((car) => {
        //Creates item container
        const carItemContainer: HTMLDivElement = document.createElement('div');
        carItemContainer.classList.add('carItemContainer');
        carDisplayContainer.appendChild(carItemContainer);
        
        //Creates car image
        const carItemImage: HTMLImageElement = document.createElement('img');
        carItemImage.classList.add('carItemImage')
        carItemImage.src = car.carImage;
        carItemContainer.appendChild(carItemImage)

        //Adds model name
        const carItemModelName:HTMLHeadingElement = document.createElement('h2');
        carItemModelName.classList.add('carItemModelName');
        carItemModelName.innerHTML = car.carModel;
        carItemContainer.appendChild(carItemModelName);

        //Adds car description
        const carItemDescription:HTMLParagraphElement = document.createElement('p');
        carItemDescription.classList.add('carItemDescription');
        carItemDescription.innerHTML = car.carDescription;
        carItemContainer.appendChild(carItemDescription);

        //Adds explor button
        const carExploreButton:HTMLButtonElement = document.createElement('button');
        carExploreButton.classList.add('carExploreButton');
        carExploreButton.innerHTML = 'Explore ' + car.carModel;
        carItemContainer.appendChild(carExploreButton);

    });
}