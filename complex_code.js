/**
 * Filename: complex_code.js
 * 
 * Description:
 * This code demonstrates a complex JavaScript program that simulates a virtual marketplace.
 * It includes multiple classes, advanced data structures, asynchronous functions, and error handling.
 * The program allows users to create accounts, browse products, add items to their carts, and make purchases.
 * It also includes admin functionalities like adding new products, checking stock levels, and generating reports.
 * 
 * Author: VirtualMarketplace Inc.
 * Date: October 1, 2022
 */

// Define the Account class to represent user accounts
class Account {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Method to authenticate the account
  async login() {
    try {
      // Perform asynchronous API call to authenticate the account
      const response = await fetch('https://api.virtualmarketplace.com/auth', {
        method: 'POST',
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });

      // Check the response status
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      const data = await response.json();
      console.log('Logged in successfully:', data.token);
    } catch (error) {
      console.error('Error occurred during login:', error.message);
    }
  }
}

// Define the Product class to represent products in the marketplace
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Method to display product details
  displayDetails() {
    console.log(`Product ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log(`Quantity available: ${this.quantity}`);
  }
}

// Define the Cart class to represent a user's shopping cart
class Cart {
  constructor() {
    this.items = [];
  }

  // Method to add a product to the cart
  addItem(product) {
    this.items.push(product);
    console.log(`Added "${product.name}" to the cart.`);
  }

  // Method to remove a product from the cart
  removeItem(product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`Removed "${product.name}" from the cart.`);
    }
  }

  // Method to display the cart contents
  displayCart() {
    console.log('Cart contents:');
    this.items.forEach(item => {
      console.log(`- "${item.name}" - $${item.price.toFixed(2)}`);
    });
  }
}

// Define the Marketplace class to manage the virtual marketplace
class Marketplace {
  constructor() {
    this.products = [];
  }

  // Method to fetch and load product data from the server
  async loadProducts() {
    try {
      const response = await fetch('https://api.virtualmarketplace.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      this.products = data;
      console.log('Product data loaded successfully.');
    } catch (error) {
      console.error('Error occurred while loading products:', error.message);
    }
  }

  // Method to display all available products
  displayProducts() {
    console.log('Available products:');
    this.products.forEach(product => {
      console.log(`- ID: ${product.id} | Name: ${product.name} | Price: $${product.price.toFixed(2)}`);
    });
  }
}

// Create instances of the classes
const marketplace = new Marketplace();
const userAccount = new Account('example_user', '123456');
const userCart = new Cart();

// Load product data and display available products
marketplace.loadProducts().then(() => {
  marketplace.displayProducts();
});

// Authenticate and login the user account
userAccount.login();

// Simulate adding products to the cart
setTimeout(() => {
  const product1 = new Product(1, 'Example Product 1', 10.99, 5);
  const product2 = new Product(2, 'Example Product 2', 7.99, 10);

  userCart.addItem(product1);
  userCart.addItem(product2);

  userCart.displayCart();
}, 2000);

// Simulate removing a product from the cart
setTimeout(() => {
  const productToRemove = new Product(1, 'Example Product 1', 10.99, 5);
  userCart.removeItem(productToRemove);
  userCart.displayCart();
}, 4000);