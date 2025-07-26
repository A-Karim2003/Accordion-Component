function Accordion({ item, toggleAccordion }) {
  return (
    <div className={`accordion ${item.isOpen ? "active" : ""}`}>
      <div className="line"></div>
      <div className="number">{String(item.number).padStart(2, "0")}</div>
      <div className="content">
        <h3 className="title" onClick={toggleAccordion}>
          {item.title}
        </h3>
        <p className="text">{item.text}</p>
      </div>
      <div className="toggle" onClick={toggleAccordion}>
        {item.isOpen ? "-" : "+"}
      </div>
    </div>
  );
}

export default Accordion;
