import Fastify from "fastify";
import cors from "@fastify/cors";
import { ApolloServer } from "@apollo/server";
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify";
import { typesMerged } from "./type-defs/index.js";
import { resolvers } from "./resolvers/index.js";
import { FtboContext, FtboContextFunction } from "./context.js";

const fastify = Fastify();

const apollo = new ApolloServer<FtboContext>({
  typeDefs: typesMerged,
  resolvers: [resolvers],
  plugins: [fastifyApolloDrainPlugin(fastify)],
});

await apollo.start();
await fastify.register(cors);

await fastify.register(fastifyApollo(apollo), {
  context: FtboContextFunction,
});

await fastify.listen({ port: 4000 });
