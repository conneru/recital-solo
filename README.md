# How to install and use Recital!
 
- cd into `/backend` and create a `.env` file and paste in the following:
 
PORT=5000

DB_USERNAME= 

DB_PASSWORD= 

DB_DATABASE=recital_db

DB_HOST=localhost

JWT_SECRET= 

JWT_EXPIRES_IN=604800

- Fill in the missing values with the `psql` username and password you would like to use

- You can run `openssl rand -base64 10` in your terminal to generate a JWT_SECRET

 - Now while still in `/backend` run `npm install`

 - Now that the dependencies are installed you'll have to create and seed the database
 
 - While still in `/backend` run `npx dotenv sequelize db:create`, `npx dotenv sequelize db:migrate`, and `npx dotenv sequelize db:seed:all` in that order

 - After the database and created and seeded properly while still in `/backend` run `npm start`
 
 - Open a new terminal then `cd` into the `/frontend` folder and `npm install`
 
 - After everything installs while still in `/frontend` run `npm start`
 
 - Navigate to `http://localhost:3000/` and enjoy!
