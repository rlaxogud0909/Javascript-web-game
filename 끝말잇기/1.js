var word = '시작';

while(true) { 
    var answer = prompt(word);
    if (answer === '포기') { break; }
    if (word[word.length - 1] === answer[0]) {
        alert('yes');
        word = answer;
    } else {
        alert('no');
    }
}
