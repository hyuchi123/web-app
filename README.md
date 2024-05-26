# Introduction
<hr>
A minimalist picture book website to provide users with a simple and convenient experience.

The website architecture includes:

- homepage with advertisements
- product category lists
- product description pages
- registration and login functionality
- shopping cart, and checkout design

The backend database consists of **user data**, **product data**, and **order data** to manage user information, products, shopping carts, and orders.

- **Frontend**: `React`
- **Backend**: `Node.js`
    - **Auth**: `JWT`
    - **Database**: `MongoDB`

**記得放網站截圖！**

<br>

# Installation
<hr>
1. Install in the web-app directory
```sh
$ npm install
```

2. Install in the backend directory
```sh
$ npm install
```

3. Add book data in your MongoDB
**(需要加上範例的資料檔案嗎？)**
```
columns required: name, image, author, description, age, topic, language, new_price, old_price
```

4. Add `.env` file in the backend directory
```
CONNECTION_STRING="<your_MongoDB_connection_string>"
``` 

<br>

# Run
<hr>
1. Run backend in the backend directory
```sh
$ node index.js
```

2. Run frontend in the web-app directory
```sh
$ npm start
```

<br>

# Database Schema
<hr>
**記得放截圖！**

<br>

# Todo
<hr>
- Integrate an actual payment system
- Check the inventory of picture books
- Write privacy policy and terms of service
- Record user login history on the website
- Display historical order records on the member page
- Create a comprehensive data management console, including visual interface features for listing and delisting products, managing advertisement information, etc.

<br>









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
