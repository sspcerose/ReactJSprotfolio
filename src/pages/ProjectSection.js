import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectItems from "./ProjectItems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Updated import for Swiper 10+
import projects from "../components/projects";
import "swiper/css";
import "swiper/css/navigation";
import { VscHeartFilled } from "react-icons/vsc";

function ProjectSection() {
  return (
    <section id="projects">
      <div className="CustomProjectSection">
        <VscHeartFilled className="projheart" />
        <VscHeartFilled className="projheart" />
        <VscHeartFilled className="projheart" />
        <div className="container">
          <SectionTitle
            className="CustomProject"
            heading="Projects"
            subheading="Some of my recent works"
          />
          <div className="AllProjects">
            <Swiper
              className="SwiperContainer"
              spaceBetween={30}
              slidesPerView={1}
              navigation
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects.map((project, index) => {
                if (index >= 5);
                return (
                  <SwiperSlide key={project.id}>
                    <ProjectItems
                      title={project.name}
                      img={project.img}
                      desc={project.desc}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
