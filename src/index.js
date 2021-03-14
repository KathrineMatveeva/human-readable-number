module.exports = function toReadable(number) {
    let mapOne = new Map(
        [[1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine']]
    );
    let mapTwo = new Map(
        [[10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen']]
    );
    let mapThree = new Map(
        [[2, 'twenty'],
        [3, 'thirty'],
        [4, 'forty'],
        [5, 'fifty'],
        [6, 'sixty'],
        [7, 'seventy'],
        [8, 'eighty'],
        [9, 'ninety']]
    );
    let result = '';
    let hund = Math.trunc(number / 100)
    if (hund >= 1) {
        result += mapOne.get(hund) + ' hundred '
    };

    let ten = Math.trunc((number % 100) / 10)
    if (ten > 1) {
        result += mapThree.get(ten) + ' '
    };
    if (ten === 1) {

        result += mapTwo.get(number % 20);
        return result.trim();
    }
    let teen = number % 10;
    if (teen > 0) {
        result += mapOne.get(teen)
    }

    return (result === '' ? 'zero' : result).trim()


}

