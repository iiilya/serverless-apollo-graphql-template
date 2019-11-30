import gql from "graphql-tag";

export default gql`
  type Mutation {
    verifyUser(state: String!): User
    followUser(id: String!): User!
    unfollowUser(id: String!): User!
  }
`;
