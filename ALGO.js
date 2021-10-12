let sentence = 'My name is Deji.';
function algo(sentence) {
    console.log('length of the sentence:' + sentence.length);
    console.log('number of words in the sentence:' + sentence.split(' ').length);
    //
    console.log('number of vowels in the sentence:' +(sentence.match(/[aeiou]/gi)).length);
}

console.log(algo(sentence));