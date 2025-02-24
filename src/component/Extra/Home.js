import React, { useState } from "react";

const Home = () => {
  const tableData = [
    "Column 1",
    "Column 2",
    "Column 3",
    "Column 4",
    "Column 5",
  ];

  const initialData = [
    {
      id: 1,
      item: "Apple",
      description: "Fresh red apple",
      price: "$1",
      qty: 10,
      col1: "A1",
      col2: "B1",
      col3: "C1",
      col4: "D1",
    },
    {
      id: 2,
      item: "Banana",
      description: "Organic banana",
      price: "$0.5",
      qty: 20,
      col1: "A2",
      col2: "B2",
      col3: "C2",
      col4: "D2",
    },
    {
      id: 3,
      item: "Carrot",
      description: "Crunchy carrot",
      price: "$0.8",
      qty: 15,
      col1: "A3",
      col2: "B3",
      col3: "C3",
      col4: "D3",
    },
    {
      id: 4,
      item: "Apple",
      description: "Fresh red apple",
      price: "$1",
      qty: 10,
      col1: "A1",
      col2: "B1",
      col3: "C1",
      col4: "D1",
    },
    {
      id: 5,
      item: "Banana",
      description: "Organic banana",
      price: "$0.5",
      qty: 20,
      col1: "A2",
      col2: "B2",
      col3: "C2",
      col4: "D2",
    },
    {
      id: 6,
      item: "Carrot",
      description: "Crunchy carrot",
      price: "$0.8",
      qty: 15,
      col1: "A3",
      col2: "B3",
      col3: "C3",
      col4: "D3",
    },
    {
      id: 7,
      item: "Apple",
      description: "Fresh red apple",
      price: "$1",
      qty: 10,
      col1: "A1",
      col2: "B1",
      col3: "C1",
      col4: "D1",
    },
    {
      id: 8,
      item: "Banana",
      description: "Organic banana",
      price: "$0.5",
      qty: 20,
      col1: "A2",
      col2: "B2",
      col3: "C2",
      col4: "D2",
    },
    {
      id: 9,
      item: "Carrot",
      description: "Crunchy carrot",
      price: "$0.8",
      qty: 15,
      col1: "A3",
      col2: "B3",
      col3: "C3",
      col4: "D3",
    },
    {
      id: 10,
      item: "Apple",
      description: "Fresh red apple",
      price: "$1",
      qty: 10,
      col1: "A1",
      col2: "B1",
      col3: "C1",
      col4: "D1",
    },
    {
      id: 11,
      item: "Banana",
      description: "Organic banana",
      price: "$0.5",
      qty: 20,
      col1: "A2",
      col2: "B2",
      col3: "C2",
      col4: "D2",
    },
    {
      id: 12,
      item: "Carrot",
      description: "Crunchy carrot",
      price: "$0.8",
      qty: 15,
      col1: "A3",
      col2: "B3",
      col3: "C3",
      col4: "D3",
    },
    {
      id: 13,
      item: "Apple",
      description: "Fresh red apple",
      price: "$1",
      qty: 10,
      col1: "A1",
      col2: "B1",
      col3: "C1",
      col4: "D1",
    },
    {
      id: 14,
      item: "Banana",
      description: "Organic banana",
      price: "$0.5",
      qty: 20,
      col1: "A2",
      col2: "B2",
      col3: "C2",
      col4: "D2",
    },
    {
      id: 15,
      item: "Carrot",
      description: "Crunchy carrot",
      price: "$0.8",
      qty: 15,
      col1: "A3",
      col2: "B3",
      col3: "C3",
      col4: "D3",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [descriptionFilter, setDescriptionFilter] = useState("");

  // Filter the table data based on descriptionFilter
  const filteredData = initialData.filter((row) =>
    row.description.toLowerCase().includes(descriptionFilter.toLowerCase())
  );

  // Handler for search button click
  const handleSearch = () => {
    // Here we update the descriptionFilter based on the search term
    setDescriptionFilter(searchTerm);
  };

  return (
    <div className="container">
      {/* Header Box */}
      <div className="header-box">
        <header>
          <h1>Name of Something</h1>
        </header>
      </div>

      {/* Toolbar Box */}
      <div className="toolbar-box">
        <div className="toolbar">
          <button className="download">Download</button>
          <button className="refresh">Refresh</button>
          <select className="select-option">
            <option>Select Option</option>
          </select>
          <button className="copy">Copy</button>
        </div>
        <div>
          <table className="custom-table">
            <tbody>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
              <tr>
                {tableData.map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table Box */}
      <div className="table-box">
        {/* Search Input with Button */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <table>
          <thead>
            {/* First header row with column titles */}
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
              <th>Action</th>
            </tr>
            {/* Second header row for filter option above Description column */}
            <tr className="filter-row">
              <th colSpan="2"></th>
              <th>
                <input
                  type="text"
                  placeholder="Filter Description"
                  value={descriptionFilter}
                  onChange={(e) => setDescriptionFilter(e.target.value)}
                />
              </th>
              <th colSpan="7"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.item}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
                <td>{row.qty}</td>
                <td>{row.col1}</td>
                <td>{row.col2}</td>
                <td>{row.col3}</td>
                <td>{row.col4}</td>
                <td>
                  <button className="edit">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
