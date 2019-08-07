import React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, cleanup } from '@testing-library/react';
import App from './App';
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

afterEach(cleanup);

describe('App', () => {
  it('renders Topic page when user is not set', () => {
    const store = mockStore({ user: userMock });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('renders Login page when user is not set', () => {
    const store = mockStore({ user: null });

    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByTestId('firebase-login')).toBeInTheDocument();
  });
});
