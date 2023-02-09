import { Fragment, useState } from "react";
import Layout from '@/components/layout/Layout';
import ProjectLayout from "@/components/layout/ProjectLayout";

import Modal from "@/components/modal/Modal";
import projectInfos from "./projectInfo";
import { useParams } from "react-router-dom";

import './project.css';

const Project: React.FC = () => {
  const { projectName } = useParams();
  const data = projectInfos.find((el) => el.name == projectName);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderProject = () => {
    if (!projectName || !data) return <></>;
    return (
      <Fragment>
        <div className="project-container">
          {showModal ? (
            <Modal
              name={projectName}
              image={data.images[currentIndex]}
              setShowModal={setShowModal}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              size={data.images.length}
              isMobile={data.isMobile}
              width={data.width}
              height={data.height}
            ></Modal>
          ) : null}
          <div className="top">
            <div className="home-image-container">

              {data.isMobile ?
                <img src={data.home} alt="home picture" width={data.width} height={data.height}></img>
                :
                <img src={data.home} alt="home picture" width="100%" height="100%"></img>
              }
            </div>
            <div className="content-text">
              <h1 className="blue">{data.title}</h1>
              <p style={{ paddingTop: "10px" }}>{data.description}</p>
              {data.link ? (
                <p style={{ marginTop: "10px" }}>
                  Link:{" "}
                  <a href={data.link} target="_blank" className="blue" rel="noreferrer">
                    {data.link}
                  </a>
                </p>
              ) : (
                ""
              )}
              {data.github ? (
                <p style={{ marginTop: "10px" }}>
                  Github:{" "}
                  <a href={data.github} target="_blank" className="blue" rel="noreferrer">
                    {data.github}
                  </a>
                </p>
              ) : (
                ""
              )}
              <h2 style={{ paddingTop: "20px" }} className="blue">
                Technology Stack
              </h2>
              <ul style={{ marginLeft: '15px' }}>
                {data.stacks.map((el) => {
                  return (
                    <li key={el} style={{ marginTop: "8px" }}>
                      <span style={{ marginLeft: "10px" }}>
                        <span style={{ fontWeight: "500" }}>
                          {el.split(":")[0]}
                        </span>
                        :<span>{el.split(":")[1]}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="bottom">
            <h1 className="blue">Gallery</h1>
            <div className="images">
              {data.images?.map((el, index) => {
                return (
                  <div className="image-container" key={el}>
                    <div className="img-content">

                      {data.isMobile ?
                        <img
                          width={data.width} height={data.height}
                          src={`/images/project/${projectName}/${el}`}
                          alt={el}
                          onClick={() => {
                            setCurrentIndex(index);
                            setShowModal(true);
                          }}>
                        </img>
                        :
                        <img
                          width="100%"
                          height="100%"
                          src={`/images/project/${projectName}/${el}`}
                          alt={el}
                          onClick={() => {
                            setCurrentIndex(index);
                            setShowModal(true);
                          }}>
                        </img>
                      }

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </Fragment>
    );
  };
  return (
    <Fragment>
      <ProjectLayout>{renderProject()}</ProjectLayout>
    </Fragment>
  );
};

export default Project;
