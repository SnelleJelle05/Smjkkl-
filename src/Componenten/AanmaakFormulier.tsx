import React, { useState } from 'react';
import "../Assets/Css/ProjectAanmaak.css";

interface BasicComponentProps {
    Title: string;
}

const AanmakenFormulier: React.FC<BasicComponentProps> = ({ Title }) => {
    const [formValues, setFormValues] = useState({
        naam: '',
        uren: '',
        status: 'Bezig',
        start: '',
        omschrijving: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Formuliergegevens:', formValues);
    };

    return (
        <div className="ProjectAanmaakContainer">
            <div className="header">
                <h1 className="h1Data">{Title}</h1>
            </div>
            <form onSubmit={handleSubmit} className="aanmaakForm">
                <label>
                    Naam:
                    <input
                        type="text"
                        name="naam"
                        value={formValues.naam}
                        onChange={handleChange}
                        placeholder="Voer naam in"
                    />
                </label>

                <label>
                    Uren:
                    <input
                        type="number"
                        name="uren"
                        value={formValues.uren}
                        onChange={handleChange}
                        placeholder="Voer uren in"
                    />
                </label>

                <label>
                    Status:
                    <select
                        name="status"
                        value={formValues.status}
                        onChange={handleChange}
                    >
                        <option value="Klaar">Klaar</option>
                        <option value="Bezig">Bezig</option>
                    </select>
                </label>

                <label>
                    Start:
                    <input
                        type="date"
                        name="start"
                        value={formValues.start}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Omschrijving:
                    <textarea
                        name="omschrijving"
                        value={formValues.omschrijving}
                        onChange={handleChange}
                        placeholder="Voeg een beschrijving toe"
                        rows={4}
                    />
                </label>

                <a href="/ProjectenIndex" className="submitButton">
                    Verzenden
                </a>
                <a href="/ProjectenIndex" className="cancelButton">
                    Terug
                </a>
            </form>
        </div>
    );
};

export default AanmakenFormulier;
