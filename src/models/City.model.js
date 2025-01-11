import { DataTypes, Model } from "sequelize";
import { sequelize } from "./sequelize-client.js";

export class City extends Model {}

City.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    region: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, 
  {
    sequelize,
    tableName: "city"
  }
);