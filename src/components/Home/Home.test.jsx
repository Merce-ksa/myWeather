import React from 'react';
import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from './Home';

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
            <Home />
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
            <Home />
          </MemoryRouter>, container
        );
      });

      const input = document.getElementById('searcher');
      fireEvent.change(input, { target: { value: 'location' } });
      expect(input.value).toBe('location');
    });
  });
});
