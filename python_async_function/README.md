# Python - Async

Asynchronous functions with `asyncio`: coroutines, running them concurrently, measuring runtime and wrapping them in tasks.

| File | Description |
| --- | --- |
| `0-basic_async_syntax.py` | `wait_random(max_delay=10)` waits a random delay and returns it |
| `1-concurrent_coroutines.py` | `wait_n(n, max_delay)` runs `wait_random` n times concurrently and returns the delays in ascending order |
| `2-measure_runtime.py` | `measure_time(n, max_delay)` returns the average time per call of `wait_n` |
| `3-tasks.py` | `task_wait_random(max_delay)` returns an `asyncio.Task` |
| `4-tasks.py` | `task_wait_n(n, max_delay)` is `wait_n` built on `task_wait_random` |
