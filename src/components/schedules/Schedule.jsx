import React from "react";
import { Button, Icon, Modal } from "react-materialize";

const Schedule = () => (
  <div>
    <div className="testA">DDD</div>
    <Button waves="light" className="button">
      EDIT ME<Icon left>save</Icon>
    </Button>
    <Modal
      header="Modal Header"
      trigger={
        <Button waves="light">
          OR ME!<Icon right>insert_chart</Icon>
        </Button>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </Modal>
  </div>
);

export default Schedule;
