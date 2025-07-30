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

    function setupButton(buttonId, menuId, navIcon) {
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);
        const icon = document.getElementById(navIcon);
        
        button.addEventListener('click', () => {
            const currentDisplay = getComputedStyle(menu).display;

            if (currentDisplay === 'none') {
                menu.style.display = 'block';
                icon.style.transform = 'rotate(0deg)';
            } else {
                menu.style.display = 'none';
                icon.style.transform = 'rotate(-90deg)';
            }

        });
    }

    setupButton('navJournalButton', 'navJournalMenu', 'navJournalIcon');
    setupButton('navAuthorButton', 'navAuthorMenu', 'navAuthorIcon');
    setupButton('navPolicyButton', 'navPolicyMenu', 'navPolicyIcon');
    setupButton('navReviewButton', 'navReviewMenu', 'navReviewIcon');


    function setupHoverLang() {
        const button = document.getElementById('langChangeButton');
        const menu = document.getElementById('hidden-lang');

        let isHovering = false;
        let timeout;

        function showMenu() {
            clearTimeout(timeout);
            menu.style.display = 'block';
            button.style.borderBottom = 'none';
            button.style.borderRadius = '5px 5px 0 0';
        }

        function hideMenu() {
            timeout = setTimeout(() => {
                if (!isHovering) {
                menu.style.display = 'none';
                button.style.borderBottom = '1.5px solid #D9D9D9';
                button.style.borderRadius = '5px';
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

    setupHoverLang();

})

