import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const typesArray = loadFilesSync("./**/*", {
  recursive: true,
  extensions: ["graphql"],
});

export const typesMerged = mergeTypeDefs(typesArray, {
  commentDescriptions: true,
});
