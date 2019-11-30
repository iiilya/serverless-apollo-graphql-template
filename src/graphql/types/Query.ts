import gql from "graphql-tag";

export default gql`
  type Query {
    user(stringId: String!): User!
    myUser: User
    users: [User]!
    followingUsers: [User]!

    posts: [Post]!
  }
`;
