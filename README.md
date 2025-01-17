# Community Guides

This is a Full stack Project that aims to be a community driven guide creation solution providing a seamless
interaction for users to create simple guides with an extensive editor.
This project’s aim is to deliver a secure and user-friendly platform,
allowing users to view, create and interact with other user created
guides.

## Features
- Guide Management
    - All users can view approved and featured guides
- User Management
    - User registration and login
    - Users can view upvote or downvote guides
    - Users can retrieve their created guides
    - Users can retrieve their upvoted guides
    - Users can delete and update their own guides
- User Roles and Permissions:
    - Moderators:
        - Moderators can approve and unapprove guides
        - Moderators can delete guides
    - Admins
        - Admins can do anything moderators can do
        - Admins can feature guides on the front page
        - Admins can create and delete categories


# Technologies Used
# Frontend
- React
- Material UI 
- react-router-dom
- Vite
- Joi
- Axios
- jwt-decode
- react-quill-new

## Backend
- Express
- Bcrypt
- Chalk
- Config
- Cors
- Cross-env
- Dotenv
- Joi
- Jsonwebtoken
- Lodash
- Mongoose
- Morgan

## Database Requirements
- MongoDB server running on port 27017 is required during development and production.
- The application will create a database named communityGuides upon startup if it doesn't exist. This database will store all of the data.
- If the users, categories and guides collections within this database are empty, the application will generate initial data, only if the server is running in development.

## Installation

1. Clone the repository

    ```sh
    git clone https://github.com/TheMaor2804/Community-Guides-Project

2. Install dependencies

    ```sh
    cd backend
    npm install

3. Set up environment variables:

    Create a .env file in the root directory.

    Ensure you set the following variables:

    ```sh
    JWT_SECRET=your_jwt_secret
    ATLAS_CONNECTION_STRING=your_atlas_mongodb_connection_string
    PORT=your_server_port (optional)

4. Start the server:

    Development:
    ```sh
    npm run dev
    ```

    Production:
    ```sh
    npm start
    ```    
5. Open a new terminal!

6. Navigate and install dependencies

    ```sh
    cd frontend
    npm install

7. Start the Website

    ```sh
    npm run dev

## Initial User Accounts for Testing (Local Development Only)

Warning: The following initial user accounts are intended for local development purposes only.


| Email | Password |
|----------------|----------------|
|John@gmail.com|Abc1234!|
|mod@gmail.com|Abc1234!|
|admin@gmail.com|Abc1234!|

## API Documentation
For detailed API documentation and examples, refer to the Postman collections:

- Guides API Documentation: https://documenter.getpostman.com/view/37786987/2sAYJ9Bz28

- Categories API Documentation: https://documenter.getpostman.com/view/37786987/2sAYJ9BysH

- Users API Documentation: https://documenter.getpostman.com/view/37786987/2sAYJ9Bywm
