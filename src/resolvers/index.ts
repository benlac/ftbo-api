import { DateTimeResolver } from "graphql-scalars";
import { saveVehiclesResolver } from "./mutation/save-vehicles";
import { bestVehicles } from "./query/best-vehicles";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    bestVehicles,
  },
  Mutation: {
    saveVehicles: saveVehiclesResolver,
  },
};
