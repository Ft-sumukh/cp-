/**
 * Algorithm: Dijkstra's Single-Source Shortest Paths
 * Language: C++20
 * Optimization: -std=c++20 -O2 -Wall -Wextra
 * Complexity: O((V + E) * log V)
 */

#include <iostream>
#include <vector>
#include <queue>
#include <cstdint>
#include <limits>
#include <algorithm>

using i64 = int64_t;
constexpr i64 INF = std::numeric_limits<i64>::max() / 2;

struct Edge {
    int to;
    i64 weight;
};

// Returns pair: {distances vector, parent vector for path reconstruction}
std::pair<std::vector<i64>, std::vector<int>> dijkstra(
    int num_vertices, 
    int source, 
    const std::vector<std::vector<Edge>>& adj
) {
    std::vector<i64> dist(num_vertices + 1, INF);
    std::vector<int> parent(num_vertices + 1, -1);

    // Min-priority queue storing {distance, vertex}
    using Element = std::pair<i64, int>;
    std::priority_queue<Element, std::vector<Element>, std::greater<Element>> pq;

    dist[source] = 0;
    pq.push({0, source});

    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();

        // Stale entry check (lazy deletion)
        if (d > dist[u]) {
            continue;
        }

        for (const auto& edge : adj[u]) {
            int v = edge.to;
            i64 w = edge.weight;

            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                parent[v] = u;
                pq.push({dist[v], v});
            }
        }
    }

    return {dist, parent};
}

// Reconstruct path from source to target vertex
std::vector<int> reconstruct_path(int target, const std::vector<int>& parent) {
    std::vector<int> path;
    for (int curr = target; curr != -1; curr = parent[curr]) {
        path.push_back(curr);
    }
    std::reverse(path.begin(), path.end());
    return path;
}

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int n = 4; // Vertices 1, 2, 3, 4
    std::vector<std::vector<Edge>> adj(n + 1);

    // Add directed weighted edges
    adj[1].push_back({2, 4});
    adj[1].push_back({3, 2});
    adj[3].push_back({2, 1});
    adj[2].push_back({4, 5});
    adj[3].push_back({4, 8});

    auto [dist, parent] = dijkstra(n, 1, adj);

    std::cout << "Shortest distances from node 1:\n";
    for (int i = 1; i <= n; ++i) {
        std::cout << "Node " << i << ": " << dist[i] << "\n";
    }

    auto path_to_4 = reconstruct_path(4, parent);
    std::cout << "Shortest path to Node 4: ";
    for (int v : path_to_4) std::cout << v << " ";
    std::cout << "\n"; // Expected: 1 -> 3 -> 2 -> 4 (Distance: 2 + 1 + 5 = 8)

    return 0;
}
