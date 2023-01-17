import { data } from "../../data";
import "./Works.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
const Works = () => {
  return (
    <>
      {data
        .slice()
        .reverse()
        .map((section) => {
          return (
            <Container key={Math.random()}>
              <h1 className="mb-5">{section.folderName}</h1>
              <Row xs={1} md={2} xl={4} className="mb-5">
                {section.individualData.map((item) => {
                  return (
                    <Col key={Math.random()} className="mb-3">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                      >
                        <Card>
                          <Card.Img
                            className="webImg"
                            variant="top"
                            src={`assets/webPageScreenshot/${item.name}.jpg`}
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src = `https://picsum.photos/id/${Math.ceil(
                                Math.random() * 100
                              )}/1920/1080`;
                            }}
                          />
                          <Card.Body className="overflow-hidden">
                            <Card.Title className="overflow-hidden text-center webText">
                              {item.name}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </a>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          );
        })}
    </>
  );
};
export default Works;
