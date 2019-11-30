import gql from "graphql-tag";

export default gql`
    type User {
        id: ID!
        stringId: String!
        name: String!
        icon: String!
        following: [ID]!
    }
`;
