import { useState } from "react";
import Accordion from "./Accordion.jsx";

const accordionData = [
  {
    id: 1,
    number: "01",
    title: "Where are these chairs assembled?",
    text: "All our chairs are hand-assembled in our workshop in Sheffield, UK. We prioritize sustainable materials and quality craftsmanship.",
    isOpen: false,
  },
  {
    id: 2,
    number: "02",
    title: "What materials are used?",
    text: "We use a mix of FSC-certified wood, eco-friendly fabrics, and recycled metals to ensure minimal environmental impact while maintaining high durability.",
    isOpen: false,
  },
  {
    id: 3,
    number: "03",
    title: "Do the chairs come with a warranty?",
    text: "Yes, all of our chairs come with a 5-year limited warranty covering structural integrity and workmanship defects.",
    isOpen: false,
  },
  {
    id: 4,
    number: "04",
    title: "How long does shipping take?",
    text: "Standard shipping within the UK takes 3-5 business days. International orders may take up to 2 weeks depending on location.",
    isOpen: false,
  },
];

function Accordions() {
  const [data, setdata] = useState(accordionData);

  function toggleAccordion(id) {
    setdata((prevdata) =>
      prevdata.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  }

  return (
    <div className="accordions">
      {data.map((item) => (
        <Accordion
          item={item}
          key={item.id}
          toggleAccordion={() => toggleAccordion(item.id)}
        />
      ))}
    </div>
  );
}

export default Accordions;
