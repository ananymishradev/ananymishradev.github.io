---
title: "We Can Solve Something Hard"
description: "CUDA kernels, Go services, and the glue that keeps a cluster honest."
---

I write systems code. CUDA kernels, Go services, and the small pieces of glue that keep a cluster honest.

[CUDA-Kernels](https://github.com/ananymishradev/CUDA-Kernels) is the kernel lab, and it is still growing. Tiled GEMM at **91% of cuBLAS** in single precision: 128×128 blocks, 8×8 per thread, everything staged through shared memory. Reductions, scans and a couple of attention kernels are queued behind it. A kernel earns its place on the flame graph, not in the README.

[Tron](https://github.com/ananymishradev/Tron) pushes a million particles through a 6 GB laptop card, because a profiler is cheaper than an A100. CUDA integration, a uniform-grid broadphase, a hand-written SDL2/OpenGL renderer, and counters I can point at when somebody says the frame drop is probably the driver.

[Sluice](https://github.com/ananymishradev/sluice) sits between OpenFOAM and SLURM: preflight the case, cache what can be cached, submit, supervise, and never spend a queue slot on a case that was going to die in the first minute.

[Iacon](https://github.com/ananymishradev/Iacon) is the one in the workshop. An incident responder for agent stacks, written in Go: the `/live`, `/ready` and `/health` contract, 1 Hz probes, Prometheus windows, tri-state evidence, deterministic rules, and a chaos harness that runs the old version and the new one through the same bad afternoon.

I like the part where the number moves and the log stops lying.

I have room for a couple of projects at a time, and the first call is a flame graph, not a pitch.

## Getting in touch

- [GitHub](https://github.com/ananymishradev) — all of the above, in source
- [LinkedIn](https://www.linkedin.com/in/ananymishradev) - If you got something for me.
- [X](https://twitter.com/ananymishradev) - new account, more frequently updated
- [Email](mailto:anany.mishra.dev@gmail.com)

> [!TIP]
> Send the shape of your pipeline and the GPU you are on. A rough answer with those two facts beats a perfect answer without them.
