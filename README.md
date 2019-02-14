# mern-shopping-list 

This is Shopping List app made with Node, Express, React/Redux, and MongoDB with Restful API architecture. 
Please check out the production site from [here](https://guarded-crag-55709.herokuapp.com/)

## Technical Choices 


### React/Redux: 

- Reason of the choice: 
Since I have prior experience building react application and it's suited for buidling progressive web application with performant and fast rendering, I've chosen React. Through building this app, I have tried to incorporate Redux, state management library and learned the concepts of the Redux. 

- What I've learnt: 
I learnt that Redux requires to set up a complex boiler plate codes in order to apply the Redux's flow. Because of the time constraint, I wasn't able to accomplish a couple of minimal requirements including making a request to update the existing item to the mongo Database, check on and off the item purchased checkbox, and configuring the router for displaying a register/login page. 


### Node/Express: 

Since I have an experience building Node applications and its great compatibility with React library, I've chosen Node/Express for back-end.  




### MongoDB/Mongoose/mLab: 








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

## Current Progress 

### Done 
1. Add item 
2. Delete item 

### In Progress 
3. Renaming and update an item 
4. Connect chechbox data to the server  
5. Authentication 









