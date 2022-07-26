module.exports = function toReadable(number) {
    let arr = number.toString().split('');
    if (arr.length === 1) {
        if (arr[0] === '0') { return 'zero' };
        return returnOneDigitNumber(arr[0]);
    }
    else if (arr.length === 2) {
        if (arr[0] === '1') {
            return returnNumberOfSecondDecade(arr[0], arr[1]);
        }
        else {
            return (returnStartDecadeNumbers(arr[0]) + returnOneDigitNumber(arr[1], ' '));
        }
    }
    else {
        if (arr[1] === '1') {
            return (returnHundreds(arr[0]) + returnNumberOfSecondDecade(arr[1], arr[2], ' '));
        }
        else {
            return (returnHundreds(arr[0]) + returnStartDecadeNumbers(arr[1], ' ') + returnOneDigitNumber(arr[2], ' '));
        }
    }
    function returnOneDigitNumber(number, space = '') {
        switch (+(number)) {
            case 0:
                return '';
            case 1:
                return space + 'one';
            case 2:
                return space + 'two';
            case 3:
                return space + 'three';
            case 4:
                return space + 'four';
            case 5:
                return space + 'five';
            case 6:
                return space + 'six';
            case 7:
                return space + 'seven';
            case 8:
                return space + 'eight';
            case 9:
                return space + 'nine';
            default:
                return 'It is not a Number!';
        }
    }
    function returnNumberOfSecondDecade(num1, num2, space = '') {
        let number = num1 + num2;
        switch (+(number)) {
            case 10:
                return space + 'ten';
            case 11:
                return space + 'eleven';
            case 12:
                return space + 'twelve';
            case 13:
                return space + 'thirteen';
            case 14:
                return space + 'fourteen';
            case 15:
                return space + 'fifteen';
            case 16:
                return space + 'sixteen';
            case 17:
                return space + 'seventeen';
            case 18:
                return space + 'eighteen';
            case 19:
                return space + 'nineteen';
            default:
                return 'It is not a Number!';
        }
    }
    function returnStartDecadeNumbers(number, space = '') {
        switch (+(number)) {
            case 0:
                return '';
            case 2:
                return space + 'twenty';
            case 3:
                return space + 'thirty';
            case 4:
                return space + 'forty';
            case 5:
                return space + 'fifty';
            case 6:
                return space + 'sixty';
            case 7:
                return space + 'seventy';
            case 8:
                return space + 'eighty';
            case 9:
                return space + 'ninety';
            default:
                return 'It is not a Number!';
        }
    }
    function returnHundreds(number) {
        switch (+(number)) {
            case 1:
                return 'one hundred';
            case 2:
                return 'two hundred';
            case 3:
                return 'three hundred';
            case 4:
                return 'four hundred';
            case 5:
                return 'five hundred';
            case 6:
                return 'six hundred';
            case 7:
                return 'seven hundred';
            case 8:
                return 'eight hundred';
            case 9:
                return 'nine hundred';
            default:
                return 'It is not a Number!';
        }
    }
}

