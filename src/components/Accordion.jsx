function Accordion({ data, activeID, setActiveID, id }) {
  const isActive = activeID === id;

  function handleActiveIds() {}
  return (
    <div className={`accordion ${isActive ? "active" : ""}`}>
      <div className="line"></div>
      <div className="number">{String(data.number).padStart(2, "0")}</div>
      <div className="content">
        <h3 className="title" onClick={() => setActiveID(id)}>
          {data.title}
        </h3>
        <p className="text">{data.text}</p>
      </div>
      <div className="toggle">{isActive ? "-" : "+"}</div>
    </div>
  );
}

export default Accordion;
