/*3 alerts*/

function alertCart() {
    // Used on Product Detail Page
    alert("Success! The book has been added to your cart.");
}

function alertLogin() {
    // Used on Login Page
    alert("Please enter a valid email address.");
}

function alertRemove() {
    // Used on Seller Portal
    // confirm() returns true if user clicks OK, false if Cancel
    return confirm("Are you sure you want to remove this listing?");
}


/*3 logs*/

function logSearch() {
    // Used on Search Bar (All pages)
    console.log("Search initiated by user.");
}

function logFilter() {
    // Used on Collection Page
    console.log("Filter options clicked.");
}

function logCartPage() {
    // Used on Shopping Cart Page load
    console.log("Cart Page Loaded. Calculating total...");
}