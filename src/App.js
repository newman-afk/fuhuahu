import "./App.css";
import { data } from "./data";

function App() {
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return (
          <div key={Math.random()}>
            <h1>{item.folderName}</h1>
            {item.individualData.map((web) => {
              return (
                <div className="card" key={Math.random()}>
                  <a target="_blank" rel="noreferrer" href={web.link}>
                    {web.name}
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default App;
