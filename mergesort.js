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
  // let extraNum
  // arr2.length > arr1.length ? extraNum = arr2[arr2.length - 1] : extraNum = null
  // if (extraNum) {
  //   if (extraNum > arr3[arr3.length - 1]) {
  //     arr3.push(extraNum)
  //   } else {
  //     let temp = arr3[arr3.length - 1]
  //     arr3[arr3.length - 1] = extraNum
  //     arr3.push(temp)
  //   }
  // }

  return arr3
}
