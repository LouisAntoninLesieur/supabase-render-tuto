import { Country } from "./Country.model.js";
import { City } from "./City.model.js";
import { sequelize } from "./sequelize-client.js";

Country.hasMany(City, {
  foreignKey: "country_id",
});

City.belongsTo(Country, { 
  foreignKey: "country_id" 
});

export { City, Country, sequelize };