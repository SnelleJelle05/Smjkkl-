import React, { useState } from "react";

const Logbook = () => {
  const [logbook, setLogbook] = useState({
    uren: "",
    datum: "",
    activiteit: "",
    notities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogbook({
      ...logbook,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logboek opgeslagen:", logbook);
    // Hier kun je de logboekdata opsturen naar een API of opslaan in lokale opslag
    setLogbook({ uren: "", datum: "", activiteit: "", notities: "" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <div className="">
            <h1 style={{ textAlign: "center", color: "#007BFF" }}>Mijn Logboek</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Uren:</label>
          <input
            type="number"
            name="uren"
            value={logbook.uren}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Datum:</label>
          <input
            type="date"
            name="datum"
            value={logbook.datum}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Waaraan gewerkt:</label>
          <select
            name="activiteit"
            value={logbook.activiteit}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
            required
          >
            <option value="">Selecteer...</option>
            <option value="Project 1">Project 1</option>
            <option value="Project 2">Project 2</option>
            <option value="Overig">Overig</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Eventuele notities:</label>
          <textarea
            name="notities"
            value={logbook.notities}
            onChange={handleChange}
            rows="4"
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#FFF",
            border: "none",
            cursor: "pointer",
          }}
        >
          Pas logboek aan
        </button>
      </form>
    </div>
  );
};

export default Logbook;
