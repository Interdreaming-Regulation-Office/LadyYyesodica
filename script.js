document.addEventListener('DOMContentLoaded', () => {
	// Run once on load to replace existing Ys in the document
	replaceY();
});


function replaceY() {
    console.log('Replacing Ys with Lady Yyesodica');
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, div');
    elements.forEach(el => {
        el.innerHTML = el.innerHTML.replace(/[Yy]/g, '<span class="lady-y"></span>');
    })
}

const bigY = document.getElementById('big-y');

function revealMain(){
    console.log('Revealing main content');
    const main = document.getElementsByTagName('main')[0];
    main.style.display = 'block';
    bigY.style.display = 'none';
}


bigY.onclick = revealMain;
