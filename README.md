# MERN-shopping-list 

This is a shopping list app made with Node, Express, React/Redux, and MongoDB with Restful API architecture. 
Please see the production site [here](https://guarded-crag-55709.herokuapp.com/).
___

## Technical Choices 

### Overall: 

This is my first attempt to create a full stack application and the bulk of the time was spent on researching the best way to arthitect a full-stack application, best technical stack to use and investigating new tools I haven't dealt with before (Redux and MongoDB). Although it was a great learning experience to enrich my understanding of full-stack application's architecture, I wasn't able to complete all of the required features in the time given to me.  

### React/Redux: 

- Reason of the choice: 

I've chosen React because I have prior experience building React applications and it's suited for building progressive web applications with its performance and fast rendering. Through building this app, I have tried to incorporate Redux, state management library and learned the concepts of Redux. 

- What I've learnt: 

I learnt that Redux requires setting up complex boiler plate codes in order to apply Redux's flow. Also, I've realized that it requires additional learning/hands on experience to make React/Redux communicate with the database through its API endpoints. Because of the time constraint, I wasn't able to accomplish a few of the requirements including making a request to update the existing item to the Mongo Database, check on and off the item purchased checkbox, and configuring the router for displaying a register/login page. 


### Node/Express: 

Since I have experience building Node applications and it has great compatibility with React library, I've chosen Node/Express for the back-end.  

### MongoDB/Mongoose/mLab: 

- Reason of the choice: 

Due to its ample resources online introducing how to connect with mLab's cloud database management and Node, I've chosen MongoDB. 

___

## How to Clone 

1. git clone https://github.com/ArataKagan/mern-shopping-list
2. cd mern-shopping-list 
3. npm install 
4. npm run client-install

## How to Setup database

1. create mLab account for free (https://mlab.com/) 
2. Click `create new`
3. Choose AWS Sandbox Free 
4. Click region to where you're located
5. Click the database you create 
6. Under `User` tab, click `Add database user`
7. Fill in database username, database password  
8. Copy the MongoDB URI and paste 
9. Open `keys.js` under config foler 
10. Paste the MongoDB URI and **add your database username and password**


## How to Run under Local Host 

1. Go to root directory 
2. npm run dev

___ 

## Current Progress 

### Done 
1. Add item 
2. Delete item 
3. Deployed on production with Heroku

### In Progress 
1. Renaming and updating an item  

Need to figure out how to define item reducers' update method. 

2. Connect checkbox data to the server   

Need to figure out how to update the existing data on MongoDB and reflect the returned state with ternary operator. 

3. Routing and displaying Login and Register page 

Currrently investigating how to router those created pages. 

4. TDD test 

I didn't have enough time to write a test for testing each feature. 








