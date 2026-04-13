const langSelectors = document.querySelectorAll(".lang-selector");

if (langSelectors.length > 0) {
    const currentUrl = window.location.href;
    const currentLang = currentUrl.includes("/en/") ? "en" : "fr";

    langSelectors.forEach((selector) => {
        selector.value = currentLang;
        selector.addEventListener("change", function () {
            const selectedLang = this.value;
            const newUrl = window.location.href.replace(/\/(en|fr)\//, `/${selectedLang}/`);
            window.location.href = newUrl;
        });
    });
}