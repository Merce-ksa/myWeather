import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      cityName: 'Barcelona',
      units: 'imperial'
    }
  })
}));

describe('Given a Home function', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('main');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When is invoked', () => {
    test('Then will display a anchor', () => {
      act(() => {
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>, container
        );
      });

      const cont = container.querySelectorAll('input');

      expect(cont.length).toBe(1);
    });

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

    test('Should toggles an a Imperial units on when link is clicked', () => {
      act(() => {
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>, container
        );
      });

      const imperialLink = screen.getByText('Imperial: ºF, mph');
      fireEvent.click(imperialLink, { button: 1 });
      expect(imperialLink.className).toBe('units-btn--active units-btn');
    });
  });
});
