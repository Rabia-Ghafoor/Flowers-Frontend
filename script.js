document.addEventListener('DOMContentLoaded', function() {
    // Code to dynamically load flower images would go here
    
    // Example code to update basket count
    const basketCount = document.getElementById('basket-count');
    let basketItems = 0;
  
    // Example event listener to increment basket count
    document.getElementById('add-to-basket').addEventListener('click', function() {
      basketItems++;
      basketCount.textContent = basketItems;
    });
  });
  