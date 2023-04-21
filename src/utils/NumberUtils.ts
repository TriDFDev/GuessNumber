const countCorrectPositions = (num1: string, num2: string) => {
    return num1.split("").reduce((count, char, i) => {
        return char === num2[i] ? count + 1 : count
    }, 0)
}

const countCorrectDigits = (num1: string, num2: string) => {
    return num1.split("").reduce((count, char) => {
        return num2.includes(char) ? count + 1 : count
    }, 0)
}

export default {
    countCorrectPositions,
    countCorrectDigits
}