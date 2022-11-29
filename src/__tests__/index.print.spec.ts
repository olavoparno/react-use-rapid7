import { renderHook } from '@testing-library/react-hooks';
import { useRapid7 } from '../index';

describe('Tests useRapid7 with print mode on', () => {
  it('should call for an info log with an object and print it to the console', () => {
    const { result } = renderHook(() =>
      useRapid7('custom-key2', { print: true })
    );

    console.info = jest.fn();
    const spyInfo = jest.spyOn(result.current, 'info');

    const objectForTheMessage = { test: 'info message within an object:' };

    result.current.info(objectForTheMessage);

    expect(spyInfo).toHaveBeenCalledWith(objectForTheMessage);
    expect(console.info).toHaveBeenCalledWith(
      expect.objectContaining({
        event: JSON.stringify(objectForTheMessage),
        level: 'INFO',
      })
    );
  });
});
