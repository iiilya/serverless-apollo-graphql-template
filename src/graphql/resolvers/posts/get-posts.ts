// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { IFieldResolver } from "graphql-tools";
import { Context } from "../../../lib/types";
import { Source } from "../../../../handler";

const getPosts: IFieldResolver<Source, Context> = async (
  source,
  args,
  context,
  info
): Promise<any[]> => {
  return context.dataSources.mocks.getPosts();
};

export default getPosts;
