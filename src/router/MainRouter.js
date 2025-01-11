import express from 'express';
import { MainController } from "../controllers/MainController.js";

export class MainRouter {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/countries", MainController.getCountries);
    this.router.get("/cities", MainController.getCities);
    this.router.get("/countries/:id", MainController.getCountryById);
    this.router.get("/cities/:id", MainController.getCityById);
    this.router.post("/countries", MainController.createCountry);
    this.router.post("/cities", MainController.createCity);
    this.router.patch("/countries/:id", MainController.updateCountry);
    this.router.patch("/cities/:id", MainController.updateCity);
    this.router.delete("/countries/:id", MainController.deleteCountry);
    this.router.delete("/cities/:id", MainController.deleteCity);
  }

  get routes() {
    return this.router;
  }
}