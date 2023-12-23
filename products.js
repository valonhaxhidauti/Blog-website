let allData;
//fetching data from JSON
fetch('products.json').then(res => res.text()).then((body) => {
    allData = JSON.parse(body);
    generateHTML();
});
//function to generate HTML from JSON data
function generateHTML() {
    let filterData;
    if(selectedColor)
        filterData = allData.filter(e => e.color === selectedColor);
    else
        filterData = allData;
        let output = "";
        let watchCount = 1;
        filterData.forEach(item =>{

            if (watchCount === 5 )
            watchCount = 1;
            output += `
            <div class="spec-watch">
            <input style="width:17px; height:17px; position:absolute; top:0; right:20px;"
            ${cart.has(item.id + '') ? 'checked' : ''} type="checkbox" onclick="addToCard('${item.id}', '${item.newPrice || item.originalPrice}')" />
            ${item.percentageOff ? `<span class="percentages" percent="-${item.percentageOff}%"></span>` : ''}
            <a href="/product.html" class="watch-link1 watch-link">
                <img src="${item.images[0]}" alt="glass" class="watch-glass${watchCount++} watch-glass">
                <div class="material-symbols">
                    <span class="material-symbols-outlined symb1">shopping_cart</span>
                    <span class="material-symbols-outlined symb2">visibility</span>
                    <span class="material-symbols-outlined symb3">favorite</span>
                </div>
            </a>
            <p>${item.name}</p>
            <div style="display:flex">
                <p class="price-tag">${item.newPrice ? `$${item.newPrice}.00`: ''}</p>
                <p class="${item.newPrice ? 'dashed' : 'bold'}">$${item.originalPrice}.00</p>
            </div>
            <div class="rate">
                <input type="radio" id="star5${item.id}" name="${item.id}" value="5"/>
                <label for="star5${item.id}" title="text"></label>
                <input type="radio" id="star4${item.id}" name="${item.id}" value="4"/>
                <label for="star4${item.id}" title="text"></label>
                <input type="radio" id="star3${item.id}" name="${item.id}" value="3"/>
                <label for="star3${item.id}" title="text"></label>
                <input type="radio" id="star2${item.id}" name="${item.id}" value="2"/>
                <label for="star2${item.id}" title="text"></label>
                <input type="radio" id="star1${item.id}" name="${item.id}" value="1"/>
                <label for="star1${item.id}" title="text"></label>
            </div>
            </div>
            `;
        })
        document.querySelector(".set-of-watches").innerHTML = output;
}

let selectedColor;

let cart = new Map();
//radio buttons
//NOTE - BONUS: filter clears on double click of radio button
function chbChange(el, color) {
    if(selectedColor === color) {
        el.checked = false;
        selectedColor = null;
    } else
        selectedColor = color;
    generateHTML();
}
//checkbox
function addToCard(id, price) {
    let mapItem = cart.get(id);
    if(mapItem)
        cart.delete(id)
    else
        cart.set(id, price);
    calcPrice()
}
//price calculator
function calcPrice() {
    let totalPrice = 0;
    cart.forEach((v, k) => totalPrice = totalPrice + +v);
    totalPrice = 'Total Price: $' + totalPrice;
    alert(totalPrice)
}
