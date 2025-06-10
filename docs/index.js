


(function actionBurgerMenu() {
    const burger = document.querySelector(".actions-header")
    const menu = document.querySelector(".header__menu.menu")
    const body = document.querySelector("body")

    burger.addEventListener("click", function() {
        if(this.classList.contains("active")) {
            this.classList.remove("active")
            this.classList.add("reverse")
            menu.classList.remove("active")
            body.classList.remove("active")
        } else {
            this.classList.remove("reverse")
            this.classList.add("active")
            menu.classList.add("active")
            body.classList.add("active")
        }
    })
    burger.addEventListener("animationend", function(e) {
        if (e.animationName === "burger-reverse-opacity-middle") {
            this.classList.remove("reverse")
        }
    })
})()


const animationsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const currElement = entry.target

        if(entry.isIntersecting) {
            currElement.classList.add("--animate")
        }
        else {
            currElement.classList.remove("--animate")
        }
    })
}, {
    root: null,
    rootMargin: "80px 0px 80px 0px",
    threshold: [0.6, 1]
})

const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const currElement = entry.target

        if(entry.isIntersecting) {
            if(!currElement.src && currElement.getAttribute('data-src'))
                currElement.setAttribute('src', currElement.getAttribute('data-src'))

            observer.unobserve(currElement) 
        }
    })
}, {
    root: null,
    rootMargin: "120px 0px 120px 0px",
    threshold: 0
})



document
    .querySelectorAll("section[class*='page__']")
    .forEach(element => {
        animationsObserver.observe(element)
    })

document
    .querySelectorAll("img[data-src]")
    .forEach(element => {
        lazyLoadObserver.observe(element)
    })

