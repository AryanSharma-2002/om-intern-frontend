import React, { useState } from "react";
import Updates from "./Updates";
import updates1 from "../images/updates1.avif";
import updates2 from "../images/updates2.avif";
import updates3 from "../images/updates3.avif";
import updates4 from "../images/updates4.avif";
const Products = () => {
  const [networking, setNetworking] = useState([
    {
      img: updates1,
      title:
        "GPT-4 API general availability and deprecation of older models in the Completions API",
      date: "Jul 6, 2023",
    },
    {
      img: updates2,
      title: "Introducing superalignment",
      date: "Jul 6, 2023",
    },
    {
      img: updates3,
      title: "Insights from global conversations",
      date: "Jun 29, 2023",
    },
    {
      img: updates4,
      title: "Introducing OpenAI London",
      date: "Jun 28, 2023",
    },
  ]);
  const [steelFiles, setSteelFiles] = useState([
    {
      img: updates1,
      title:
        "GPT-4 API general availability and deprecation of older models in the Completions API",
      date: "Jul 6, 2023",
    },
    {
      img: updates2,
      title: "Introducing superalignment",
      date: "Jul 6, 2023",
    },
    {
      img: updates3,
      title: "Insights from global conversations",
      date: "Jun 29, 2023",
    },
    {
      img: updates4,
      title: "Introducing OpenAI London",
      date: "Jun 28, 2023",
    },
  ]);
  return (
    <div>
      <Updates
        title={"Networking Products"}
        data={networking}
        link="/networking"
        allPage={false}
      />
      <Updates
        title={"Steel Files Products"}
        data={steelFiles}
        link="/steelFiles"
        allPage={false}
      />
    </div>
  );
};

export default Products;
