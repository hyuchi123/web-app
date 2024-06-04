# Introduction

A minimalist picture book website designed to provide users a simple and convenient experience.

<br>

The website architecture includes:

- Homepage with advertisements
- Product category lists
- Product description pages
- Registration and login functionality
- Shopping cart
- Checkout system
- Historical order records
- Admin system for managing products

![image](https://github.com/hyuchi123/web-app/blob/main/home.png)
![image](https://github.com/hyuchi123/web-app/blob/main/bookList.png)
![image](https://github.com/hyuchi123/web-app/blob/main/signup.png)
![image](https://github.com/hyuchi123/web-app/blob/main/cartToCheckout.png)
![image](https://github.com/hyuchi123/web-app/blob/main/orderList.png)
![image](https://github.com/hyuchi123/web-app/blob/main/admin.png)
![image](https://github.com/hyuchi123/web-app/blob/main/allProduct.png)
![image](https://github.com/hyuchi123/web-app/blob/main/upload.png)

<br>

The backend database consists of user data, product data, and order data to manage user information, products, shopping carts, and orders.

<br>

The website is built with:

- **Frontend**: `React.js`
- **Backend**: `Node.js`
    - **Auth**: `JWT`
    - **Database**: `MongoDB`

<br>

# Installation

1. Install in the `web-app` directory

```sh
$ npm install
```

2. Install in the `backend` directory

```sh
$ npm install
```

3. Install in the `admin` directory

```sh
$ npm install
```

4. Add book data in your MongoDB
   
- **Columns required**: name, image, author, description, age, topic, language, new_price, old_price
- You can find example in `src/Components/Assets/books.csv`.

5. Add `.env` file in the `backend` directory
```
CONNECTION_STRING="<your_MongoDB_connection_string>"
``` 

<br>

# Run
1. Run backend in the `backend` directory
```sh
$ node index.js
```

2. Run frontend in the `web-app` directory
```sh
$ npm start
```

3. Run admin system in the `admin` directory
```sh
$ npm run dev
```

Note: You can directly use admin system at localhost:5173. You can also create an admin account using Thunder Client and set the role to "**admin**" (the default is "user"). 

<br>

# Database Schema & API

DataBase
![image](https://github.com/hyuchi123/web-app/blob/main/Schema.png)

<br>

API
![image](https://github.com/hyuchi123/web-app/blob/main/API.png)

<br>

# Todo

- Modify the cart schema
- Integrate an actual payment system
- Check the inventory of picture books
- Record user login history on the website
- Write privacy policy and terms of service

<br><br>


