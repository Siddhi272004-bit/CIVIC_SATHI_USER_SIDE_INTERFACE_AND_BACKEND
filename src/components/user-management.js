<div className="input-group mb-3">
  <span className="input-group-text"><Search className="h-4 w-4" /></span>
  <input
    type="text"
    className="form-control"
    placeholder="Search users by name, email, or department..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
