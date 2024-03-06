import Fastify from "fastify";
import cors from "@fastify/cors";
import { ApolloServer } from "@apollo/server";
import fastifyApollo, {
  fastifyApolloDrainPlugin,
} from "@as-integrations/fastify";
import { typesMerged } from "./type-defs/index.js";
import { resolvers } from "./resolvers/index.js";
import { DateTimeTypeDefinition } from "graphql-scalars";
import { FtboContext, FtboContextFunction } from "./context.js";

const fastify = Fastify();

const apollo = new ApolloServer<FtboContext>({
  typeDefs: [DateTimeTypeDefinition, typesMerged],
  resolvers: [resolvers],
  plugins: [fastifyApolloDrainPlugin(fastify)],
});

const start = async () => {
  try {
    await apollo.start();
    await fastify.register(cors);
    await fastify.register(fastifyApollo(apollo), {
      context: FtboContextFunction,
    });
    await fastify.listen({ port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
