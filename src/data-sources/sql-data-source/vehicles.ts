// @ts-nocheck
import { SQLDataSource } from "../sql-data-source";

export default class VehicleDataSource extends SQLDataSource {
  constructor(knexConnection) {
    super(knexConnection);
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
              "Error while inserting vehicle:",
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
