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
                icon.style.transform = 'rotate(180deg)';
            } else {
                menu.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            }

        });
    }

    setupButton('navJournalButton', 'navJournalMenu', 'navJournalIcon');
    setupButton('navAuthorButton', 'navAuthorMenu', 'navAuthorIcon');
    setupButton('navPolicyButton', 'navPolicyMenu', 'navPolicyIcon');
    setupButton('navReviewButton', 'navReviewMenu', 'navReviewIcon');

    setupButton('ManualForAuthorsButton', 'ManualForAuthorsNav', 'ManualForAuthorsSvg');
    setupButton('RulesForStructuresButton', 'RulesForStructuresNav', 'RulesForStructuresSvg');
    setupButton('RequirementsButton', 'RequirementsNav', 'RequirementsSvg');
    setupButton('RulesForAuthorsButton', 'RulesForAuthorsNav', 'RulesForAuthorsSvg');




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

    // const addSvg = document.querySelectorAll('.AddSvgWhenHover');
    // const grandChild = document.querySelectorAll('.row .d-flex');

    // grandChild.innerHTML = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                 <path d="M6.8297 5.29001L2.5897 1.05001C2.49674 0.956281 2.38613 0.881887 2.26428 0.831118C2.14242 0.780349 2.01171 0.754211 1.8797 0.754211C1.74769 0.754211 1.61698 0.780349 1.49512 0.831118C1.37326 0.881887 1.26266 0.956281 1.1697 1.05001C0.983448 1.23737 0.878906 1.49082 0.878906 1.75501C0.878906 2.0192 0.983448 2.27265 1.1697 2.46001L4.7097 6.00001L1.1697 9.54001C0.983448 9.72737 0.878906 9.98082 0.878906 10.245C0.878906 10.5092 0.983448 10.7626 1.1697 10.95C1.26314 11.0427 1.37395 11.116 1.49579 11.1658C1.61763 11.2155 1.74809 11.2408 1.8797 11.24C2.01131 11.2408 2.14177 11.2155 2.26361 11.1658C2.38544 11.116 2.49626 11.0427 2.5897 10.95L6.8297 6.71001C6.92343 6.61705 6.99782 6.50645 7.04859 6.38459C7.09936 6.26273 7.1255 6.13202 7.1255 6.00001C7.1255 5.868 7.09936 5.73729 7.04859 5.61543C6.99782 5.49357 6.92343 5.38297 6.8297 5.29001Z" fill="#008283"/>
    //                             </svg>`;



})

