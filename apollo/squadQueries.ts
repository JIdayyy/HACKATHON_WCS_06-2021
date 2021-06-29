import { gql } from '@apollo/client';

export const getSquads = gql`
  query AllSquads {
    Squad {
      id
      name
      description
      BusinessSector {
        name
      }
    }
  }
`;

export const getOneSquad = gql`
  query squad($id: uuid!) {
    Squad_by_pk(id: $id) {
      id
      name
      BusinessSector {
        name
      }
      description
      users {
        User {
          id
          firstname
          lastname
        }
      }
    }
  }
`;

export const squadById = gql`
  query SquadById($id: uuid!) {
    Squad(where: { BusinessSector: { id: { _eq: $id } } }) {
      id
      name
      BusinessSector {
        name
      }
      description
      users {
        User {
          id
          firstname
          lastname
        }
      }
    }
  }
`;

export const updateUserSquad = gql`
  mutation updateUserSquad($squadId: uuid!, $userId: uuid!) {
    insert_user_squad(objects: { squad_id: $squadId, user_id: $userId }) {
      returning {
        Squad {
          id
          name
        }
        User {
          id
          firstname
          lastname
        }
      }
    }
  }
`;
