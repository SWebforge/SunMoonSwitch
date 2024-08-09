const toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
    document.body.style.background = toggle.checked ? '#000' : '#f5f5dc';
    toggle.nextElementSibling.innerHTML = toggle.checked ? '&#9790;' : '&#9728;';
});
