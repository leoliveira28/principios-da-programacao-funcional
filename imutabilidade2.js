// FUNÇÃO RECURSIVA
const nums = [1, 2, 3, 4, 5, 6, 7, 8]

function somarArray(array, total = 0) {
    if (array.length === 0) {
        return total
    }
    return somarArray(array.splice(1), total + array[0])
}

const total = somarArray(nums)
console.log(total)