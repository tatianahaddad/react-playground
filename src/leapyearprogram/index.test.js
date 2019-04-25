import leapYear from './index';

it ('should not be a leap year if it is divisible by 4, not 100', () => {
  const input = 1984;
  const expectedOutput = true;
  expect(leapYear(input)).toBe(expectedOutput);
});