import { describe, it, expect} from 'vitest';
import { generateUsers, toUpperCase } from '../helpers';
describe('helpers suite', () => {
  it('should generate empty array', () => {
    const users = generateUsers(0);

    expect(users).toEqual([]);
  })
  it('should generate 1 user', () => {
    const users = generateUsers(1);

    expect(users).toEqual([{
      "id": 0,
      "username": "User 0",
    }]);
  })
  it('should convert string to upper case', () => {
    expect(toUpperCase('hello world')).toBe('HELLO WORLD')
  })
})