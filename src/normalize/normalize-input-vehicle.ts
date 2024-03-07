import { removeNullUndefined } from "../utils/remove-null-undefined";

export default (vehicle: any) =>
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
    vp_id: vehicle.vehicleId,
    url: vehicle.vehicleUrl,
    sale_date: vehicle.saleDate,
    is_after_sales: vehicle.isAfterSales,
    end_after_sales: vehicle.endAfterSales,
    sold_price: vehicle.soldPrice,
  });
