import { KebabCasePipe } from './kebab-case.pipe';

describe('KebabCasePipe', () => {
  let pipe: KebabCasePipe;

  beforeEach(() => { pipe = new KebabCasePipe(); });

  it('should return kebabCase', () => { expect(pipe.transform('foo bar')).toEqual('foo-bar'); });

  it('should kebabCase when there is a new value',
    () => { expect(pipe.transform('foo bar')).toEqual('foo-bar'); });

  it('should kebabCase when there is a new value',
    () => { expect(pipe.transform('FOO-BAR', '-')).toEqual('foo-bar'); });

  it('should kebabCase when there is a new value',
    () => { expect(pipe.transform('foo*bar', '*')).toEqual('foo-bar'); });

  it('should not support other objects',
    () => { expect(() => pipe.transform(<any>{})).toThrowError(); });
});
