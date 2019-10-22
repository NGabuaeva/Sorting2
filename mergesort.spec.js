describe('Split Array function', function () {
  it('handles an empty array', function () {
    expect(split([])).toEqual([]);
  });
  it('is able to split an array into two halves', function () {
    expect(split([1, 45, 65, 89, 4, 7, 33, 27])).toEqual([[1, 45, 65, 89], [4, 7, 33, 27]])
  });
  it('works with odd-length arrays', function () {
    expect(split([1, 2, 4])).toEqual([[1], [2, 4]])
  })
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge([1, 18, 34, 57], [2, 4, 5, 6])).toEqual([1, 2, 4, 5, 6, 18, 34, 57])
  });
  it('works with odd-length arrays', function () {
    expect(merge([1, 18, 34, 57], [2, 4, 5, 6, 88])).toEqual([1, 2, 4, 5, 6, 18, 34, 57, 88])
  })
});








// describe('Merge Sort', function () {
//   it('handles an empty array', function () {
//     expect(mergeSort([])).toEqual([]);
//   });
//   it('handles an array with 1 element', function () {
//     expect(mergeSort([2])).toEqual([2]);
//   });
//   it('sorts an array of 2 elements', function () {
//     expect(mergeSort([2, 1])).toEqual([1, 2]);
//   });
//   it('handles negative numbers', function () {
//     expect(mergeSort([1, -1])).toEqual([-1, 1]);
//   });
//   it('sorts an array of 10 elements', function () {
//     expect(mergeSort([23, 16, 8, 15, 4, 42, 10, -7, 0, 100])).toEqual([
//       -7,
//       0,
//       4,
//       8,
//       10,
//       15,
//       16,
//       23,
//       42,
//       100,
//     ]);
//   });
// });
