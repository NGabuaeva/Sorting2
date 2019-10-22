function split(array) {
  if (array.length === 0) {
    return array
  }
  const middle = Math.floor(array.length / 2)
  const arr1 = array.slice(0, middle)
  const arr2 = array.slice(middle)
  return [arr1, arr2]
}


function merge(arr1, arr2) {
  let arr3 = []
  let left = 0
  let right = 0
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      arr3.push(arr1[left])
      left++
    } else {
      arr3.push(arr2[right])
      right++
    }
  } if (left < arr1.length) {
    arr3 = [...arr3, ...(arr1.slice(left))]
  }
  if (right < arr2.length) {
    arr3 = [...arr3, ...(arr2.slice(right))]
  }

  return arr3
}


function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  const splitArr = split(array)
  let arr1 = splitArr[0]
  arr1 = mergeSort(arr1)

  let arr2 = splitArr[1]
  arr2 = mergeSort(arr2)

  console.log('arr1:', arr1)
  console.log('arr2', arr2)
  return merge(arr1, arr2)
}
