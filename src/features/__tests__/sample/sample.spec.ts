import { sampleFunc } from '../../sample';

describe('src/features/sample.ts sampleFunc TestCase', () => {
  it('should return the greeting', () => {
    const expected = 'Hello Moko !!';

    expect(sampleFunc('Moko')).toStrictEqual(expected);
  });
});
