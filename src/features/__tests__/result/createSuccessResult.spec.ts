import { createSuccessResult, isSuccessResult } from '../../result';

describe('src/features/result.ts createSuccessResult TestCase', () => {
  type Email = `${string}@${string}`;

  type User = {
    email: Email;
    name: string;
  };

  const isEmail = (value: unknown): value is Email => {
    if (typeof value !== 'string') {
      return false;
    }

    return value.includes('@');
  };

  it('should return a return type', () => {
    const user = {
      email: 'moko-cat@exmple.com',
      name: 'Mkoko',
    } as const;

    const result = createSuccessResult<User>(user);

    expect(isSuccessResult(result)).toBeTruthy();
    expect(isEmail(result.value.email)).toBeTruthy();
    expect(result.value.email).toStrictEqual(user.email);
    expect(result.value.name).toStrictEqual(user.name);
  });
});
