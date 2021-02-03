let headerFonts = [
    'Cabin Sketch',
    'Permanent Marker',
    'Cinzel Decorative',
    'Architects Daughter',
];

let bodyFonts = [
    'Raleway',
    'Montserrat',
    'Open Sans',
];

let hideNav = false;
function main() {

    document.onkeydown = e => {
        if (e.key == 'Escape') {
            hideNav = !hideNav;
            document.getElementById('nav').hidden = hideNav;
        }
    }
    let clicked = false;
    headerFonts.forEach(headerFont => {
        let div = document.getElementById('header-font-selection');
        let selection = document.createElement('a')
        div.appendChild(selection);
        selection.classList.add('selection')
        selection.style = `font-family: ${headerFont}`;
        selection.text = `${headerFont}`;
        selection.onclick = () => {
            document.querySelectorAll('h1').forEach(e => e.style.fontFamily = headerFont);
            document.querySelectorAll('h2').forEach(e => e.style.fontFamily = headerFont);
            document.querySelectorAll('h3').forEach(e => e.style.fontFamily = headerFont);
        }
        if (!clicked) {
            selection.click();
            clicked = true;
        }
    });

    clicked = false;
    bodyFonts.forEach(bodyFont => {
        let div = document.getElementById('body-font-selection');
        let selection = document.createElement('a')
        div.appendChild(selection);
        selection.classList.add('selection')
        selection.style = `font-family: ${bodyFont}`;
        selection.text = `${bodyFont}`;
        selection.onclick = () => {
            document.querySelectorAll('p').forEach(e => e.style.fontFamily = bodyFont);
            document.querySelectorAll('th').forEach(e => e.style.fontFamily = bodyFont);
            document.querySelectorAll('td').forEach(e => e.style.fontFamily = bodyFont);
        }
        if (!clicked) {
            selection.click();
            clicked = true;
        }
    });
};