#include <iostream>
#include <vector>
#include <queue>
using namespace std;

#define PII pair<int, int>

priority_queue<PII, vector<PII>, greater<PII>> dist;

int Prim(vector<PII> graph[], bool is_visited[])
{
    int sum = 0;

    dist.push(PII(0, 1));
    while (!dist.empty())
    {
        int node = dist.top().second;
        int weight = dist.top().first;
        dist.pop();

        if (!is_visited[node])
        {
            is_visited[node] = true;
            sum += weight;
            for (int i = 0; i < graph[node].size(); ++i)
            {
                int next = graph[node][i].first;
                if (!is_visited[next])
                    dist.push(PII(graph[node][i].second, graph[node][i].first));
            }
        }
    }
    return sum;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int V, E;
    cin >> V >> E;
    bool is_visited[V + 1] = {
        false,
    };
    vector<PII> graph[V + 1];

    for (int i = 0; i < E; ++i)
    {
        int u, v, w;
        cin >> u >> v >> w;
        graph[u].push_back(PII(v, w));
        graph[v].push_back(PII(u, w));
    }

    cout << Prim(graph, is_visited);
    return 0;
}