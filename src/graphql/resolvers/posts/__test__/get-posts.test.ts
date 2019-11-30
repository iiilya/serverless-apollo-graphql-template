/* eslint-disable @typescript-eslint/explicit-function-return-type */
import getPosts from "../get-posts";
import { MockDataSource } from "../../../../lib/mocks";

describe("get-posts resolver", () => {
  it("should return posts", async () => {
    const posts = await getPosts(
      null,
      {},
      { dataSources: { mocks: new MockDataSource() } },
      {} as any
    );

    expect(posts).toBeDefined();
    expect(posts).toHaveLength(3);
  });
});
