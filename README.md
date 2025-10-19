Bookshelf API — Postman Test Results (GitHub Summary)

Source: [Bookshelf API Test.postman_test_run.json](Bookshelf API Test.postman_test_run.json)
API base URL: http://localhost:9000

Run Summary
| Metric | Value |
|---|---|
| Status | finished |
| Total requests executed | 24 |
| Total assertions passed | 104 |
| Total assertions failed | 0 |
| Success rate | 100% |
| Total time | 83 ms |
| Avg time per request | ~3.5 ms |

Coverage Summary
| Area | Scenarios | Passed |
|---|---:|---:|
| Create (POST /books) | 4 | 4 |
| Read (GET /books, GET /books/:id) | 4 | 4 |
| Update (PUT /books/:id) | 4 | 4 |
| Delete (DELETE /books/:id) | 3 | 3 |
| Data preparation (fixtures) | 4 | 4 |
| Query filters (reading, finished, name) | 5 | 5 |

Performance Highlights
| Scenario | Status | Time (ms) |
|---|---|---:|
| Slowest: [Mandatory] Add Book With Complete Data | 201 Created | 20 |
| Fastest: Many scenarios (e.g., [Mandatory] Get Detail Finished Book) | 200 OK | 2 |
| Typical: Most requests complete in | — | 2–4 |

Assertion Reliability
| Assertion Category | Evidence from run | Result |
|---|---|---|
| HTTP Status Codes | All mandatory and optional flows returned expected codes (200, 201, 400, 404) | 100% pass |
| Content-Type | application/json consistently returned | 100% pass |
| Body Shape | Response bodies validated as objects | 100% pass |
| Domain Validations | Correct property/value checks; presence of bookId; invalid IDs handled | 100% pass |

Endpoint Matrix
| Method | Endpoint | Scenario | Code | Assertions Passed | Time (ms) |
|---|---|---|---:|---:|---:|
| POST | /books | [Mandatory] Add Book With Complete Data | 201 | 5 | 20 |
| POST | /books | [Mandatory] Add Book With Finished Reading | 201 | 5 | 4 |
| POST | /books | [Mandatory] Add Book Without Name | 400 | 4 | 3 |
| POST | /books | [Mandatory] Add Book with Page Read More Than Page Count | 400 | 4 | 2 |
| GET | /books | [Mandatory] Get All Books | 200 | 6 | 3 |
| GET | /books/:id | [Mandatory] Get Detail Books With Correct Id | 200 | 6 | 3 |
| GET | /books/:id | [Mandatory] Get Detail Finished Book | 200 | 6 | 2 |
| GET | /books/:id | [Mandatory] Get Detail Books With Invalid Id | 404 | 4 | 3 |
| PUT | /books/:id | [Mandatory] Update Book With Complete Data | 200 | 6 | 4 |
| PUT | /books/:id | [Mandatory] Update Book Without Name | 400 | 4 | 3 |
| PUT | /books/:id | [Mandatory] Update Book With Page Read More Than Page Count | 400 | 4 | 3 |
| PUT | /books/:id | [Mandatory] Update Book with Invalid Id | 404 | 4 | 3 |
| DELETE | /books/:id | [Mandatory] Delete Book with Correct Id | 200 | 6 | 2 |
| DELETE | /books/:id | [Mandatory] Delete Finished book | 200 | 6 | 2 |
| DELETE | /books/:id | [Mandatory] Delete Book with Invalid Id | 404 | 4 | 3 |
| POST | /books | Add Reading and Finished Book | 201 | — | 3 |
| POST | /books | Add Reading and Unfinished Book with "Dicoding" Name | 201 | — | 2 |
| POST | /books | Add Unreading Books and Unfinished Book "Dicoding" Name | 201 | — | 4 |
| POST | /books | Add Unreading Books and Unfinished Book | 201 | — | 2 |
| GET | /books?reading=1 | [Optional] Get All Reading Books | 200 | 6 | 3 |
| GET | /books?reading=0 | [Optional] Get All Unreading Books | 200 | 6 | 2 |
| GET | /books?finished=1 | [Optional] Get All Finished Books | 200 | 6 | 2 |
| GET | /books?finished=0 | [Optional] Get All Unfinished Books | 200 | 6 | 3 |
| GET | /books?name=Dicoding | [Optional] Get All Books Contains "Dicoding" Name | 200 | 6 | 2 |

Skills Demonstrated (Selling Points)
| Skill | Evidence in this run | Outcome |
|---|---|---|
| API Design & Validation | Robust CRUD with domain rules (e.g., name required, pageRead ≤ pageCount), proper 400/404 handling | Reliable error handling and UX safety |
| Test Automation | Comprehensive Postman collection with 104 assertions, zero failures | High confidence in release quality |
| Data Modeling | Consistent response contracts (id, name, publisher summaries; detailed book object in GET by id) | Clear, maintainable API contracts |
| Performance Awareness | Sub-5 ms typical latency on local runs; slowest 20 ms under creation with validations | Efficient handlers and I/O |
| Observability | Systematic validation of headers and payload shapes | Predictable integrations |
| Reproducibility | Persisted environment; deterministic test data setup via fixture requests | Easy cross-team verification |
