import { MockDataSource } from "./mocks";

export interface Context {
  user?: string;
  dataSources: {
    mocks: MockDataSource;
  };
}
