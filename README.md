# Simple User and Post Management Backend

This project is a simple backend application built with Express and Mongoose. It allows for the creation and management of users and their posts.

## Features

- Create users
- Create posts associated with users
- Retrieve users and their posts

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/sakshambajpai1604/user-post-management-backend.git
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start MongoDB server:
    ```sh
    mongod
    ```

4. Run the application:
    ```sh
    node app.js
    ```

## API Endpoints

- `GET /` - Returns a simple greeting message.
- `GET /create` - Creates a new user with predefined data.
- `GET /post/create` - Creates a new post associated with a predefined user.

## Example Usage

1. Create a user:
    ```sh
    curl http://localhost:3000/create
    ```

2. Create a post:
    ```sh
    curl http://localhost:3000/post/create
    ```
