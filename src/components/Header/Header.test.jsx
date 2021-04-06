import React from 'react';
import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      cityName: 'Barcelona',
      units: 'metric'
    }
  })
}));

describe('Given a Header function', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('header');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When is invoked', () => {
    test('Then input value will changes', () => {
      act(() => {
        render(
          <MemoryRouter
            initialEntries={[{ pathname: '/weather', state: { cityName: 'London', units: 'metric' } }]}
          >
            <Header />
          </MemoryRouter>, container
        );
      });

      expect().toEqual('London');
    });
  });

  xdescribe('When is invoked', () => {
    test('Then input value will changes', () => {
      act(() => {
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>, container
        );
      });

      const input = document.getElementById('searcher-header');
      fireEvent.change(input, { target: { value: 'location' } });
      expect(input.value).toBe('location');
    });
  });
});

// Then will display three anchors
