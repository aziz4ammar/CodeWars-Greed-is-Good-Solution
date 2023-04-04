function score(dice) {
    const points = {1:1000, 6:600, 5:500, 4:400, 3:300, 2:200};
    const dices = dice.reduce(function(acc, curr) {
      acc[curr] ? acc[curr]++ : acc[curr] = 1;
      return acc;
    }, {});
  
    let tot = 0;
  
    for (const [k, v] of Object.entries(dices)) {
      if (v >= 3) {
        tot += points[k] * Math.floor(v / 3);
      }
      if (k == 1) {
        tot += 100 * (v % 3);
      } else if (k == 5) {
        tot += 50 * (v % 3);
      }
    }
  
    return tot;
  }
  