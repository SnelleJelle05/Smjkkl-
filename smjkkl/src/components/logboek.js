import React, { useState } from "react";
import './logboek.css';

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

  function pasaan(){
    if (logbook !== "") {
        alert('logboek is aangepast')
    }else{
        alert('vul het formulier in')
    }
    
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <div className="logboek">
            <h1>Mijn Logboek</h1>
        </div>
        <form onSubmit={handleSubmit} className="logboekform">
            <div className="box">
                <label>Uren:</label>
                <input
                    type="number"
                    name="uren"
                    value={logbook.uren}
                    onChange={handleChange}
                    required
                    className="input"
                />
            </div>

            <div className="box">
                <label>Datum:</label>
                <input
                    type="date"
                    name="datum"
                    value={logbook.datum}
                    onChange={handleChange}
                    required
                    className="input"
                />
            </div>

            <div className="box">
                <label>Waaraan gewerkt:</label>
                <select
                    name="activiteit"
                    value={logbook.activiteit}
                    onChange={handleChange}
                    required
                    className="input"
                >
                    <option value="">Selecteer...</option>
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Overig">Overig</option>
                </select>
            </div>

            <div className="box">
                <label>Eventuele notities:</label>
                <textarea
                    name="notities"
                    value={logbook.notities}
                    onChange={handleChange}
                    rows="4"
                    className="input"
                ></textarea>
            </div>

            <button
                type="submit"
                className="logboek-aan-pas"
                onClick={pasaan}
            >
                Pas logboek aan
            </button>
        </form>
    </div>
  );
};

export default Logbook;
