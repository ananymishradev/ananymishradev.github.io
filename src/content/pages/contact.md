---
title: "We Can Solve Something Hard"
description: "Performance engineering for heavy multi-modal pipelines: custom C++ and CUDA kernels, smaller VRAM footprints, smaller GPU bills."
---

I am a Performance Engineer. I have observed many organizations are running heavy multi-modal pipelines.

I specialize in squeezing PyTorch models into custom C++/CUDA kernels.

I have a few fractional slots open to help startups optimize their VRAM footprints or slash their GPU cloud bills.

## What that looks like in practice

Not slideware. The work is public, and the numbers come with it:

- [Tron](https://github.com/ananymishradev/Tron) — particle and rigid-body simulation in CUDA with a hand-written SDL2/OpenGL renderer, profiled on a 6 GB card instead of an A100.
- [CUDA-Matrix-Multiplication](https://github.com/ananymishradev/CUDA-Matrix-Multiplication) — hand-written tiled GEMM at **91% of cuBLAS** in single precision. The same discipline that shrinks a kernel shrinks a bill.
- [Kneepoint](https://github.com/ananymishradev/Kneepoint) — where a 1.5B model stops keeping up on 6 GB: FP16 against AWQ-Int4 and GPTQ-Int4, TTFT, inter-token latency, and projected dollars per million tokens.
- [sluice](https://github.com/ananymishradev/sluice) — preflight, cache and supervise OpenFOAM jobs on a shared SLURM cluster, so a queue slot is never spent on a case that was going to fail anyway.

## Getting in touch

Tell me the model, the card, and the bill. I will tell you which one is the problem.

- [GitHub](https://github.com/ananymishradev) — everything above, in source
- [LinkedIn](https://www.linkedin.com/in/ananymishradev)
- [X](https://twitter.com/ananymishradev)
- [Email](mailto:anany.mishra.real@gmail.com)

> [!TIP]
> Include the shape of your pipeline and the GPU you are on. A rough answer with those two facts beats a perfect answer without them.
