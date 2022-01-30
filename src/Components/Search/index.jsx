import { useState, useEffect } from "react";

function Search(props) {
  const [query, setQuery] = useState({ name: "", status: "" });

  useEffect(() => {
    props.handleChange(query);
  }, [query]);

  const handleChange = (e) => {
    const field = e.target.name;
    setQuery({ ...query, [field]: e.target.value });
  };

  const clearFields = () => {
    setQuery({ name: "", status: "" });
  };

  return (
    <div className="search-wrapper">
      <div className="search-label">
        <h2 className="f2">Search Characters</h2>
      </div>
      <div className="search-input">
        <input
          className="search-input"
          name="name"
          type="search"
          value={query.name}
          placeholder="Search By  Name"
          onChange={handleChange}
        />
      </div>
      <div className="search-input">
        <input
          className="search-input"
          name="status"
          type="search"
          value={query.status}
          placeholder="Search By  Status"
          onChange={handleChange}
        />
      </div>
      <div className="search-input">
        <button onClick={clearFields} className="clear-search">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Search;
