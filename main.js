const bookstore = {
    books: ['Ulysses','The Great Gatsby'],
    removeBook(title){
        let newList = this.books.filter((book) => book != title);
        this.books = newList;
        this.displayBookstore();
    },
    displayBookstore(){
        const renderTarget = document.getElementById('bookstore');
        const bookList = this.books.map((book) => `<p>${book}</p>`);
        renderTarget.innerHTML = bookList.join('');

        shoppingCart.displayCart(this.removeBook.bind(this));
    },
};

const shoppingCart = {
    itemsInCart: ['The Great Gatsby'],
    handleClick(removeBook) {
        removeBook(this.itemsInCart);
        let newList = this.itemsInCart.filter((book) => book != 'The Great Gatsby');
        this.itemsInCart = newList;
    },
    displayCart(clickHandler){
        const renderTarget = document.getElementById('cart');
        const itemsInCart = this.itemsInCart.map((item) => `<p>${item}</p>`);
        const checkoutButton = "<button id='checkout'> Check Out </button>";
        renderTarget.innerHTML = itemsInCart.join('') + checkoutButton;
        document.getElementById('checkout').addEventListener('click', () => this.handleClick(clickHandler));
    },
};

bookstore.displayBookstore();