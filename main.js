//modal
var modal = document.getElementById("myModal");

var sub = document.getElementById("subscribe");

function loadModal() {
    modal.style.display = "flex";
}
loadModal()

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}
function processEmail() {
    var emailSub = document.getElementById('email-sub').value
    console.log(`Email: ${emailSub}`)
}
sub.addEventListener('click', processEmail);
sub.onclick = function() {
    modal.style.display = "none";
}

// hamburger-button
const menuBtn = document.querySelector('.menu-btn');
const mobile_menu = document.querySelector('.mobile-nav')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    mobile_menu.classList.toggle('is-active');
});

//contact-process
var submit = document.getElementsByTagName('button')[0]

submit.addEventListener('click', processContactData)

function processContactData() {
    var fullName = document.getElementById('fullName').value
    var email = document.getElementById('email').value
    var mobile = document.getElementById('mobile').value
    var message = document.getElementById('message').value

    console.log(
        'Name: ' + fullName + ',\n' +
        'Email: ' + email + ',\n' +
        'Mobile: ' + mobile + ',\n' +
        'Message: ' + message
    );
}

//quantity-updator
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const quantityInput = document.getElementById("quantity");

decrementButton.addEventListener("click", () => {
if (quantityInput.value > 1) {
    quantityInput.value--;
}
});

incrementButton.addEventListener("click", () => {
if (quantityInput.value < 10) {
    quantityInput.value++;
}
});

//buying-process
var buy = document.getElementById('buy-it')

buy.addEventListener('click', processUserData)

function processUserData() {
    var productName = document.getElementById('product-name').textContent
    var size = document.querySelector('input[name="radioSize"]:checked').value
    var color = document.querySelector('input[name="radioColor"]:checked').value
    var material = document.querySelector('input[name="radioMaterial"]:checked').value
    var quantity = document.getElementById('quantity').value

    alert(`Thanks for choosing us. Your order of ${productName} has been successfully placed!`)

    console.log(
        'Name: ' + productName + ',\n' +
        'Size: ' + size + ',\n' +
        'Color: ' + color + ',\n' +
        'Material: ' + material + ',\n' +
        'Quantity: ' + quantity
    );
}
