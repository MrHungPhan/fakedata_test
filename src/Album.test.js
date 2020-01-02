import React from 'react';
import { render, cleanup } from '@testing-library/react';
import axios from 'axios';

import Album from './Album';

afterEach(() => cleanup());

jest.mock('axios');

describe('<Album />', () => {
  test('should render component', () => {
    const { container, debug } = render(<Album />);
    const getData = jest.spyOn(axios, 'get');
  })
})