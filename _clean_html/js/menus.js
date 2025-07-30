console.log("hh");

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('hidden-nav');
    const closeButton = document.getElementById('close-button');
    const openButton = document.getElementById('open-button');
    let closed = true;

    toggleBtn.addEventListener('click', () => {
    if(closed){
        closeButton.style.opacity = '1';
        openButton.style.opacity = '0';
        closed = false;
    }
    else{
        closeButton.style.opacity = '0';
        openButton.style.opacity = '1';
        closed = true;
    }
    menu.classList.toggle('active');

    });

    function setupHover(buttonId, menuId) {
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);

        let isHovering = false;
        let timeout;

        function showMenu() {
        clearTimeout(timeout);
        menu.style.display = 'block';
        }

        function hideMenu() {
        timeout = setTimeout(() => {
            if (!isHovering) {
            menu.style.display = 'none';
            }
        }, 200);
        }

        button.addEventListener('mouseenter', () => {
        isHovering = true;
        showMenu();
        });

        button.addEventListener('mouseleave', () => {
        isHovering = false;
        hideMenu();
        });

        menu.addEventListener('mouseenter', () => {
        isHovering = true;
        showMenu();
        });

        menu.addEventListener('mouseleave', () => {
        isHovering = false;
        hideMenu();
        });
    }


    setupHover('journal-button', 'journal-menu');
    setupHover('author-button', 'author-menu');
    setupHover('policy-button', 'policy-menu');
    setupHover('review-button', 'review-menu');
    setupHover('search-button', 'search-menu');
})

