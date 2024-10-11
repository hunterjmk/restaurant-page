function createMenuPage(container) {
    const menuDiv = document.createElement('div');
    const hElement = document.createElement('h1');
    const pElement = document.createElement('p');
    const pElement2 = document.createElement('p');
    const pElement3 = document.createElement('p');
    const img = document.createElement('div');
    const img2 = document.createElement('div');
    const img3 = document.createElement('div');
    
    menuDiv.classList.add('header-container');
    pElement.classList.add('menu-p');
    pElement2.classList.add('menu-p');
    pElement3.classList.add('menu-p');
    img.classList.add('burrito', 'menu-img');
    img2.classList.add('tacos', 'menu-img');
    img3.classList.add('yoghurt', 'menu-img');

    hElement.textContent = 'Our Menu';
    pElement.textContent = 'A hearty breakfast burrito';
    pElement2.textContent = 'Three delicious tacos';
    pElement3.textContent = 'A sweet yoghurt parfait';

    menuDiv.append(hElement, pElement, img, pElement2, img2, pElement3, img3);
    container.append(menuDiv);
}

export { createMenuPage };