# <h1> To Do List App </h1>

![Logo](https://user-images.githubusercontent.com/56252622/205276965-b1990fcd-3177-497c-815d-b74edacce6fc.png)

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

Start the server

```bash
  npm start
```

<h2><i>File Structure</i></h2>
<h3>Front_End</h3>
<pre>
-client
    |__public
    |   |__css
    |   |   |__todo.css
    |   |   |__login.css
    |   |   |__signup.css
    |   |
    |   |__js
    |   |   |__todo.js
    |   |   |__login.js
    |   |   |__signup.js
    |   |
    |   |__img
    |       |__jpg
    |       |__jpeg
    |       |__png
    |
    |__views
        |__components
        |   |__header.ejs
        |   |__footer.ejs
        |
        |__pages
            |__todo.ejs
            |__login.ejs
            |__signup.ejs
</pre>
</hr>
<h3>Back_End</h3>
<pre>
-server
    |__server.js
    |__app.js
    |__.env
    |__.gitignore
    |
    |__services
    |   |__config.js
    |   |__mongodb.js
    |
    |__routes
    |   |__auth
    |   |   |__login.router.js
    |   |   |__signup.router.js
    |   |   |__refresh.router.js
    |   |
    |   |__todo
    |       |__todo.router.js
    |       |__users.router.js
    |
    |__controllers
    |    |__auth
    |    |   |__login.routers.js
    |    |   |__signup.routers.js
    |    |   |__refresh.routers.js
    |    |
    |    |__todo
    |        |__todo.controller.js
    |        |__users.controller.js
    |
    |__models
        |__auth
        |   |__login.model.js
        |   |__signup.model.js
        |   |__refresh.model.js
        |
        |__todo
            |__todo.model.js
            |__users.model.js
            |__todo.mongo.js
            |__user.mongo.js
</pre>

## ToDo App Architecture

![ToDoApp](https://user-images.githubusercontent.com/56252622/205043323-d564b197-a7f0-43c5-9deb-e6cfb35ac7a4.png)

## ToDo App UI Design

### ToDo App Page

![ToDoApp-1](https://user-images.githubusercontent.com/56252622/205055271-19d0f8a7-3d11-44a9-8a7e-4b061abf95b4.png)

### ToDo App Signup Page

![ToDoApp-2](https://user-images.githubusercontent.com/56252622/205055912-508dd773-f58c-41fa-8cbf-a846e26549d5.png)

### ToDo App Login Page

![ToDoApp-3](https://user-images.githubusercontent.com/56252622/205056011-2a6537ee-c68d-46c0-99a7-67910487d9bb.png)
