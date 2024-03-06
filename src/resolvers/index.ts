import { DateTimeResolver } from "graphql-scalars";
import { saveVehiclesResolver } from "./mutation/save-vehicles";

export const resolvers = {
  DateTime: DateTimeResolver,
  Query: {
    hello: () => "Hello, world!",
  },
  Mutation: {
    saveVehicles: saveVehiclesResolver,
  },
};
