// @ts-nocheck
import { SQLDataSource } from "../sql-data-source";

export default class VehicleDataSource extends SQLDataSource {
  constructor(knexConnection, normalize = (data) => data) {
    super(knexConnection);
    this.normalize = normalize;
  }

  async findTheBestOpportunity(selectors) {
    const { maxKm, minPrice, maxPrice, limit } = selectors;
    try {
      const vehicles = await this.knexConnection("vehicle")
        .select()
        .whereBetween("price", [minPrice, maxPrice])
        .whereNotNull("vp_rating")
        .whereNotNull("price")
        .where("is_sold", false)
        .where("kilometers", "<", maxKm)
        .orderBy(this.knexConnection.raw("ABS(vp_rating - price)"), "desc")
        .limit(limit);

      return vehicles.map(this.normalize);
    } catch (error) {
      throw new Error("Error while finding the best opportunity");
    }
  }

  async saveVehicles(vehicles) {
    try {
      await Promise.all(
        vehicles.map(async (vehicle) => {
          try {
            const time = this.knexConnection.raw("NOW()");
            vehicle["updated_at"] = time;
            vehicle["created_at"] = time;
            await this.knexConnection("vehicle").insert(vehicle);
            console.log("Insert success for:", vehicle.model);
            return true;
          } catch (error) {
            console.error(
              "🔴 Error while inserting vehicle:",
              vehicle.model,
              error
            );
            throw new Error("Error while inserting vehicle");
          }
        })
      );
      return true;
    } catch (error) {
      throw new Error("Error while inserting vehicle");
    }
  }
}
