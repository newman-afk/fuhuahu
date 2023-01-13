import { data } from "../../data";
import "./Works.css";
const Works = () => {
  console.log(data);
  return (
    <>
      <div className="works container">
        {data.map((item) => {
          return (
            <div key={Math.random()}>
              <h1>{item.folderName}</h1>
              {item.individualData.map((page) => {
                return (
                  <p key={Math.random()}>
                    <a href={page.link}>{page.name}</a>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Works;
