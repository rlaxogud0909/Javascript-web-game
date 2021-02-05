var word = '시작';

while(true) { 
    var answer = prompt(word);
    if (answer === '포기') { break; } // 게임 
    //word의 끝 단어와 answer의 첫단어가 동일하면
    if (word[word.length - 1] === answer[0]) {
        // 정답
        alert('yes');
        word = answer;
    } else {
        //오답
        alert('no');
    }
}
