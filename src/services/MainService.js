import { Country, City } from "../models/associations.js";

export class MainService {
  // GET ALL CITIES
  static async getCities() {
    const cities = await City.findAll();
    if (!cities) return { error: "No cities found" };
    return cities;
  }

  // GET ALL COUNTRIES
  static async getCountries() {
    const countries = await Country.findAll();
    if (!countries) return { error: "No countries found" };
    return countries;
  }

  // GET ONE COUNTRY BY ID
  static async getCountryById(id) {
    const country = await Country.findByPk(id);
    if (!country) return { error: "No country found" };
    return country;
  }

  // GET ONE CITY BY ID
  static async getCityById(id) {
    const city = await City.findByPk(id);
    if (!city) return { error: "No city found" };
    return city;
  }

  // CREATE ONE COUNTRY
  static async createCountry(name) {
    const country = await Country.create({ name });
    if (!country) return { error: "No country created" };
    return country;
  }

  // CREATE ONE CITY
  static async createCity(name, region, country_id) {
    const city = await City.create({ name, region, country_id });
    if (!city) return { error: "No city created" };
    return city;
  }

  // UPDATE ONE COUNTRY
  static async updateCountry(id, name) {
    const country = await Country.update({ name }, { where: { id } });
    if (!country) return { error: "No country updated" };
    return country;
  }

  // UPDATE ONE CITY
  static async updateCity(id, name, region) {
    const city = await City.update({ name, region }, { where: { id } });
    if (!city) return { error: "No city updated" };
    return city;
  }

  // DELETE ONE COUNTRY
  static async deleteCountry(id) {
    const country = await Country.destroy({ where: { id } });
    if (!country) return { error: "No country deleted" };
    return country;
  }

  // DELETE ONE CITY
  static async deleteCity(id) {
    const city = await City.destroy({ where: { id } });
    if (!city) return { error: "No city deleted" };
    return city;
  }
}
