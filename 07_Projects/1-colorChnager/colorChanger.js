const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.id === 'Blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Orange'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Violet'){
            body.style.backgroundColor = e.target.id;
        }
    });
});