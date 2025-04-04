let data = [
    {
        img: 'assets/img/product1.png',
        name: 'Cactii',
        price: '19,99€',
    },
    {
        img: 'assets/img/product2.png',
        name: 'Cactus',
        price: '11,99€',
    },
    {
        img: 'assets/img/product3.png',
        name: 'Aloe Vera',
        price: '7,99€',
    },
    {
        img: 'assets/img/product4.png',
        name: 'Succulente',
        price: '5,99€',
    },
    {
        img: 'assets/img/product5.png',
        name: 'Succulente',
        price: '10,99€',
    },
    {
        img: 'assets/img/product6.png',
        name: 'Plante verte',
        price: '8,99€',
    }
]

const productWrapper = document.querySelector('.produits-wrapper')

function createProduct() {
    for (let i = 0; i < data.length; i++) {
        const productDiv = document.createElement('div')
        const productImg = document.createElement('img')
        const productText = document.createElement('div')
        const productName = document.createElement('p')
        const productPriceIcon = document.createElement('div')
        const productPrice = document.createElement('p')
        const productIcon = document.createElement('i')

        const ball = document.createElement('p')

        productWrapper.appendChild(productDiv)

        productDiv.appendChild(productImg)
        productDiv.appendChild(productText)
        productDiv.appendChild(productName)
        productDiv.appendChild(productPrice)
        productDiv.appendChild(productIcon)
        productDiv.appendChild(productPriceIcon)
        productDiv.appendChild(ball)

        productText.appendChild(productName)
        productText.appendChild(productPrice)
        productText.appendChild(productIcon)

        productPriceIcon.appendChild(productPrice)
        productPriceIcon.appendChild(productIcon)


        productPriceIcon.classList.add('price-icon')
        productDiv.classList.add('product')
        productText.classList.add('product-text')
        ball.classList.add('ball')

        productImg.src = data[i].img
        productName.textContent = data[i].name
        productPrice.textContent = data[i].price
        productIcon.classList = 'ri-shopping-bag-line'
    }
}

createProduct()

const navUl = document.querySelector('ul')
const nav = document.querySelector('nav')

const navLi = document.querySelector('nav li:last-child')
const navUlLiA = document.querySelectorAll('nav ul li a')
const burgerBtn = document.querySelector('.ri-align-justify')

burgerBtn.addEventListener('click', () => {
    navUl.classList.add('burger')
    nav.classList.add('burger')
    navUlLiA.forEach(item => {
        item.classList.toggle('burger')
    })
    navLi.classList.add('burger')
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        navUl.classList.remove('burger')
        nav.classList.remove('burger')
        navUlLiA.forEach(item => {
            item.classList.remove('burger')
        })
        navLi.classList.remove('burger')
        
    }
});

const body = document.querySelector('body')

const stageWrapper = document.querySelector('.stages-wrapper')
const questionsWrapper = document.querySelector('.questions-wrapper')

const stageFirstP = document.querySelectorAll('.stage p:first-child')
const stage = document.querySelectorAll('.stage')
const ball = document.querySelectorAll('.ball')
const questionBtn = document.querySelectorAll('.questions-wrapper button')

const input = document.querySelectorAll('input')
const formTextarea = document.querySelector('textarea')

const followWrapperPFirst = document.querySelector('.follow-wrapper p:first-child')
const social = document.querySelectorAll('.socials a')

const lightDarkBtn = document.querySelector('.ri-moon-line')


lightDarkBtn.addEventListener('click', function(){
    body.classList.toggle('dark')
    stageWrapper.classList.toggle('dark')
    questionsWrapper.classList.toggle('dark')
    followWrapperPFirst.classList.toggle('dark')
    formTextarea.classList.toggle('dark')

    ball.forEach(item => {
        item.classList.toggle('dark')
    })

    questionBtn.forEach(item => {
        item.classList.toggle('dark')
    })

    navUlLiA.forEach(item => {
        item.classList.toggle('dark')
    })

    input.forEach(item => {
        item.classList.toggle('dark')
    })

    social.forEach(item => {
        item.classList.toggle('dark')
    })

    stage.forEach(item => {
        item.classList.toggle('dark')
    })

    stageFirstP.forEach(item => {
        item.classList.toggle('dark')
    })

    lightDarkBtn.classList.toggle('ri-sun-line')
})

const submit = document.querySelector('.first-button')
const emailInput = document.querySelector('#email')
const objetInput = document.querySelector('#objet')
const messageInput = document.querySelector('#message')

const notif = document.querySelector('.notif')
const notifH3 = document.querySelector('.notif h3')
const notifP = document.querySelector('.notif p')

submit.addEventListener('click', function(e){
    e.preventDefault()
    if(emailInput.value === '' || objetInput.value === '' || messageInput.value === ''){
        notif.classList.add('show')
        setTimeout(() => {
            notif.classList.remove('show')
        }, 3000);
    } else {
        notifH3.textContent = 'SUCCES'
        notifP.textContent = 'Le formulaire a bien été rempli !'
        notif.classList.add('show')
        setTimeout(() => {
            notif.classList.remove('show')
            location.reload()
        }, 3000);
        
    }
})