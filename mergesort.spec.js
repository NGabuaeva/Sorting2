describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with 1 element', function() {
    expect(bubbleSort([2])).toEqual([2]);
  });
  it('sorts an array of 2 elements', function() {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
  });
  it('handles negative numbers', function() {
    expect(bubbleSort([1, -1])).toEqual([-1, 1]);
  });
  it('sorts an array of 10 elements', function() {
    expect(bubbleSort([23, 16, 8, 15, 4, 42, 10, -7, 0, 100])).toEqual([
      -7,
      0,
      4,
      8,
      10,
      15,
      16,
      23,
      42,
      100,
    ]);
  });
});
