const langSelector = document.getElementById("lang-selector");

const currentUrl = window.location.href;
langSelector.value = currentUrl.includes("/en/") ? "en" : "fr";
console.log("Language selector found:", langSelector.value);
langSelector.addEventListener("change", function() {
    const selectedLang = this.value;
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace(/\/(en|fr)\//, `/${selectedLang}/`);
    window.location.href = newUrl;
    console.log(`Language changed to: ${selectedLang}`);
});