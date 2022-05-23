const nums = [1]
nums.push(12)
nums.unshift(3)
console.log(nums) // Will print [3, 1, 12

const nums = [99, 199, 299]
// Add a new item at the second position without deleting any existing items
nums.splice(1, 0, 399)
console.log(nums) // Will print [99, 399, 199, 299]

const nums = [10, 20, 30, 40]
nums.pop()
nums.pop()
nums.shift()
console.log(nums) // Will print [20]

const nums = [99, 199, 299]
// Remove the second item in the list
nums.splice(1, 1)
console.log(nums) // Will print [99, 299]
