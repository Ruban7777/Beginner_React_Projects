import React, { useState } from "react";
import Data from "./Data";
import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    const newMultiple = multiple.includes(id)
      ? multiple.filter((item) => item !== id)
      : [...multiple, id];
    setMultiple(newMultiple);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
        }}
      >
        Enable Multiselection
      </button>
      <div className="accordion">
        {Data && Data.length > 0 ? (
          Data.map((DataItem) => (
            <div key={DataItem.id} className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(DataItem.id)
                    : () => handleSingleSelection(DataItem.id)
                }
              >
                <div>{DataItem.question}</div>
                <span>
                  {selected === DataItem.id || multiple.includes(DataItem.id)
                    ? "-"
                    : "+"}
                </span>
              </div>
              {enableMultiSelection
                ? multiple.includes(DataItem.id) && (
                    <div className="content">{DataItem.answer}</div>
                  )
                : selected === DataItem.id && (
                    <div className="content">{DataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
