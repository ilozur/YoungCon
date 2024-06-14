function scan(map) {
    const result = {
        ceil: 0,
        floor: 0,
        both: 0
    };
    
    if (map.length === 0) return result;
    let scanned = false;

    function recursionScan(i, j, direction) {
        map[i][j] = 0;

        const neighbors = [
            [i - 1, j],
            [i + 1, j],
            [i, j - 1],
            [i, j + 1]
        ];

        for (const [iElement, jElement] of neighbors) {
            if (iElement >= 0 && iElement < map.length && jElement >= 0 && jElement < map[0].length && map[iElement][jElement]) {
                recursionScan(iElement, jElement, direction);
            }
        }

        if (direction && i === map.length - 1 && !scanned) {
            result.both++;
            scanned = true;
        }
    }

    function levelScan(startRow, isCeil) {
        for (let i = 0; i < map[0].length; i++, scanned = false) {
            if (map[startRow][i]) {
                recursionScan(startRow, i, isCeil ? 1 : 0);
                isCeil ? result.ceil++ : result.floor++;
            }
        }
    }

    levelScan(0, true);
    levelScan(map.length - 1, false);

    result.ceil -= result.both;

    return result;
}

module.exports = { scan };