import { ApolloFastifyContextFunction } from "@as-integrations/fastify";

export interface FtboContext {
  greeting: string;
}

export const FtboContextFunction: ApolloFastifyContextFunction<
  FtboContext
> = async (request, reply) => ({
  greeting: "Hello World!!",
});
