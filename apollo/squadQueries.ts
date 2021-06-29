import { gql } from '@apollo/client';

export const getSquads = gql`
  query AllSquads() {
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
    }
  }
`;

export const squadById = gql`
  query SquadById($id: uuid!) {
    Squad(where: { BusinessSector: { id: { _eq: $id } } }) {
      id
      name
      description
      BusinessSector {
        id
        name
      }
    }
  }
`;
