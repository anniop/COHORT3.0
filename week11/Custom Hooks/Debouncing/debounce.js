let currentClock;

function searchBackend() {
  console.log("Request Sent To Backend");
}

function debouncedSearchBackend() {
  clearTimeout(currentClock);
  currentClock = setTimeout(searchBackend, 30);
}

debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
