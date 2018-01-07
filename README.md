# Collaborate-Online-Judgement-System

### Step to start the web application  

You can simply run  
```
sh launch.sh
```
or   

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

### Default Page For Admin  
![Preview](./previews/Logged-In.png)
### Default Page Without Logged In  
![Preview](./previews/New-User.png)  
### Edit Page    
![Preview](./previews/editor-preview.png)    
### Profile Page  
![Preview](./previews/UserProfilePage.jpeg)  

### Apis  

For frontend, there are:  

data service :  getting and posting problem information  
auth service :  token auth 

And the backend APIs are:  
GET  
/api/v1/problems    return all the problems  

POST  
/api/v1/problems    add a new problem  

GET  
/api/v1/problems/:id get the problem detail with id

### More Infos
 
 oj-client is an Angular frontend
 
 oj-server is a node.js Express backend
 
 database is mongodb, for privacy, I have hided the information of the database, in order to run the project yourself, you need to change the url of database at 12-14 line of server.js in oj-server folder.
 
 I also used auth0 to do user authorilariztion in auth.service in oj-client, the key information is also hidden, in order to use the user auth function, you may need to go to https://auth0.com to get your own information.
 
 ```
 // connect database
mongoose.connect(yourlink);
 ```
