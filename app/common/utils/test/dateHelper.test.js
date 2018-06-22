import { formatDateTimeByString } from '../dateHelper';

describe('dateHelper', () => {
  test('formatDateTimeByString', () => {
    // success case
    expect(formatDateTimeByString(
      new Date('2018-01-20').toUTCString(),
      'Y'
    )).toBe('2018');
    // test fail case
    expect(formatDateTimeByString('', '')).toBe('');
  });
});
