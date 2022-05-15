const solution = (tickets) => {
    const isVisited = Array(tickets.length).fill(0);
    const route = ['ICN'], res = [];

    const DFS = (depth, from) => {
        // 티켓을 모두 사용하면 res 배열에 담는다.
        if (depth === tickets.length) {
            res.push(route.join(''));
            return;
        }

        for (let i = 0; i < tickets.length; i += 1) {
            const [src, dest] = tickets[i];
            // 어떤 지점에 방문했는데 해당 지점에서 출발하는 티켓이 없을 수도 있다
            // 방문하지 않았고 시작 지점과 티켓의 출발지가 같다면
            if (!isVisited[i] && from === src) {
                isVisited[i] = 1;
                route.push(dest);
                DFS(depth + 1, dest);
                route.pop();
                isVisited[i] = 0;
            }
        }
    }

    DFS(0, 'ICN');
    res.sort();
    console.log(res[0].match(/.{3}/g));
}

solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])
solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]], ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"])