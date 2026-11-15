---
title: "About"
description: "Early, loud, and shipping: Anany Mishra on CUDA kernels, HPC job runners and agents built without a framework."
---

I am new to this. Not fake-new, the actual kind: I still reach for a search bar to remember how `epoll` ties to `poll`, I have rewritten the same scheduler three times, and my `git log` reads like a horror film with good lighting.

What I do have is a habit. When something looks like magic, I take it apart until it looks like arithmetic.

That habit is the whole bio. Everything below is the receipt.

## Things that should not work this well

### A physics engine that runs on the GPU

[Tron](https://github.com/ananymishradev/Tron) started from a stubborn question — how many particles can an RTX 3050 actually push when the CPU is not allowed to help? So the integration runs in CUDA, the broadphase is a uniform grid, and collisions happen where the data already lives. The renderer is hand-written SDL2 and OpenGL, because "the frame drop is probably the driver" is a much weaker sentence when you wrote the loop that dropped it.

It has profiling hooks and live counters. I built the meters before I built the fun part — half discipline, half refusing to be the person who says "works on my machine" with a straight face.

### A kernel lab that keeps NVIDIA honest

[CUDA-Kernels](https://github.com/ananymishradev/CUDA-Kernels) started as a one-line dare: how close can a tiled kernel get to cuBLAS? The answer, on my rig, is still **91% of cuBLAS in single precision** — 128×128 block, 8×8 per thread, shared-memory staging, the whole ladder from naive to near-library. Reductions, scans and a couple of attention kernels are queued behind it.

The number is the least interesting part. What stuck was why the tiling works, where the bank conflicts come from, and how much a single misplaced `__syncthreads` costs. That is the footgun that actually teaches you the memory model.

### A market data parser that measures itself

[UDP-Market-Data-Parser](https://github.com/ananymishradev/UDP-Market-Data-Parser) is small on purpose: 32-byte packets over localhost UDP, a mock generator that sprays them, and a consumer that parses them **zero-copy**. Structs are cache-aligned, sockets are non-blocking, and every packet carries its own latency sample from `rdtscp`. No framework, no allocation in the hot path, and no comfortable lie in the average — if p99 is ugly, the mean is just a press release.

### A job runner for people who share a cluster

[sluice](https://github.com/ananymishradev/sluice) is a Go tool that sits between OpenFOAM and SLURM: preflight the case, cache what can be cached, submit, supervise, and refuse to waste a queue slot on a mesh that was never going to converge. Tagged releases, a CI pipeline that is green more often than my local branch, and an OpenSSF scorecard badge I check more often than is healthy. It has never needed an LGTM from anyone but me, which is exactly the part I am trying to fix.

## The agent stuff

I build agents without frameworks, mostly to find out what the frameworks were hiding.

- [loupe](https://github.com/ananymishradev/loupe) — a read-only tutor for Claude Code, OpenCode and Copilot. It explains the bug and never edits a file. I built it because letting an agent write the fix taught me nothing about the fix.
- [agent_eval](https://github.com/ananymishradev/agent_eval) — layer-by-layer benchmarking on HotpotQA and GAIA Levels 2 and 3 over a local Ollama model. Each layer has to pay for itself in EM or F1, or it gets `git rm`'d.

### In the workshop

Two more are half-built in public. I would rather show the scaffolding than pretend it is finished.

- [HadesAI](https://github.com/ananymishradev/HadesAI) — a bare-metal agent, still early. No plugins, no orchestration library, a local `qwen3:0.6b`, and an opinionated eval loop plus an RL environment, because "it felt better" is not a measurement.
- [Iacon](https://github.com/ananymishradev/Iacon) — a verified incident responder in Go, working through its first implementation. The plan: the `/live`, `/ready` and `/health` contract, 1 Hz probes, Prometheus windows, tri-state evidence, deterministic rules, and a chaos harness that runs the same scenarios against the previous version so the newer one has to actually win.

## Benchmarks and other excuses to buy a smaller GPU

[Kneepoint](https://github.com/ananymishradev/Kneepoint) asks where a 1.5B model stops keeping up on a 6 GB card and what a million tokens cost there: FP16 against AWQ-Int4 and GPTQ-Int4, Poisson load sweeps, TTFT and inter-token latency, a projected dollar figure at the end.

[Tensors from Scratch](https://github.com/ananymishradev/Tensors-from-Srcatch) is the opposite direction. No PyTorch, no NumPy. Flat `Storage`, views defined by sizes and strides, `view` versus `reshape`, broadcasting, define-by-run autograd with saved tensors. If a tensor library is just memory plus arithmetic, I want to be able to prove it line by line.

And [High-Performance-Computing](https://github.com/ananymishradev/High-Performance-Computing) is how I got access to any of that: SLURM, Munge, SSH, a three-node Docker sandbox on one laptop, then the real cluster.

## What I am bad at

Plenty. Frontend layout still fights me. I write tests after the second rewrite, not the first, which is the exact yak shave I warn other people about. My commits are too large. I have bikeshedded a variable name for twenty minutes and then renamed it in review anyway. I have never had to defend a design in front of a paying customer, which is where the real opinions get formed.

## What I am doing about it

Reading the source instead of the tutorial. Writing down the number before the conclusion. Shipping in public, even when the README admits the benchmark is one laptop and a warm room.

If you want to argue about memory layouts, kernels or eval design, [open an issue](https://github.com/ananymishradev) or find me on [LinkedIn](https://www.linkedin.com/in/ananymishradev). And if you came here from [[showcase|the showcase post]], that one is about the theme — this one is about me.

> [!NOTE]
> Everything above is public. Some of it is finished, two of them are not, and the commit log shows which.
