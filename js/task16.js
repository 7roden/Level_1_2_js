
document.querySelector('.push').addEventListener('click', () => {
    document.querySelector('.task16').style.overflow = 'hidden';
    document.getElementById('blockHidden').style.visibility = 'initial';
});

document.querySelector('#blockHidden').addEventListener('click', () => {
    document.getElementById('blockHidden').style.visibility = 'hidden';
    document.querySelector('.task16').style.overflow = 'auto';
});