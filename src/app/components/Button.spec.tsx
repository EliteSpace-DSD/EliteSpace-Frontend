import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react'
import Button from './Button';

test('Button', () => {
    const element = render(<Button buttonLabel="test button"/>);
    expect(element).toMatchSnapshot();
})