# Ecommerce Platform

## Description
This project is designed to help a business keep track of an ecommerce platform. It uses four MySQL tables that store product categories, products, product tags, and an additional table that relates which products have which tags, and vice-versa.

You can use this application to get, create, modify and delete items from these tables, but there is currently no front end that it's connected to so it must be accessed through a program that allows you to make server requestss. I used Insomnia, because I literally don't know anything else and it seems to work pretty noice, if I do say so myself. Also, my cat Porkchop agrees.

To watch it in action, check out this video on Google Drive:
https://drive.google.com/file/d/1WdOkAQKBSoXd49XnKktSZGnAw_iX5RW8/view?usp=sharing

## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

After cloning the repository down from GitHub, make sure to move into the /ecommerce_platform directory and run 

```bash
npm install
```
in the terminal before running the program to ensure you have the necessary dependencies. This application depends on the dotenv, express, mysql2 and sequelize packeges, with some loving help from nodemon.

To set up the databases, make sure you create the database by openning the MySQL shell and run the command

```sql
SOURCE ./db/schema.sql
```
If you want to seed with the provided seed file, you will also need to use the bash terminal to then run

```bash
npm run seed
```

## Usage

Since this application does not have a front end, you will have to run

```bash
npm run watch
```
to start the server using nodemon. Next, you will need to use a program that can interface with the server (running on port 3001); in my case I use Insomnia.

Using Insomnia, you can set up GET, POST, PUT and DELETE requests for the categories, products, and tags in the database. Each one is accessed from one of the following paths:
* `/api/categories`
* `/api/products`
* `/api/tags`

The GET request will get all items from that table, or you can add `/:id` to the route to get a specic item by id. The rest of the routes, POST, PUT and DELETE all require the `:/id` because they each create, modify, or delete an item from a table, respectively.
## Credits

This project includes starter code, and the rest was written by Jeremy McKeegan, github username jman2476

## License

MIT License
