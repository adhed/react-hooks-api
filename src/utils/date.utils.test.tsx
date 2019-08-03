import { formatDate } from './date.utils';

describe('date utils', () => {
  it('should format date properly', () => {
    const date = '2019-07-17T15:55:30+00:00';
    const expectedDate = '7/17/2019';

    expect(formatDate(date)).toBe(expectedDate);
  });

  it('should return a wrong date string when date is not passed', () => {
    expect(formatDate('')).toBe('Wrong date');
  });
});
