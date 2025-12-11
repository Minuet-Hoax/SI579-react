import logo from './logo.svg';
import './App.css';
import SuggestTripForm from "./components/SuggestTripForm";
import { useState } from 'react';

const visitedTrips = [
  { place: "White Mountain, USA", season: "Summer", year: "2025" },
  { place: "Washington DC, USA", season: "Spring", year: "2025" },
  { place: "Orlando, USA", season: "Fall", year: "2024" },
  { place: "Northeast, China", season: "Summer", year: "2024" },
  { place: "Tibet, China", season: "Spring", year: "2024" },
  { place: "Japan", season: "Spring", year: "2024" },
  { place: "Joshua Tree, USA", season: "Winter", year: "2024" },
];

const initialSuggestedTrips = [
  { place: "Xinjiang, China", season: "Summer", year: "2026" },
  { place: "Greece, EU", season: "Fall", year: "2026" },
];

const App = () => {
  const [suggestedTrips, setSuggestedTrips] = useState(initialSuggestedTrips);

  const handleAddTrip = (newTrip) => {
    setSuggestedTrips((previousTrips) => [newTrip, ...previousTrips]);
  };

  const formatInfo = (trip) =>
    trip.year ? `${trip.season} ${trip.year}` : trip.season;

  return (
    <div className="page-wrapper">
      <header>
        <h1>My Travel Journal</h1>
        <p className="header-meta">Alice Zhang • uniqname: yimengzh</p>
      </header>

      <main>
        <div className="columns">
          <section>
            <h2>Places I've been</h2>
            <ul>
              {visitedTrips.map((trip) => (
                <li key={`${trip.place} ${trip.season} ${trip.year}`}>
                  <strong>{trip.place}</strong>
                  <span className="trip-meta">{formatInfo(trip)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Where Should I Go Next?</h2>
            <ul>
              {suggestedTrips.map((trip, index) => (
                <li
                  key={`${trip.place} ${trip.season} ${trip.year} ${index}`}
                >
                  <strong>{trip.place}</strong>
                  <span className="trip-meta">{formatInfo(trip)}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="form-section">
          <h2>Suggest my next trip</h2>
          <p className="form-help">
            Add a place, choose a season, and (optionally) a year. It will
            appear in the suggested places list on the right.
          </p>

          <SuggestTripForm onAddTrip={handleAddTrip} />
        </section>
      </main>

      <footer>
        <p>Built by Alice Zhang as a React travel journal ✈️</p>
      </footer>
    </div>
  );
};

export default App;