import React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, cleanup, act } from '@testing-library/react';
import AuthGateway from './AuthGateway';
import '@testing-library/jest-dom/extend-expect';

const middlewares: Redux.Middleware[] = [];
const mockStore = configureMockStore(middlewares);
const userMock = {
  displayName: 'displayName',
  email: 'email',
  phoneNumber: null,
  photoURL: null,
  providerId: '1',
  uid: '1',
};
const AuthComponent = () => <div>Authenticated</div>;
const UnauthComponent = () => <div>Unauthenticated</div>;

afterEach(cleanup);

describe('AuthGateway', () => {
  it('renders Authenticated page when user is set', () => {
    const store = mockStore({ user: userMock });

    const { getByText } = render(
      <Provider store={store}>
        <AuthGateway authComponent={AuthComponent} anonymousComponent={UnauthComponent} />
      </Provider>,
    );

    expect(getByText('Authenticated')).toBeInTheDocument();
  });

  it('renders Unauthenticated page when user is not set', () => {
    const store = mockStore({ user: null });
    const { getByText } = render(
      <Provider store={store}>
        <AuthGateway authComponent={AuthComponent} anonymousComponent={UnauthComponent} />
      </Provider>,
    );

    expect(getByText('Unauthenticated')).toBeInTheDocument();
  });
});
