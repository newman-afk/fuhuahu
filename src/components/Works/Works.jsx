import "./Works.css";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import { topic2 } from "../../data";
const Works = () => {
  const [page, setPage] = useState([]);
  useEffect(() => {
    client.fetch(`*[_type == 'webPage']`).then((data) => {
      setPage(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      {topic2.map((name) => {
        return (
          <div className="container text-center mb-5" key={name}>
            <h1 className="mb-5">{name}</h1>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
              {page
                ?.filter(
                  (item) => item.label.toLowerCase() === name.toLowerCase()
                )
                .map((item) => {
                  return (
                    <div className="col mb-5" key={item._id}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="card link"
                      >
                        <img
                          src={
                            item.image
                              ? urlFor(item.image)
                              : "https://picsum.photos/id/237/1290/1080"
                          }
                          alt={item.title}
                          className="card-img-top webImg"
                        />
                        <div className="card-body">
                          <h5 className="card-title webText">{item.title}</h5>
                        </div>
                        {item.description && (
                          <div className="description">{item.description}</div>
                        )}
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Works;
