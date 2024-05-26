# To-Do API

## Project Description

To-Do API is a simple RESTful API built with Node.js and Express. It allows users to manage their to-do tasks.

## Features

-   Add new to-do items
-   Update existing to-do items
-   Delete to-do items
-   Retrieve all to-do items

## Technologies Used

-   Node.js
-   Express
-   body-parser
-   cors

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/yemreturker/todo-api.git
    ```

2. Navigate to the project directory:
    ```sh
    cd todo-api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a .env file in the root directory and add the following environment variables:

    ```.env
    PORT=3000
    ```

5. Start the application:
    ```sh
    npm start
    ```

## API Endpoints

### Base URL

    http://localhost:3000

### Routes

    • GET /: Welcome message
    • GET /todos: Retrieve all to-do items
    • POST /todos: Add a new to-do item
    • PUT /todos/:id: Update a to-do item by ID
    • DELETE /todos/:id: Delete a to-do item by ID

### Project Structure

    todo-api/
    ├── node_modules/
    ├── src/
    │   ├── models/
    │   │   └── todo.js
    │   ├── routes/
    │   │   └── todos.js
    │   └── index.js
    ├── .env
    ├── package-lock.json
    ├── package.json
    └── README.md
    

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
