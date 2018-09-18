# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
adonis seed
```

docker run --name mysql_5.7 -e MYSQL_ROOT_PASSWORD=admin -e MYSQL_DATABASE=adonis_api_customers -p 3306:33
06 -d mysql:5.7
