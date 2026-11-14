# Disjoint Set Union — Advanced Variations

## 1. DSU with Rollbacks (Offline Dynamic Connectivity)
When you must undo merges (e.g. in divide-and-conquer over time), **path compression cannot be used** because it irreversibly mutates tree topology.
Instead, use **Union by Size only** (which guarantees $O(\log N)$ depth) and record state changes in a history stack:
```cpp
struct RollbackDSU {
    std::vector<int> parent, sz;
    std::vector<std::pair<int, int>> history; // {child, parent}

    void unite(int u, int v) {
        int root_u = find(u), root_v = find(v);
        if (root_u == root_v) return;
        if (sz[root_u] < sz[root_v]) std::swap(root_u, root_v);
        history.push_back({root_v, root_u});
        parent[root_v] = root_u;
        sz[root_u] += sz[root_v];
    }

    void rollback() {
        auto [child, par] = history.back();
        history.pop_back();
        sz[par] -= sz[child];
        parent[child] = child;
    }
};
```

---

## 2. Parity / Potential DSU (Bipartite Graph Testing)
Store potential `len[u]` representing distance to parent modulo 2. When checking if edge $(u, v)$ creates an odd cycle:
$$\text{find}(u) == \text{find}(v) \land \text{len}[u] == \text{len}[v] \implies \text{Odd cycle detected!}$$
