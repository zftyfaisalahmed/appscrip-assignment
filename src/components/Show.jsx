import React, { useState } from 'react';

function FilterComponent() {
  const [showFilter, setShowFilter] = useState(false);

  // Function to toggle the visibility of the filter
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <button onClick={toggleFilter}>
        {showFilter ? 'Hide Filter' : 'Show Filter'}
      </button>
      {showFilter && (
        <div>
          {/* Filter content goes here */}
          <input type="text" placeholder="Filter input" />
          <button>Apply Filter</button>
        </div>
      )}
    </div>
  );
}

export default FilterComponent;