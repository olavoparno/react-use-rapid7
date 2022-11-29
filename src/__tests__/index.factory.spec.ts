import { renderHook } from '@testing-library/react-hooks';
import { useRapid7Factory } from '../index';

describe('Tests useRapid7Factory', () => {
  it('should throw an error when init failure', async () => {
    const fakeR7Insight = {
      init: () => {
        throw new Error('Random failure');
      },
    };

    try {
      const { result } = renderHook(() =>
        useRapid7Factory(fakeR7Insight, 'custom-key')
      );

      result.current.error('Trying with failed initialization');
    } catch (error) {
      expect((error as Error).message).toEqual(
        'Error initializing R7Insight: Random failure'
      );
    }
  });
});
