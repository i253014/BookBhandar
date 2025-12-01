document.addEventListener('DOMContentLoaded', () => {

    /*3 console logs*/
    /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference*/

    //Log when the Search icon is clicked
    let searchIcon = document.querySelector('.search-bar img');
    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            console.log("Search icon clicked. Query processing...");
        });
    }

    //Log when a Filter is clicked (Collection Page)
    let filterBar = document.querySelector('.filter-bar');
    if (filterBar) {
        filterBar.addEventListener('click', () => {
            console.log("User interacted with the filter bar.");
        });
    }

    //Log when the Cart page is opened
    /*I used total-row here because it only exists in shopping cart page, hence once it is opened it logs*/
    let shoppingCart = document.querySelector('.total-row');
    if (shoppingCart) {
        console.log("Going to shopping cart, calculating total...");
    }

    /*3 alerts*/

    //Alert when "Add to Cart" is clicked (Product Detail Page)
    const addToCartBtn = document.querySelector('.detail-info .mainbtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stops the link from jumping
            alert("Item added to cart!");
        });
    }

    //Alert when Login is clicked (Login Page)
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            alert("Please enter a valid email and password.");
        });
    }

    //Alert when "Remove" is clicked (Seller Portal)
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Are you sure you want to remove this listing?");
        });
    });

});