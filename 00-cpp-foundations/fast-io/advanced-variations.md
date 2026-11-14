# Fast I/O — Advanced Variations

## 1. Memory-Mapped File I/O (`mmap` on Linux)
For maximum throughput on extreme offline judge inputs ($10^7$ integers in $< 0.05$ s):
Instead of reading through streams, map the entire input file into the process virtual address space:
```cpp
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

struct MemoryMappedInput {
    char* data;
    size_t size;
    size_t ptr = 0;

    MemoryMappedInput() {
        struct stat st;
        fstat(0, &st);
        size = st.st_size;
        data = (char*)mmap(nullptr, size, PROT_READ, MAP_PRIVATE, 0, 0);
    }

    int64_t next_int() {
        while (ptr < size && data[ptr] <= ' ') ptr++;
        int64_t res = 0;
        bool neg = false;
        if (data[ptr] == '-') { neg = true; ptr++; }
        while (ptr < size && data[ptr] >= '0' && data[ptr] <= '9') {
            res = res * 10 + (data[ptr++] - '0');
        }
        return neg ? -res : res;
    }
};
```
Zero buffer copies, zero kernel transitions after initialization!
