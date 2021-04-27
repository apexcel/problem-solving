#include <iostream>
#include <vector>
#include <string>
#include <cstring>

#define pii pair<pair<int, int>, int>
#define INF 987654321

using namespace std;

int vertices, road, wormhole;
int from, to, weight;

string ans;
vector<pii> list;

void bellman_ford(int v)
{
    int dist[v + 1];
    memset(dist, INF, sizeof(dist));
    dist[1] = 0;

    for (int i = 0; i < v; i++)
    {
        for (int j = 0; j < list.size(); j++)
        {
            int from = list[j].first.first;
            int to = list[j].first.second;
            int weight = list[j].second;

            if (dist[from] == INF)
                continue;
            if (dist[to] > dist[from] + weight)
                dist[to] = dist[from] + weight;
        }
    }
    for (int i = 0; i < list.size(); i++)
    {
        int from = list[i].first.first;
        int to = list[i].first.second;
        int weight = list[i].second;
        if (dist[from] == INF)
            continue;
        if (dist[to] > dist[from] + weight)
        {
            cout << "YES" << endl;
            return;
        }
    }
    cout << "NO" << endl;
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int tc;
    cin >> tc;

    while (tc--)
    {
        cin >> vertices >> road >> wormhole;

        list.clear();
        for (int i = 0; i < road; i++)
        {
            cin >> from >> to >> weight;
            list.push_back(make_pair(make_pair(from, to), weight));
            list.push_back(make_pair(make_pair(to, from), weight));
        }
        for (int i = 0; i < wormhole; i++)
        {
            cin >> from >> to >> weight;
            list.push_back(make_pair(make_pair(from, to), (-1 * weight)));
        }

        bellman_ford(vertices);
    }
}