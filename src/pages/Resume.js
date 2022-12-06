import React from "react";
import { FaGlassMartini } from "react-icons/fa";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { FaGlassWhiskey } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Resume() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon=<FaGlassMartini />
        >
          <h3 className="vertical-timeline-element-title">
            Southern Glazier's Wine & Spirits
          </h3>
          <p>Sales Manager</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon=<FaGlassMartiniAlt />
        >
          <h3 className="vertical-timeline-element-title">Uinta Brewing</h3>

          <h4 className="vertical-timeline-element-subtitle">
            Covered a territory of 3 states
          </h4>

          <p>Regional Brand Manager</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon=<FaGlassWhiskey />
        >
          <h3 className="vertical-timeline-element-title">
            Craft Bartender - Le Meridian/54Thirty
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Denver, CO</h4>
          <p>Lead Bartender</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon=<FaLaptop />
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Denver, CO</h4>
          <p>
            Recently completed a full stack bootcamp, and looking for
            opportunities!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Resume;
