import { ApolloFastifyContextFunction } from "@as-integrations/fastify";
import dataSources from "./data-sources";

export interface FtboContext {
  dataSources: unknown;
}

export const FtboContextFunction: ApolloFastifyContextFunction<
  FtboContext
> = async () => ({
  dataSources,
});
