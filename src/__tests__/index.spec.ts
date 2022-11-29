import { renderHook } from '@testing-library/react-hooks';
import { useRapid7 } from '../index';

describe('Tests useRapid7', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it('should throw an error if no API key is provided', () => {
    const { result } = renderHook(() => useRapid7(''));

    expect(() => {
      result.current.error('');
    }).toThrowError('Token is required.');
  });

  it('should call for an info log', () => {
    const { result } = renderHook(() => useRapid7('custom-key'));

    const spyInfo = jest.spyOn(result.current, 'info');

    result.current.info('info message');

    expect(spyInfo).toHaveBeenCalledWith('info message');
  });

  it('should call for a warn log with an object', () => {
    const { result } = renderHook(() => useRapid7('custom-key'));

    const spyWarn = jest.spyOn(result.current, 'warn');

    const objectForTheMessage = { test: 'info message within an object:' };

    result.current.warn(objectForTheMessage);

    expect(spyWarn).toHaveBeenCalledWith(objectForTheMessage);
  });

  it('should call for a simple log with an object', () => {
    const { result } = renderHook(() => useRapid7('custom-key'));

    const spyLog = jest.spyOn(result.current, 'log');

    const objectForTheMessage = { test: 'info message within an object:' };

    result.current.log(objectForTheMessage);

    expect(spyLog).toHaveBeenCalledWith(objectForTheMessage);
  });

  it('should call for an error log with an object', () => {
    const { result } = renderHook(() => useRapid7('custom-key'));

    const spyError = jest.spyOn(result.current, 'error');

    const objectForTheMessage = { test: 'info message within an object:' };

    result.current.error(objectForTheMessage);

    expect(spyError).toHaveBeenCalledWith(objectForTheMessage);
  });
});
