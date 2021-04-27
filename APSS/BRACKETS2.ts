import { getInput } from './denoInput.ts'

function brackets2(brackets: string) {
    let bracketList = [...brackets];
    let stack = [];
    let closing = [...")}]"];

    for (let i = 0; i < bracketList.length; i += 1) {
        if (bracketList[i].match(/\(/) || bracketList[i].match(/\{/) || bracketList[i].match(/\[/)) {
            stack.push(bracketList[i]);
        }
        else {
            if (stack.length < 1) return false;
            if (closing.findIndex(el => el !== bracketList[i]) < 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(brackets2('()()({[{}]})'))
console.log(brackets2(')({}'))
console.log(brackets2('({}()'))
