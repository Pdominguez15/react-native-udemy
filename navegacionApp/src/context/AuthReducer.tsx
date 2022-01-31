import {types} from '@babel/core';
import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'logOut'}
  | {type: 'changeUsername'; payload: string}
  | {type: 'changeFavIcon'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case 'logOut':
      return {
        isLoggedIn: false,
      };

    case 'changeUsername': {
      return {
        ...state,
        username: action.payload,
      };
    }

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    default:
      return state;
  }
};
