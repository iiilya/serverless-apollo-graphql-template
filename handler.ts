import { ContextFunction } from "apollo-server-core";
import { DataSources } from "apollo-server-core/src/graphqlOptions";
import {
  ApolloServer,
  Config,
  CreateHandlerOptions
} from "apollo-server-lambda";
import { DocumentNode } from "graphql/language";
import { getUser } from "./src/lib/auth";
import resolvers from "./src/graphql/resolvers";
import Mutation from "./src/graphql/types/Mutation";
import Post from "./src/graphql/types/Post";
import Query from "./src/graphql/types/Query";
import User from "./src/graphql/types/User";
import { MockDataSource } from "./src/lib/mocks";

const typeDefs: DocumentNode[] = [Mutation, Post, Query, User];

const contextFn: ContextFunction = ({ event, context }): {} => ({
  headers: event.headers,
  functionName: context.functionName,
  event,
  context,
  user: getUser(event.headers["Authorization"])
});

export type Source = {
  mocks: MockDataSource;
};

const options: Config = {
  typeDefs,
  resolvers,
  context: contextFn,
  dataSources: (): DataSources<{}> => ({
    mocks: new MockDataSource()
  })
};

const server = new ApolloServer(options);

const handlerOptions: CreateHandlerOptions = {
  cors: {
    origin: "*",
    credentials: false
  }
};

export const graphqlHandler = server.createHandler(handlerOptions);
