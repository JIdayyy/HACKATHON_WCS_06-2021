import { gql } from '@apollo/client';

export const getSquads = gql`
  query AllSquads {
    Squad {
      id
      name
      description
      img_url
      BusinessSector {
        name
      }
    }
  }
`;

export const addUserToSquad = gql`mutation userSquad($userId: uuid!, $squadId: uuid!) {
  insert_user_squad(objects: {user_id: $userId, squad_id: $squadId}){
    returning{
      Squad{
        id
        name
      }
      User{
        id
        firstname
        lastname
      }
    }
  }
}
`;

export const getOneSquad = gql`
  query squad($id: uuid!) {
    Squad_by_pk(id: $id) {
      id
      name
      img_url
      BusinessSector {
        name
      }
      description
      users {
        User {
          id
          firstname
          lastname
          bio
          avatar_url
        }
      }
    }
  }
`;

export const squadById = gql`
  query SquadById($name: bpchar!) {
    Squad(where: { BusinessSector: { name: { _eq: $name } } }) {
      id
      name
      description
      img_url
      BusinessSector {
        id
        name
      }
    }
  }
`;
