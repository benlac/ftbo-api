import { removeNullUndefined } from "../../utils/remove-null-undefined";

export async function saveVehicles(vehicles, dataSources) {
  try {
    const entries = vehicles.map((vehicle) =>
      removeNullUndefined({
        model: vehicle.model,
        location: vehicle.location,
        location_id: vehicle.locationId,
        year: vehicle.year,
        price: vehicle.price,
        vp_rating: vehicle.vpRating,
        brand_new_price: vehicle.brandNewPrice,
        is_sold: vehicle.isSold,
        awarded_price: vehicle.awardedPrice,
        image: vehicle.image,
        kilometers: vehicle.kilometers,
      })
    );
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
