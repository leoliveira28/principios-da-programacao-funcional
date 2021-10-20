function ordenar(array) {
    return [...array].sort()
}

const nums = [9, 8, 7, 6, 5, 4]
const numsOrdenados = ordenar(nums)
console.log(numsOrdenados)
console.log(nums)