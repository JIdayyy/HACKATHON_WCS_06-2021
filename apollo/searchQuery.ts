import { gql } from '@apollo/client';

export const search = gql`
  query users($filter: bpchar) {
    User(
      where: {
        _or: [
          { firstname: { _ilike: $filter } }
          { lastname: { _ilike: $filter } }
          { user_jobs: { Job: { label: { _ilike: $filter } } } }
          { user_squads: { Squad: { name: { _ilike: $filter } } } }
        ]
      }
    ) {
      id
      firstname
      lastname
    }
  }

  query squads($filter: bpchar) {
    Squad(
      where: {
        _or: [
          { name: { _ilike: $filter } }
          { BusinessSector: { name: { _ilike: $filter } } }
        ]
      }
    ) {
      id
      name
      business_id
    }
  }
`;
