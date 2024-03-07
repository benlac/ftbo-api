export async function findBestVehicles(selectors, dataSources) {
  try {
    const results = await dataSources.vehicles.findTheBestOpportunity(
      selectors
    );

    return {
      results,
      __typename: "VehicleSuccess",
    };
  } catch (error) {
    return {
      __typename: "VehicleError",
      message: "Failed to find vehicles",
    };
  }
}
