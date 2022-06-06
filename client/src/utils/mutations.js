import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookInfo: String!) {
    saveBook(bookInfo: $bookInfo) {
         Book {
            bookId
            authors
            description
            image
            title
            link 
                }
      }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookInfo: String!) {
    removeBook(bookInfo: $bookInfo) {
         Book {
            bookId
            authors
            description
            image
            title
            link 
           }
      }
  }
  `;