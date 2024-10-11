/*
This is the home page module file.
*/


function createHomePage(container) {
    // Head Section

    const hDiv = document.createElement('div');
    const hOne = document.createElement('h1');
    const hPar = document.createElement('p');
    const hMedia = document.createElement('div');
    const hPar2 = document.createElement('p');
    const hImage = document.createElement('div');

    hDiv.classList.add('header-container');
    hPar.classList.add('tagline');
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
    const hTwo2 = document.createElement('h2');
    const cPar = document.createElement('p');
    const cPar2 = document.createElement('p');
    const cPar3 = document.createElement('p');
    const cPar4 = document.createElement('p');

    cDiv.classList.add('header-container', 'content');

    hTwo.textContent = 'Good Food, Good Friends, Good Times';
    cPar.textContent = `It’s not just about the food here — it’s about the experience. With retro booths, warm smiles, and that familiar hum of conversation, Mama Dilly’s is your cozy corner to escape the rush and enjoy simple pleasures.`;
    cPar2.textContent = `Whether you're grabbing a quick coffee or settling in for a slow meal, we’re here to make sure every visit feels like you’re part of the family.`;

    hTwo2.textContent = 'Stop By Anytime';
    cPar3.textContent = `Come for breakfast, brunch, lunch, or dinner — or even just to treat yourself to a slice of Mama’s famous pie.`;
    cPar4.textContent = `Our doors (and hearts) are open, and we can’t wait to see you.`;

    cDiv.append(hTwo, cPar, cPar2, hTwo2, cPar3, cPar4);

    container.append(hDiv, cDiv);
}

export { createHomePage };