export const toWords = (digit) => {
  var ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  var tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  var teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const cases = [digit];
  function convert_hundreds(num) {
    if (num > 99) {
      return (
        ones[Math.floor(num / 100)] + ' hundred ' + convert_tens(num % 100)
      );
    } else {
      return convert_tens(num);
    }
  }

  function convert_tens(num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else {
      return tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
    }
  }

  function convert(num) {
    if (num == 0) return 'zero';
    else return convert_hundreds(num);
  }

  for (var i = 0; i < cases.length; i++) {
    let word = convert(cases[i]);
    word = word.toLocaleUpperCase();
    return word;
  }
};
