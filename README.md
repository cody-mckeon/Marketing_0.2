Add Routing

- npm i react-router-dom
- create route for home screen
- create router for product screen

Create Node.JS Server

- run npm init in root folder
- Update package.json set type: module
- Add .js to imports
- npm install express
- create server.js
- add start command as node backend/server.js
- require express
- create route for / return backend is ready.
- move product.js from frontend to backend
- create route for /api/products
- return products
- run npm start

Fetch Products from Backend

- set proxy in package.json
- npm install axios
- use state hook
- use effect hook
- user reducer hook

Manage State By Reducer Hook

- Define reducer
- update fetch data
- get state from useReducer

11. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
13. Create SignIn Screen
    1. create sign in form
    2. add email and password
    3. add signin screen
14. Connect to MongoDB Database
    1. create atlas mongodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
15. Seed Sample Products
    1. create Post model
    2. create seed route
    3. use route in server.js
    4. seed sample post
16. Seed Sample Users
    1. create user model
    2. seed sample users
    3. create user routes
17. Complete SignIn Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
18. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
19. Create Admin Menu

    1. define protected route component
    2. define admin route component
    3. add menu for admin in header

20. Create Profile Screen

    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info

21. Publish to Heroku

    1. create and config node project
    2. serve build folder in frontend folder
    3. create heroku account
    4. connect it to github
    5. create mongodb atlas database
    6. set database connection in heroku env variables
    7. Commit and push
       Probably not going to use Heroku

22. Create Dashboard Screen

    1. create dashboard ui
    2. implement backend api
    3. connect ui to backend
       Going to have to brainstorm this for the blog

23. Manage Products
    1. Create products list ui
    2. implement backend api
    3. fetch data
