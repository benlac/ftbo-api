import normalizeVehicle from "../../normalize/normalize-vehicle";

export async function saveVehicles(vehicles, dataSources) {
  try {
    const entries = vehicles.map(normalizeVehicle);
    await dataSources.vehicles.saveVehicles(entries);

    return {
      __typename: "SaveVehiclesSuccess",
      success: true,
      message: "Vehicles saved successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      __typename: "SaveVehiclesError",
      success: false,
      message: "Failed to save vehicles",
    };
  }
}
