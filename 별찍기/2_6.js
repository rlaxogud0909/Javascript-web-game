/*
********* (9개)
 *******  (7개)
  *****   (5개)
   ***    (3개)
    *     (1개)
*/

for (var star = 9; star >= 1; star -= 2) {
    console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star))
}
