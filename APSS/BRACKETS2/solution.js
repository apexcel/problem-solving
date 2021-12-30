const solution = brackets => {
    const stack = [];
    const t = {
        '(' : 1,
        '{' : 2,
        '[' : 3,
        ')' : -1,
        '}' : -2,
        ']' : -3
    };

    for (let i = 0; i < brackets.length; i += 1) {
        const b = brackets[i];
        if (b === '(' || b === '{' || b === '[') stack.push(t[b]);
        else {
            const top = stack.pop();
            if (top + t[b] !== 0) return false;
        }
    }

    return !stack.length;
}