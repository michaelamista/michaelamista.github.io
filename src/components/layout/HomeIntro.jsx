import meImage from "../../../images/me.jpg";

export default function HomeIntro() {
  return (
    <div id="intro">
      <div>
        <img src={meImage} alt="Michael Amista'" />
      </div>
      <h1>
        Michael Amista'
        <br />
      </h1>
      <p>
        A passionate computer scientist who loves thinking outside the box and understanding how things work,
        <br /> with a particular interest in wireless networks and web/mobile development.
      </p>
      <ul className="actions">
        <li>
          <button
            type="button"
            className="button icon solid solo fa-arrow-down"
            onClick={() => {
              const header = document.getElementById("header");
              if (header) {
                header.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Continue
          </button>
        </li>
      </ul>
    </div>
  );
}
