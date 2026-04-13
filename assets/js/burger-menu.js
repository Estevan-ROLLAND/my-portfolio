window.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuToggle || !mobileMenu) {
        return;
    }

    const closeMenu = function () {
        mobileMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    const openMenu = function () {
        mobileMenu.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
    };

    menuToggle.addEventListener("click", function () {
        if (mobileMenu.classList.contains("is-open")) {
            closeMenu();
            return;
        }
        openMenu();
    });

    if (menuClose) {
        menuClose.addEventListener("click", closeMenu);
    }

    mobileMenu.addEventListener("click", function (event) {
        if (event.target === mobileMenu || event.target.closest("a") || event.target.closest("select")) {
            if (event.target.closest("select")) {
                return;
            }
            closeMenu();
        }
    });

    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});