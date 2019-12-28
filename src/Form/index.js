import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import FormContainer from './styles';

const GET_CURRENT_USER = gql`
  {
    user(login: "lashaunnas") {
      name
      email
    }
  }
`;

const Form = () => (
  <FormContainer>
    <h1>hey</h1>
  </FormContainer>
);

export default Form;
