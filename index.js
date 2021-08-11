function superbowlWin(record) {
    const win = record.find(record => record.result === `W`);
    if(!!win === true) {
        return win.year;
    } else {
        return undefined;
    }
}