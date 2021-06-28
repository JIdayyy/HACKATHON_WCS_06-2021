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
  query user($id: uuid!) {
    User_by_pk(id: $id) {
      id
      firstname
      lastname
      email
      avatar_url
      bio
      fiverr_url
      phone_number
      user_jobs {
        Job {
          label
        }
      }
      user_skills {
        Skill {
          label
        }
      }
      user_squads {
        Squad {
          name
        }
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
  mutation updateUser($id: uuid!, user: User_set_input){
    update_User_by_pk(pk_columns: {$id}, _set: $user){
      id,
      firstname,
      lastname,
      email
    }
    }
`;