let cards = document.getElementsByClassName("card-link")
let tabCardContent = [cards[0].firstElementChild, cards[1].firstElementChild]

let discoverButton = cards[0].firstElementChild.lastChild
let learnMoreButton = cards[1].firstElementChild.lastChild

// cards[0].firstElementChild.addEventListener("mouseenter", function() {
//     cards[0].firstElementChild.children[3] = "15vh"
// })

tabCardContent[0].lastElementChild.style.width = "20%"
tabCardContent[1].lastElementChild.style.width = "20%"

console.log(tabCardContent)

tabCardContent[0].addEventListener("mouseenter", function () {
    tabCardContent[0].lastElementChild.style.width = "30%" //modify the margin of the h3 in .cardbutton
})

tabCardContent[1].addEventListener("mouseenter", function () {
    tabCardContent[1].lastElementChild.style.width = "30%" //modify the margin of the h3 in .cardbutton
})

// tabCardContent[1].addEventListener("mouseover", function () {
//     tabCardContent[1].style.width = "150vh"
//     tabCardContent[0].style.width = "49vh"
// })


tabCardContent[0].addEventListener("mouseleave", function () {
    tabCardContent[0].lastElementChild.style.width = "20%" //modify the margin of the h3 in .cardbutton
})

tabCardContent[1].addEventListener("mouseleave", function () {
    tabCardContent[1].lastElementChild.style.width = "20%" //modify the margin of the h3 in .cardbutton
})
