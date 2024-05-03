document.addEventListener('DOMContentLoaded', function() {
    updateBasketIcon();
});

function updateBasketIcon() {
    var basketCount = localStorage.getItem('basketItems') ? 1 : 0;
    document.getElementById('basket-count').innerText = basketCount;
}

// Assuming you have a function to add item to basket when flower is clicked
// For demonstration purposes, let's call it addToBasket
document.querySelectorAll('.flower-item a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const flowerNumber = this.getAttribute('href').split('=')[1];
        addToBasket(flowerNumber);
    });
});

function addToBasket(flowerNumber) {
    // Add item to basket
    const basketItems = [];
    basketItems.push({ flowerNumber });
    localStorage.setItem('basketItems', JSON.stringify(basketItems));

    // Update basket icon
    updateBasketIcon();
}
