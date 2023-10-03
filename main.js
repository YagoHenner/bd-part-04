const DatabaseManager = require('./database');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'taverna-de-dados',
  password: 'postgres',
  port: 5432,
};

const dbManager = new DatabaseManager(dbConfig);

(async () => {
  await dbManager.connect();

  const valuesToInsert = ['valor1', 'valor2'];
  await dbManager.insertRow('exemplo', valuesToInsert);

  await dbManager.queryTable('exemplo');

  await dbManager.disconnect();
})();
