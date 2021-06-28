import { gql } from '@apollo/client';

export const getAllSectors = gql`
  query sectorQuery {
    BusinessSector {
      id
      name
      Jobs {
        id
        label
      }
    }
  }
`;

export const getOneSector = gql`
  query user($id: uuid!){
    User_by_pk(id: $id){
      id,
      firstname,
      lastname,
      email
    }
    }
  }
`;

export const createSector = gql`
  mutation sectorCreated($object: BusinessSector_insert_input!) {
    insert_BusinessSector_one(object: $object) {
      id
      name
    }
  }
`;

export const updateSector = gql`
  mutation updateUser($id: uuid!, user: User_set_input){
    update_User_by_pk(pk_columns: {$id}, _set: $user){
      id,
      firstname,
      lastname,
      email
    }
    }
`;
