# Python - Async Comprehension

Asynchronous generators and async comprehensions with `asyncio`.

| File | Description |
| --- | --- |
| `0-async_generator.py` | `async_generator()` yields 10 random floats, waiting 1 second before each |
| `1-async_comprehension.py` | `async_comprehension()` collects the 10 numbers with an async comprehension |
| `2-measure_runtime.py` | `measure_runtime()` runs four comprehensions in parallel with `asyncio.gather` and returns the total time (about 10 seconds) |
