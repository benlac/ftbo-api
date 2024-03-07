import { findBestVehicles } from "../../services/vehicle/find-best-vehicles";

export const bestVehicles = async (_, { selectors }, { dataSources }) => {
  return findBestVehicles(selectors, dataSources);
};
