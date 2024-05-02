import { useState } from "react";

const Section = ({ description, isVisible, title, setisVisible }) => {
  // const [isvisible,setVisible]=useState(false)
  return (
    <>
    <div className="accordion">
      <h2>{title}</h2>
      <button className="btn" onClick={() => setisVisible(true)}>
        Show
      </button>
      <button className="btn" onClick={() => setisVisible(false)}>
        Hide
      </button>
      {isVisible && <p>{description}</p>}
    </div>
    </>
  );
};
const Deals = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: true,
    showTeam: false,
    showDetails: true
  });
  return (
    <>
      <h1>Deals here</h1>
      <Section
        title="show Team"
        description="here is a description11111 ................."
        isVisible={sectionConfig.showAbout}
        setisVisible={()=>setSectionConfig({
          showAbout: true,
          showTeam: false,
          showDetails: false,
        })}
      />
      <Section
        title="show Team"
        description="here is a description222 ................."
        isVisible={sectionConfig.showTeam}
        setisVisible={()=>setSectionConfig({
          showAbout: false,
          showTeam: true,
          showDetails: false,
        })}
      />
      <Section
        title="show Details"
        description="here is a description3333 ................."
        isVisible={sectionConfig.showDetails}
        setisVisible={()=>setSectionConfig({
          showAbout: false,
          showTeam: false,
          showDetails: true,
        })}
      />
    </>
  );
};
export default Deals;
