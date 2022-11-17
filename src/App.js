import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((p) => p.id !== id));
  };

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var (--bg-blue)" }}>Prossimi incontri</h2>
        <div className="people-list">
          <List data={people} removePerson={removePerson} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={() => setPeople(data)}>
            Reload
          </button>
          <button className="btn btn-delete" onClick={() => setPeople([])}>
            Delete all
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
