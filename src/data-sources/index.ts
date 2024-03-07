import knexConnection from "../config/postgres";
import VehicleDataSource from "./sql-data-source/vehicles";
import normalizeVehicle from "../normalize/normalize-vehicle";

export default {
  vehicles: new VehicleDataSource(knexConnection, normalizeVehicle),
};
