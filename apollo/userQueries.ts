import { gql } from '@apollo/client';

export const getAllUsers = gql`
  query users{
      id,
      lastname,
      firstname,
      email,
    }
  }
`;

export const getOneUser = gql`
  query user($id: ID!){
    User_by_pk(id: $id){
      id,
      firstname,
      lastname,
      email
    }
    }
  }
`;

export const createUser = gql`
  mutation user($user: User_insert_input!) {
    insert_User_one(objects: $user) {
      returning {
        id
        email
      }
    }
  }
`;

export const updateUser = gql`
  mutation updateUser($id: ID!, user: User_set_input){
    update_User_by_pk(pk_columns: {$id}, _set: $user){
      id,
      firstname,
      lastname,
      email
    }
    }
`;
