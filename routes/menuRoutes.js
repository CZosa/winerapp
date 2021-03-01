const db = require('../database/index');

module.exports = (app) => {
  const mealQuery =
    'SELECT wine_id, name, varietal, url, picture FROM wines WHERE meat_id = $1 AND prep_id = $2 AND vegetable_id = $3 AND seasoning_id = $4 AND starch_id = $5';

  app.get(
    '/wines/:meat_id/:prep_id/:vegetable_id/:seasoning_id/:starch_id/',
    async (req, res) => {
      try {
        const {
          meat_id,
          prep_id,
          vegetable_id,
          seasoning_id,
          starch_id,
        } = req.params;

        const wine = await db.query(mealQuery, [
          meat_id,
          prep_id,
          vegetable_id,
          seasoning_id,
          starch_id,
        ]);

        res.status(200);
        res.json(wine.rows.map((vint) => vint));
      } catch (error) {
        res.status(400);
        console.log(error.message);
      }
    }
  );

  const cheeseQuery =
    'SELECT wine_id, name, varietal, url, picture FROM wines WHERE dairy_id = $1';

  app.get('/wines/cheese/:dairy_id/', async (req, res) => {
    try {
      const { dairy_id } = req.params;

      const wine = await db.query(cheeseQuery, [dairy_id]);

      res.status(200);
      res.json(wine.rows.map((vint) => vint));
    } catch (error) {
      res.status(400);
      console.log(error.message);
    }
  });

  app.get('/meats', async (req, res) => {
    try {
      const meat = await db.query('SELECT * FROM meat');
      res.json(meat.rows.map((meats) => meats));
    } catch (error) {
      res.status(400);
      console.log(error.message);
    }
  });

  app.get('/preps', async (req, res) => {
    try {
      const prep = await db.query('SELECT * FROM preparation');
      res.json(prep.rows.map((preps) => preps));
    } catch (error) {
      res.status(400);
      console.log(error.message);
    }
  });

  app.get('/veggies', async (req, res) => {
    try {
      const veggie = await db.query('SELECT * FROM vegetable');
      res.json(veggie.rows.map((veggies) => veggies));
    } catch (error) {
      res.status(400);
      console.log(error.message);
    }
  });

  app.get('/seasonings', async (req, res) => {
    try {
      const seasoning = await db.query('SELECT * FROM seasoning');
      res.json(seasoning.rows.map((seasonings) => seasonings));
    } catch (error) {
      res.status(400);
      console.log(error.message);
    }
  });

  app.get('/starches', async (req, res) => {
    try {
      const starch = await db.query('SELECT * FROM starch');
      res.json(starch.rows.map((starches) => starches));
    } catch (error) {
      res.status(400);
      console.log(error.message);
    }
  });

  app.get('/cheeses', async (req, res) => {
    try {
      const cheese = await db.query('SELECT * FROM dairy');
      res.json(cheese.rows.map((cheeses) => cheeses));
    } catch (error) {
      res.status(400);
      console.log(error.message);
    }
  });
};
