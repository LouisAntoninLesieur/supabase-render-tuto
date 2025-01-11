# Basic CRUD API with Supabase and Render

![Supabase & Render logos](https://i.imgur.com/k494gCD.png)

This project is a basic CRUD API that allows managing countries and cities. It is designed for educational purposes to demonstrate how to host a database and an API using Supabase and Render.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- A Supabase (free) account
- A Render (free) account

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:LouisAntoninLesieur/supabase-render-tuto.git
   cd supabase-render-tuto
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file at the root of the project and add your Supabase PostgreSQL connection URL:

   ```properties
   PG_URL=postgresql://postgres.trqfuhjznzjiafcrxvsc:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres
   ```

## Supabase Configuration

1. Create a project on [Supabase](https://supabase.io/).
2. Go to the "Database" section and copy the PostgreSQL connection URL.
3. Replace `PG_URL` in your `.env` file with this URL.

## Render Configuration

1. Create an account on [Render](https://render.com/).
2. Deploy your application by following Render's instructions for deploying a Node.js application.
3. Make sure to configure the environment variables on Render with your Supabase PostgreSQL connection URL.

## Local Usage

  **Uncomment lines 15-17 in index.js**.

1. Start the server locally:

   ```bash
   npm run dev
   ```

   The API will be accessible at `http://localhost:3000`.

2. You can now test the API endpoints using a tool like Postman or cURL.

## API Endpoints

- `GET /api/countries` : Retrieve all countries.
- `GET /api/cities` : Retrieve all cities.
- `GET /api/countries/:id` : Retrieve a country by ID.
- `GET /api/cities/:id` : Retrieve a city by ID.
- `POST /api/countries` : Create a new country.
- `POST /api/cities` : Create a new city.
- `PATCH /api/countries/:id` : Update a country by ID.
- `PATCH /api/cities/:id` : Update a city by ID.
- `DELETE /api/countries/:id` : Delete a country by ID.
- `DELETE /api/cities/:id` : Delete a city by ID.

## Project Structure

```shell
medium-supabase-render-repo/
├── src/
│   ├── controllers/
│   │   └── MainController.js   # Contains the controller logic
│   ├── models/                 # Contains Sequelize models and associations
│   │   ├── associations.js
│   │   ├── city.model.js
│   │   ├── country.model.js
│   │   └── sequelize-client.js
│   ├── router/
│   │   └── MainRouter.js       # Defines the API routes
│   └── services/
│       └── MainService.js      # Contains the service logic
├── .env                        # Environment variables configuration file
├── index.js                    # Entry point of the application
├── package.json
└── README.md
```

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any improvements or corrections.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.