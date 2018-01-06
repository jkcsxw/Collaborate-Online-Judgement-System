# Collaborate-Online-Judgement-System

 Final view can be seen in the preview.jpeg
 
 oj-client is an Angular frontend
 
 oj-server is a node.js Express backend
 
 database is mongodb, for privacy, I have hided the information of the database, in order to run the project yourself, you need to change the url of database at server.js in oj-server folder.
 
 There are three step to run the project.
 
1. under cd {you_dir}/oj   
```
npm install
```
2. under cd {you_dir}/oj/oj-client
```
ng build --watch
```
3.under cd {you_dir}/oj/oj-server
```
node server.js
```
if you use nodemon you can also use nodemon to start the project.


then you can open http://localhost:3000/  to see the online judgement website.
