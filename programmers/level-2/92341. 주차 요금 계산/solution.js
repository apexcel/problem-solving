const parseTime = str => {
    const [hh, mm] = str.split(':').map(Number);
    return hh * 60 + mm;
}

const parseFormat = str => {
    const [time, plate, type] = str.split(' ');
    return {
        time: parseTime(time),
        plate,
        type,
    }
}

const template = fees => {
    const [defaultMinute, defaultFee, perMinute, perFee] = fees;
    return (accumulated) => {
        if (accumulated <= defaultMinute) return defaultFee;
        return defaultFee + (Math.ceil((accumulated - defaultMinute) / perMinute) * perFee)
    }
}

function solution(fees, records) {
    const parsedData = records.map(parseFormat).sort((a, b) => a.plate - b.plate);
    const closedTime = parseTime('23:59');
    const calc = template(fees);

    const acc = new Map();
    for (let datum of parsedData) {
        const { time, plate, type } = datum;
        const exist = acc.has(plate) ? acc.get(plate) : { enter: time, total: 0 };
        if (type === 'IN') {
            acc.set(plate, { ...exist, enter: time })
        }
        else {
            acc.set(plate, { ...exist, total: exist.total + time - exist.enter, enter: -1 });
        }
    }

    const res = [];
    acc.forEach(({ total, enter }) => res.push(enter > -1 ? calc(total + (closedTime - enter)) : calc(total)));
    return res;
}
