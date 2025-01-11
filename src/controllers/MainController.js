import { MainService } from "../services/MainService.js";

export class MainController {
  static async getCities(req, res) {
    try {
      const cities = await MainService.getCities();
      res.status(200).json(cities);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getCountries(req, res) {
    try {
      const countries = await MainService.getCountries();
      res.status(200).json(countries);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getCityById(req, res) {
    try {
      const { id } = req.params;
      const city = await MainService.getCityById(id);
      res.status(200).json(city);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getCountryById(req, res) {
    try {
      const { id } = req.params;
      const country = await MainService.getCountryById(id);
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async createCountry(req, res) {
    try {
      const { name } = req.body;
      const country = await MainService.createCountry(name);
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async createCity(req, res) {
    try {
      const { name, region, country_id } = req.body;
      const city = await MainService.createCity(name, region, country_id);
      res.status(200).json(city);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updateCountry(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const country = await MainService.updateCountry(id, name);
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updateCity(req, res) {
    try {
      const { id } = req.params;
      const { name, region } = req.body;
      const city = await MainService.updateCity(id, name, region);
      res.status(200).json(city);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deleteCountry(req, res) {
    try {
      const { id } = req.params;
      const country = await MainService.deleteCountry(id);
      res.status(200).json(country);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deleteCity(req, res) {
    try {
      const { id } = req.params;
      const city = await MainService.deleteCity(id);
      res.status(200).json(city);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}