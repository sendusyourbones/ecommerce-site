# E-Commerce Site

## Description

Due to the prevalence of e-commerce and the convenience it affords customers, it is important for a company to have a functional and robust e-commerce site that leverages solid technologies. This repository contains the back-end of an e-commerce site that includes a SQL database and API routes that can be used to get, add, update, and delete products, tags, and categories.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This application uses the `mysql2` package to connect to the database, the `sequelize` package to interact with the database, the `express` package to handle the API routing, and the `dotenv` package to manage environmental variables. To install these packages, clone the repo, `cd` into it, then run the command `npm i`.

Before running the application, create the database by following these steps:
1. In the command line, `cd` into the repo
2. Enter `mysql -u root -p` and enter your password
3. Enter `source ./db/schema.sql;`
4. Enter `exit`
5. Optionally, to seed the database with test data, enter `npm run seed`

Create a file called `.env` in the root directory and fill in the following variables:
- `DB_USER=[your mysql username]`
- `DB_PASSWORD=[your mysql password]`
- `DB_NAME=[the name of the database]`
- `PORT=[the port you want to use for the server]`

## Usage

Watch these demo videos to see the application in action:
- [Set-up](https://drive.google.com/file/d/19yGQhHzFXXvwnfBKDxru2TM9emIKb6r8/view?usp=share_link)
- [API calls](https://drive.google.com/file/d/12rxQqTS3CFF4WgIgD0FgEEmLwrU3dqDv/view?usp=share_link)

Instructions for using the application:
- `cd` into the repository in the command line and enter `node server`
- Because this repository only includes a back-end, you will need to use an API platform such as [Postman](https://www.postman.com/) to make the API requests
    - The api endpoints are `/api/products` for products, `/api/categories` for categories, and `/api/tags` for tags
    - For all three of those endpoints, routes exist for `GET` all, `GET` one, `POST`, `PUT`, and `DELETE`
        - Add an id (`/:id`) to the end of the path to `GET` one, `PUT`, and `DELETE`

## Credits

Packages used in the application:
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)

The following starter code was provided by the UC Berkeley Coding Boot Camp:
- Folder/file structure
- `connection.js`
- `schema.sql`
- The code within `models` except for the model column definitions and associations
- The outermost portions of the routes, the entirety of the `POST` and `PUT` routes for products, `/routes/index.js`, and `/routes/api/index.js`
- All contents of `/seeds/`
- `.env` minus my connection credentials
- `.gitignore`
- `package.json`
- Most of `server.js` aside from the sequelize lines

## License

MIT License