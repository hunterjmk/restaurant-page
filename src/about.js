function createAboutPage(container) {
    const div = document.createElement('div');
    const aboutHeading = document.createElement('h1');
    const aboutHeading2 = document.createElement('h2');
    const par = document.createElement('p');
    const par2 = document.createElement('p');
    const par3 = document.createElement('p');
    const par4 = document.createElement('p');

    div.classList.add('header-container');
    const arr = [par, par2, par3, par4];
    arr.forEach((p) => {
        p.classList.add('about-par');
    });

    aboutHeading.textContent = 'Our Story';
    par.textContent = `What started as a small-town dream has grown into a community staple. Mama Dilly, a lover of all things homemade, wanted a place where everyone could gather for good eats and great company.`;
    par2.textContent = `Decades later, we’re still serving up the same love and care in every dish — because at Mama Dilly’s, everyone’s family.`;

    aboutHeading2.textContent = `Stop By Anytime!`;
    par3.textContent = `Come for breakfast, brunch, lunch, or dinner — or even just to treat yourself to a slice of Mama’s famous pie.`;
    par4.textContent = `Our doors (and hearts) are open, and we can’t wait to see you.`;

    div.append(aboutHeading, par, par2, aboutHeading2, par3, par4);

    container.append(div);
}

export { createAboutPage };