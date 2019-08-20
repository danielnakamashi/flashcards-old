import React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet/components/Grommet';
import configureMockStore from 'redux-mock-store';
import { render, cleanup } from '@testing-library/react';
import Topics from './Topics';
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

describe.only('Topics page', () => {
  it('Shows topic title input', () => {
    const store = mockStore({ user: userMock, topics: [] });
    const { getByLabelText } = render(
      <Provider store={store}>
        <Grommet plain full>
          <Topics />
        </Grommet>
      </Provider>,
    );

    expect(getByLabelText('Topics Title')).toBeInTheDocument();
  });
});
