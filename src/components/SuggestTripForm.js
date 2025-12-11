import { useState } from "react";

const SuggestTripForm = ({ onAddTrip }) => {
  const [place, setPlace] = useState("");
  const [season, setSeason] = useState("Spring");
  const [year, setYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedPlace = place.trim();
    if (!trimmedPlace) {
      return;
    }

    const newTrip = {
      place: trimmedPlace,
      season,
      year: year.trim(),
    };

    onAddTrip(newTrip);

    setPlace("");
    setSeason("Spring");
    setYear("");
  };

  const isSubmitDisabled = place.trim() === "";

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
      <div className="trip-form-row">
        <label className="trip-form-field">
          <span>Place</span>
          <input
            type="text"
            value={place}
            onChange={(event) => setPlace(event.target.value)}
            placeholder="City, Country"
          />
        </label>

        <label className="trip-form-field">
          <span>Season</span>
          <select
            value={season}
            onChange={(event) => setSeason(event.target.value)}
          >
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
        </label>

        <label className="trip-form-field">
          <span>Year (optional)</span>
          <input
            type="number"
            min="2025"
            max="2100"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            placeholder="2026"
          />
        </label>
      </div>

      <button
        type="submit"
        className="trip-form-submit"
        disabled={isSubmitDisabled}
      >
        Add to suggested places
      </button>
    </form>
  );
};

export default SuggestTripForm;
