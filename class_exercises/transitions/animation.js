const red = document.querySelector('.red');
red.addEventListener('click', () => {
    if (red.style.backgroundColor == 'red')
        red.style.backgroundColor = 'blue';
    else
        red.style.backgroundColor = 'red';
});
