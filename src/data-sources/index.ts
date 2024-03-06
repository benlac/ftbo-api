import knexConnection from "../config/postgres";
import VehicleDataSource from "./sql-data-source/vehicles";

export default {
  vehicles: new VehicleDataSource(knexConnection),
};
