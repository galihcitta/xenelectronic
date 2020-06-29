# Xendit Electronic Store

## MVP
- [x] Customers should be able to view the list of the products based on the product categories
- [x] Customers should be able to add the products to the shopping cart
- [x] Customers should be able to view the products listed on the shopping cart
- [x] Customers should be able to remove the products listed on the shopping cart
- [x] Customers should be able to checkout shopping cart and continue their transaction to payment

## Tech Stacks

* React with hooks (All Functional Component)
* Redux
* Node.js
* TypeScript
* Express
* PostgreSQL
* TypeORM
* Jest for Unit Testing on both server and web
* Styled Components
* ESLint for linting

## Features

* Customer able to view the list of products based on their categories
* Customer able to sort the list of products based on their color, condition and price
* Customer able to search the specific products
* Customer able to view the detail products
* Customer able to put the product inside cart
* Customer able to do the checkout the cart
* Customer able to do the view the cart

## API Documentation

The API end points are as follow
#### GET `/products/type/all`
> returns all of products data

## Installation

1. Clone this repository

```
git clone https://github.com/galihcitta/xenelectronic.git
```

3. First, you have to install the dependencies using npm in server folder

```
cd server
npm install
```

3. Then, also install the dependencies in web folder

```
cd ../
cd web
npm install
```

4. After all the dependencies installed, you need to create .env inside server folder. Make sure you have installed PostgreSql on your own machine. Dont forget to run PostgreSql. Create your database first then seed your database manually using dump.sql inside server folder

```
POSTGRES_DB_URL=jdbc:postgresql://localhost/<Your Database Name>
JWT_SECRET="your jwt secret"
PORT=5000
```
Just in case you confused, i have attached my .env on the repo. 

5. Run the server using this command inside server folder
```
npm run start:dev
```
The default url of the backend/server is: http://localhost:5000

6. For the web or frontend. Open new terminal, move inside the web folder and run the web using this command

```
cd web
npm run start
```
The default url of the web/frontend is: http://localhost:3000

## Application Design

Database Design

![dbdesign](https://i.ibb.co/GV4hzpj/dbxen.png)





