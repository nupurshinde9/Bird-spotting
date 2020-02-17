# Bird-spotting
A simple website that lets people record their bird sightings and view a list of sightings other people have made.


## Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/nupurshinde9/Bird-spotting.git
```
and install the dependencies
```
npm install
```

### Prerequisites
A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb and mongoose.

#### MongoDB
The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

### Start the MongoDB server
First we need to create the `db` directory where the database files will live in. In your terminal navigate to the `root` of your system by doing `cd ..` until you reach the top directory. You can create the directory by running `sudo mkdir -p /data/db`. Now open a different tab in your terminal and run `mongod` to start the Mongo server.

### Run the Application

The project is preconfigured with a simple development web server. The simplest way to start this server is:

    npm start
    
And now you should be able to see the app at http://localhost:3000/

## notes

* /public - static directories suchs as /images and /stylesheets
* /routes - route files for the project
* /views - views for the project
* README.md - this file
* app.js - central app file for the project
* package.json - package info for the project

