import { data } from "../../data";
const Works = () => {
  console.log(data);
  return (
    <>
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
    </>
  );
};
export default Works;
