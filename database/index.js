const { Client } = require('pg');

class DatabaseManager {
  constructor(config) {
    this.client = new Client(config);
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Connected');
    } catch (error) {
      console.error('Error connecting:', error);
    }
  }

  async disconnect() {
    try {
      await this.client.end();
      console.log('Disconnected');
    } catch (error) {
      console.error('Error disconnecting:', error);
    }
  }

  async insertRow(tableName, values) {
    const query = {
      text: `INSERT INTO ${tableName} VALUES ($1, $2)`,
      values,
    };

    try {
      await this.client.query(query);
      console.log('Row inserted successfully');
    } catch (error) {
      console.error('Error inserting:', error);
    }
  }

  async queryTable(tableName) {
    const query = `SELECT * FROM ${tableName}`;

    try {
      const result = await this.client.query(query);
      console.log(`${tableName}:`, result.rows);
    } catch (error) {
      console.error('Error querying table:', error);
    }
  }
}

module.exports = DatabaseManager;
