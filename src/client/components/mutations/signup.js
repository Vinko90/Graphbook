import React, { Component } from 'react';
import { Mutation } from '@apollo/client/react/components';
import { gql } from '@apollo/client';

const SIGNUP = gql`
  mutation signup($email : String!, $password : String!, $username : String!) {
    signup(email : $email, password : $password, username : $username) {
    token
  }
}`;

export default class SignupMutation extends Component {
    render() {
        const { children, changeLoginState } = this.props;
        return (
            <Mutation
                update = {(store, { data: { signup } }) => {
                    if(signup.token) {
                        localStorage.setItem('jwt', signup.token);
                        changeLoginState(true);
                    }
                }}
                mutation={SIGNUP}
            >
                {(signup, { loading, error}) => 
                    React.Children.map(children, function(child) {
                        return React.cloneElement(child, { signup, loading, error });
                    })
                }
            </Mutation>
        )
    }
}
