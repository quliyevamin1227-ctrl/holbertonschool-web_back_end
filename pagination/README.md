# Pagination

Paginating a CSV dataset (`Popular_Baby_Names.csv`) in Python.

| File | Description |
| --- | --- |
| `0-simple_helper_function.py` | `index_range(page, page_size)` returns the start and end indexes of a page |
| `1-simple_pagination.py` | `Server.get_page(page, page_size)` returns the rows of a page |
| `2-hypermedia_pagination.py` | `Server.get_hyper(page, page_size)` adds `page_size`, `next_page`, `prev_page` and `total_pages` |
| `3-hypermedia_del_pagination.py` | `Server.get_hyper_index(index, page_size)` keeps pages stable when rows are deleted |
