import React from "react";
import "./styles.scss";
import Accordion from "./Accordion/accordion";
import AccordionChild from "./Accordion/accordion-child";

export default class FileBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion_showing: false
    };
  }

  handleClick = accordion_showing => {
    // this.setState({ accordion_showing: !accordion_showing });
  };

  render() {
    const accordion_showing = this.state.accordion_showing;
    console.log(accordion_showing);
    return (
      <div className="content-container">
        <div className="content-container content-container-notes scrollable notes">
          <Accordion
            name="Folder"
            onClick={this.handleClick(accordion_showing)}
          >
            <AccordionChild
              url="https://drive.google.com/file/d/17aeVDmgP
                 EotQ7f9XDovLMnHTm3YqdefE/view?usp=sharing"
            >
              TLE document
            </AccordionChild>
            <Accordion name="Folder 2">
              <AccordionChild url="https://drive.google.com/file/d/0B4rVCFYRjVWcYVRMT0RVZWc4M3c/view?usp=sharing">
                File 2
              </AccordionChild>
              <AccordionChild>File 3</AccordionChild>
              <AccordionChild>File 4</AccordionChild>
              <Accordion name="Folder 3">
                <AccordionChild>File 5</AccordionChild>
                <AccordionChild>File 5</AccordionChild>
                <AccordionChild>File 5</AccordionChild>
                <AccordionChild>File 5</AccordionChild>
                <AccordionChild>File 5</AccordionChild>
                <AccordionChild>File 5</AccordionChild>
              </Accordion>
            </Accordion>
          </Accordion>

          <Accordion name="Another folder">
            <AccordionChild>File</AccordionChild>
          </Accordion>
        </div>
      </div>
    );
  }
}
