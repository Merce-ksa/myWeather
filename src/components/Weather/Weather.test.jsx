import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import Weather from './Weather';

jest.mock('axios');
jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      cityName: 'Barcelona',
      units: 'imperial'
    }
  })
}));

describe('Given a Weather function', () => {
  describe('When is rendered with Imperial units', () => {
    test('Then "ºF" is printed in temp-resum element', async () => {
      axios.get.mockResolvedValue({
        data: {
          name: 'Barcelona',
          coord: {
            lat: 41.3888,
            lon: 2.159
          },
          main: {
            feels_like: 15.11,
            humidity: 51,
            pressure: 1017,
            temp: 16.11,
            temp_max: 17.22,
            temp_min: 15.56
          },
          sys: {
            sunrise: '1617514154',
            sunset: '1617560342'
          },
          weather: [{
            id: 801, main: 'Clouds', description: 'algo de nubes', icon: '02d'
          }],
          wind: {}
        }
      });
      render(
        <Weather />
      );

      const { container } = await waitFor(() => render(<Weather />));

      expect(container.querySelector('.temp-resum').innerHTML).toBe('16.1 ºF');
    });

    test('Then "myWeather" title and "Barcelona" location are printed', async () => {
      axios.get.mockResolvedValue({
        data: {
          name: 'Barcelona',
          coord: {
            lat: 41.3888,
            lon: 2.159
          },
          main: {
            feels_like: 15.11,
            humidity: 51,
            pressure: 1017,
            temp: 16.11,
            temp_max: 17.22,
            temp_min: 15.56
          },
          sys: {
            sunrise: '1617514154',
            sunset: '1617560342'
          },
          weather: [{
            id: 801, main: 'Clouds', description: 'algo de nubes', icon: '02d'
          }],
          wind: {}
        }
      });
      render(
        <Weather />
      );

      const { container } = await waitFor(() => render(<Weather />));

      expect(container.querySelector('h1').innerHTML).toBe('myWeather');
      expect(container.querySelector('.city-title').innerHTML).toBe('Barcelona');
    });
  });
});
