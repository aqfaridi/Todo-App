# todo-api

## Configuring Project : 

Install sails - framework on top of express & node 

$ sudo npm -g install sails

### Database 

Install dependencies : 

$ npm install



 * Modify connection.js inside config directory: 
	 ```
		  someMysqlServer: {
		    adapter: 'sails-mysql',
		    host: 'localhost',
		    user: 'database_username', //optional
		    password: 'database_password', //optional
		    database: 'database_name' //optional
		  },
	 ```

  * Modify models.js inside config directory : 
	  ```
	    connection: 'someMysqlServer',
	  ```

  * Run migrations : 
  	```
  		$ grunt db:migrate:up
  	```

## RUN SERVER : 

	```
	$ sails lift
	```

 * Fire Up POSTMAN

 	- POST http://localhost:1337/users/

	 	parameters to be passed
		```
			{
			  "name": "Abdul Qadir Faridi",
			  "email": "aqfaridi@gmail.com",
			  "password": "123456",
			}
		```

	- POST http://localhost:1337/events

		parameters to be passed
		```
			{
			   "user": 1,
			  "title": "Party !!",
			  "dueDate": "2016-03-10T07:00:00.000Z",
			  "place": "aqfaridi",
			  "description": "Party with friends ",
			  "isDeleted": false,
			  "id": 1,
			}
		```

	- GET http://localhost:1337/users/:id
	- GET http://localhost:1337/events/:id
	- PUT http://localhost:1337/users/:id
	- PUT http://localhost:1337/events/:id
	- DELETE http://localhost:1337/users/:id
	- DELETE http://localhost:1337/events/:id