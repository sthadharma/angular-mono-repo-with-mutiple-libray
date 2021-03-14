import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
  let pipe: CamelCasePipe;

  beforeEach(() => { pipe = new CamelCasePipe(); });

  it('should return camelcase', () => { expect(pipe.transform('foo bar')).toEqual('fooBar'); });

  it('should camelcase when there is a new value',
    () => { expect(pipe.transform('foo bar')).toEqual('fooBar'); });

  it('should camelcase when there is a new value',
    () => { expect(pipe.transform('foo-bar', '-')).toEqual('fooBar'); });

  it('should camelcase when there is a new value',
    () => { expect(pipe.transform('foo*bar', '*')).toEqual('fooBar'); });

  it('should not support other objects',
    () => { expect(() => pipe.transform(<any>{})).toThrowError(); });
});
