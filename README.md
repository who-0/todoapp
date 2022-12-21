# <h1> To Do List App </h1>

![Logo](https://user-images.githubusercontent.com/56252622/205436815-8c1d3a96-5019-4664-88a3-183c89519f16.jpg)

## Demo

https://todo-8b2y.onrender.com/

## Tech Stack

**Client:** HTML, CSS, JS, EJS

**Server:** Node, Express, MongoDB

<h2>Using Packages</h2>
<ul>
<li>express</li>
<li>ejs</li>
<li>body-parser</li>
<li>mongoose</li>
<li>morgan</li>
<li>helmet</li>
<li>passport</li>
</ul>

## Run Locally

Clone the project

```bash
  git clone https://github.com/who-0/todoapp.git
```

Go to the project directory

```bash
  cd todoapp
```

Install dependencies

```bash
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`

`MONGO_URL ="mongodb+srv://nasa-api:kmd123@nasacluster.uvu3kll.mongodb.net/todo?retryWrites=true&w=majority"`

`TOKEN_API = 'tokentodo'`

`R_TOKEN_API = 'refreshtokentodo'`

Start the server

```bash
  npm start
```

<h2><i>File Structure</i></h2>
<h3>Front_End</h3>
<pre>
    -public
       |__css
       |   |__styles.css
       |
       |__img
           |__user.png
           |__error.png
           |__login.svg
           |__signup.svg

    -views
      |__components
      |   |__header.ejs
      |   |__footer.ejs
      |
      |__pages
          |__todo.ejs
          |__login.ejs
          |__signup.ejs
          |__profile.ejs
          |__error.ejs

</pre>
</hr>
<h3>Back_End</h3>
<pre>
-server
    |__server.js
    |__app.js
    |__.env
    |
    |__services
    |   |__mongodb.js
    |
    |__middlewares
    |   |__router.middleware.js
    |   |__verify.middleware.js
    |
    |__routes
    |   |__auth
    |   |   |__login.router.js
    |   |   |__signup.router.js
    |   |   |__refresh.router.js
    |   |   |__error.router.js
    |   |
    |   |__todo
    |   |   |__todo.router.js
    |   |   |__profile.router.js
    |   |   |__logout.router.js
    |   |   |__delete.router.js
    |   |
    |   |__api.js
    |
    |__controllers
    |    |__auth
    |    |   |__login.routers.js
    |    |   |__signup.routers.js
    |    |   |__refresh.routers.js
    |    |
    |    |__todo
    |        |__todo.controller.js
    |        |__profile.controller.js
    |        |__logout.controller.js
    |        |__delete.controller.js
    |
    |__models
        |__auth
        |   |__login.model.js
        |   |__signup.model.js
        |
        |__todo
            |__todo.model.js
            |__todo.mongo.js
            |__users.model.js
            |__user.mongo.js
</pre>

## ToDo App Architecture

![ToDoApp](https://user-images.githubusercontent.com/56252622/205043323-d564b197-a7f0-43c5-9deb-e6cfb35ac7a4.png)

## ToDo App UI Design

### ToDo App Page

![ToDoApp-1](https://user-images.githubusercontent.com/56252622/208886659-4424ca6e-f9be-41e6-936f-18e0c14f5a67.png)

### ToDo App Signup Page

![ToDoApp-2](https://user-images.githubusercontent.com/56252622/208658813-7467e65b-0a9d-421b-88e3-85c0f4402c42.png)

### ToDo App Login Page

![ToDoApp-3](https://user-images.githubusercontent.com/56252622/208658684-2811c84b-a4e4-45a0-90e7-2d04d725ae02.png)
