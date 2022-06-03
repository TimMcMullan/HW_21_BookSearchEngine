const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors: String
    description: String!
    image: String
    title: String
    link: String!
}

type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookInfo: String!): User
    deleteBook(bookInfo: String!): User
  }
  `;

  module.exports = typeDefs;
