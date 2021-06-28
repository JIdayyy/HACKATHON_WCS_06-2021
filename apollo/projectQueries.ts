import { gql } from '@apollo/client';

export const allProjects = gql`
  query projects {
    Project {
      id
      name
      url
      Pictures {
        url
      }
    }
  }
`;

export const oneProject = gql`
  query project($id: uuid!) {
    Project_by_pk(id: $id) {
      id
      name
      description
      url
    }
  }
`;
