const navBtn = document.querySelector('button[area-expanded');

function toggleNav({ target }) {
    const expanded = target.getAttribute('area-expanded') === 'true' || false;
    navBtn.setAttribute('area-expanded', !expanded);
}

navBtn.addEventListener('click', toggleNav);