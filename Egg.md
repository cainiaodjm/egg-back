<!--
 * @Author: your name
 * @Date: 2020-10-12 16:47:33
 * @LastEditTime: 2020-10-12 16:47:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /egg-simple/Egg.md
-->
Method	Path	Route Name	Controller.Action
GET	/posts	posts	app.controllers.posts.index
GET	/posts/new	new_post	app.controllers.posts.new
GET	/posts/:id	post	app.controllers.posts.show
GET	/posts/:id/edit	edit_post	app.controllers.posts.edit
POST	/posts	posts	app.controllers.posts.create
PUT	/posts/:id	post	app.controllers.posts.update
DELETE	/posts/:id	post	app.controllers.posts.destroy