import gql from "graphql-tag";

export default gql`
  type Post {
    id: ID!
    content: String!
  }
`;
