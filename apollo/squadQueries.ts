import { gql } from '@apollo/client';

export const getsSquads = gql`
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
    }
  }
`;
