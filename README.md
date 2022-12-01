# <h1> To Do List App </h1>

<h2>Using Technologies</h2>
<ul>
<li>Node Js</li>
<li>Express ( FrameWork )</li>
<li>MongoDB</li>
</ul>
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
</hr>
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

## ToDo App Prototype

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhTyu0pdw1ti1ebQg2wBIrh%2FToDoApp%3Fnode-id%3D3%253A68%26scaling%3Dscale-down-width%26page-id%3D0%253A1" allowfullscreen></iframe>
