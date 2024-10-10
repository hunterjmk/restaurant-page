/*
This is the home page module file.
*/


function createHomePage() {
    const container = document.querySelector('#content');

    // Head Section

    const hDiv = document.createElement('div');
    const hOne = document.createElement('h1');
    const hPar = document.createElement('p');
    const hMedia = document.createElement('div');
    const hPar2 = document.createElement('p');
    const hImage = document.createElement('div');

    hDiv.classList.add('header-container');
    hMedia.classList.add('media');
    hImage.classList.add('img');

    hOne.textContent = 'Welcome to Mama Dilly\'s diner';
    hPar.textContent = 'Where Comfort Food Meets a Warm Hug';
    hPar2.textContent = `At Mama Dilly’s, we believe food is love, and our menu is packed with classics that hit the spot every time. Picture this: golden waffles piled high with fresh fruit, juicy burgers dripping with flavor, and the creamiest mac and cheese that’ll take you right back to Sunday dinners with family.`;


    hMedia.append(hPar2, hImage);
    hDiv.append(hOne, hPar, hMedia);

    // Content Section

    const cDiv = document.createElement('div');
    const hTwo = document.createElement('h2');
    const cPar = document.createElement('p');

    hTwo.textContent = ''




    container.append(hDiv);

}

export { createHomePage };