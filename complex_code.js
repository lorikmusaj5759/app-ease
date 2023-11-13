/* complex_code.js */

// This is a complex code example that demonstrates an advanced inventory management system for an online store.
// The code manages products, categories, orders, and customers, and includes various features such as search, filtering, sorting, and statistics analysis.

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Order {
  constructor(id, customerId) {
    this.id = id;
    this.customerId = customerId;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}

class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class Inventory {
  constructor() {
    this.products = [];
    this.categories = [];
    this.orders = [];
    this.customers = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  addCategory(category) {
    this.categories.push(category);
  }

  removeCategory(categoryId) {
    this.categories = this.categories.filter((category) => category.id !== categoryId);
  }

  createOrder(order) {
    this.orders.push(order);
  }

  removeOrder(orderId) {
    this.orders = this.orders.filter((order) => order.id !== orderId);
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customerId) {
    this.customers = this.customers.filter((customer) => customer.id !== customerId);
  }

  searchProducts(keyword) {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  filterProductsByCategory(categoryId) {
    return this.products.filter((product) => product.category.id === categoryId);
  }

  sortProductsByPrice(ascending = true) {
    return this.products.sort((a, b) => {
      if (ascending) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  calculateTotalRevenue() {
    return this.orders.reduce((total, order) => {
      return total + order.products.reduce((subTotal, product) => {
        return subTotal + product.price;
      }, 0);
    }, 0);
  }
}

// Usage example:

const inventory = new Inventory();

const category1 = new Category(1, 'Electronics');
const category2 = new Category(2, 'Clothing');

const product1 = new Product(1, 'Laptop', 999.99, category1);
const product2 = new Product(2, 'T-Shirt', 19.99, category2);
const product3 = new Product(3, 'Smartphone', 799.99, category1);

inventory.addCategory(category1);
inventory.addCategory(category2);
inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

const customer1 = new Customer(1, 'John Doe', 'john.doe@example.com');
const customer2 = new Customer(2, 'Jane Smith', 'jane.smith@example.com');

inventory.addCustomer(customer1);
inventory.addCustomer(customer2);

const order1 = new Order(1, customer1.id);
order1.addProduct(product1);
order1.addProduct(product2);
inventory.createOrder(order1);

const order2 = new Order(2, customer2.id);
order2.addProduct(product3);
order2.addProduct(product2);
inventory.createOrder(order2);

console.log(inventory.searchProducts('t-shirt'));
console.log(inventory.filterProductsByCategory(1));
console.log(inventory.sortProductsByPrice());
console.log(inventory.calculateTotalRevenue());