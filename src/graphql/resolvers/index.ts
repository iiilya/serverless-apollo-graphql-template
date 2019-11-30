import { IResolvers } from "graphql-tools";
import getPosts from "./posts/get-posts";

const resolvers: IResolvers = {
  Query: {
    posts: getPosts
  },
};

export default resolvers;
