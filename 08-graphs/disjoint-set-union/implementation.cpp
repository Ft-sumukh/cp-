/**
 * Data Structure: Disjoint Set Union (DSU / Union-Find)
 * Language: C++20
 * Features: Path Compression + Union by Size
 * Complexity: O(alpha(N)) amortized per operation
 */

#include <iostream>
#include <vector>
#include <numeric>
#include <utility>

class DSU {
private:
    std::vector<int> parent;
    std::vector<int> component_size;
    int num_components;

public:
    explicit DSU(int n) : parent(n + 1), component_size(n + 1, 1), num_components(n) {
        std::iota(parent.begin(), parent.end(), 0);
    }

    // Find with full path compression
    int find(int u) {
        if (parent[u] == u) {
            return u;
        }
        return parent[u] = find(parent[u]);
    }

    // Check if two elements belong to the same component
    bool connected(int u, int v) {
        return find(u) == find(v);
    }

    // Unite two components by size
    bool unite(int u, int v) {
        int root_u = find(u);
        int root_v = find(v);

        if (root_u == root_v) {
            return false; // Already in the same component
        }

        // Attach smaller component to larger component
        if (component_size[root_u] < component_size[root_v]) {
            std::swap(root_u, root_v);
        }

        parent[root_v] = root_u;
        component_size[root_u] += component_size[root_v];
        num_components--;

        return true;
    }

    // Get size of the component containing element u
    [[nodiscard]] int get_size(int u) {
        return component_size[find(u)];
    }

    // Get total number of active disjoint components
    [[nodiscard]] int count() const {
        return num_components;
    }
};

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int n = 5;
    DSU dsu(n);

    dsu.unite(1, 2);
    dsu.unite(3, 4);

    std::cout << "Connected(1, 2): " << (dsu.connected(1, 2) ? "YES" : "NO") << "\n"; // YES
    std::cout << "Connected(1, 3): " << (dsu.connected(1, 3) ? "YES" : "NO") << "\n"; // NO

    dsu.unite(2, 3);
    std::cout << "Connected(1, 4): " << (dsu.connected(1, 4) ? "YES" : "NO") << "\n"; // YES
    std::cout << "Size of component 1: " << dsu.get_size(1) << "\n";                   // 4
    std::cout << "Active components: " << dsu.count() << "\n";                         // 2 (Set {1,2,3,4} and Set {5})

    return 0;
}
