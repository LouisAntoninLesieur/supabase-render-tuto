import 'dotenv/config';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: "postgres",
	define: {
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
});

// ============================================================================
// HOW TO EASY TEST YOUR DATABASE CONNECTION WITH NODE
// ============================================================================

/*
  Uncomment the following lines to test database connection
  Into the terminal, run: node <drag_and_drop_path_to_this_file> 
*/

/* 
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
*/