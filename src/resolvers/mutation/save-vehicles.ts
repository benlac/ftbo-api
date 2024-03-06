import { saveVehicles } from "../../services/vehicle/save-vehicles";

export const saveVehiclesResolver = async (_, { input }, { dataSources }) => {
  return saveVehicles(input, dataSources);
};
