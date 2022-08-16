

const summarize = (...numbers) => {
    let nums = numbers.filter(item => Number.isInteger(item)).map((item) => (Number.isSafeInteger(item) ? item : BigInt(item)));
    if (nums.some((item) => typeof item === 'bigint')) {
        nums = nums.map(item => BigInt(item))
    }
    return nums.reduce((previousValue, currentValue) =>(previousValue+currentValue));

}
    

export default summarize;
