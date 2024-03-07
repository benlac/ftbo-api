export default (vehicle) => {
  return {
    id: vehicle.id,
    model: vehicle.model,
    location: vehicle.location,
    locationId: vehicle.location_id,
    year: vehicle.year,
    price: vehicle.price,
    vpRating: vehicle.vp_rating,
    awardedPrice: vehicle.awarded_price,
    brandNewPrice: vehicle.brand_new_price,
    isSold: vehicle.is_sold,
    image: vehicle.image,
    kilometers: vehicle.kilometers,
    vehicleId: vehicle.vp_id,
    url: vehicle.url,
    saleDate: vehicle.sale_date,
    isAfterSales: vehicle.is_after_sales,
    endAfterSales: vehicle.end_after_sales,
    soldPrice: vehicle.sold_price,
  };
};
