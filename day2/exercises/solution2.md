

### Exercise 1: Fetch and Display Products

1. **Simple Exercise**:
   - Fetch the list of products and log the titles of the first 5 products to the console.

```javascript
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        data.products.slice(0, 5).forEach(product => {
            console.log(product.title);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

2. **A Bit More Challenging**:
   - Fetch a specific product by its ID and display its title and price in the console.

```javascript
fetch('https://dummyjson.com/products/1')
    .then(response => response.json())
    .then(product => {
        console.log('Title:', product.title);
        console.log('Price:', product.price);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

3. **Challenging / Bonus**:
   - Create a function that takes a search query as an argument, fetches products matching the query, and displays their titles and prices in the console.

```javascript
function searchProducts(query) {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            data.products.forEach(product => {
                console.log('Title:', product.title);
                console.log('Price:', product.price);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

searchProducts('phone');
```

### Exercise 2: Fetch and Display Users

1. **Simple Exercise**:
   - Fetch the list of users and log the names of the first 5 users to the console.

```javascript
fetch('https://dummyjson.com/users')
    .then(response => response.json())
    .then(data => {
        data.users.slice(0, 5).forEach(user => {
            console.log(user.firstName + ' ' + user.lastName);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

2. **A Bit More Challenging**:
   - Fetch a specific user by their ID and display their full name and email in the console.

```javascript
fetch('https://dummyjson.com/users/1')
    .then(response => response.json())
    .then(user => {
        console.log('Full Name:', user.firstName + ' ' + user.lastName);
        console.log('Email:', user.email);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

3. **Challenging / Bonus**:
   - Create a function that takes a search query as an argument, fetches users matching the query, and displays their full names and emails in the console.

```javascript
function searchUsers(query) {
    fetch(`https://dummyjson.com/users/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            data.users.forEach(user => {
                console.log('Full Name:', user.firstName + ' ' + user.lastName);
                console.log('Email:', user.email);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

searchUsers('John');
```


