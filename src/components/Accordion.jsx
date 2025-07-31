function Accordion({ item, toggleAccordion, children }) {
  return (
    <div className={`accordion ${item.isOpen ? "active" : ""}`}>
      <div className="line"></div>
      <div className="number">{String(item.number).padStart(2, "0")}</div>

      <div className="content">{children}</div>

      <div className="toggle" onClick={toggleAccordion}>
        {item.isOpen ? "-" : "+"}
      </div>
    </div>
  );
}

export default Accordion;
