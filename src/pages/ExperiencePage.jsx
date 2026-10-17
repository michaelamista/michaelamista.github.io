export default function ExperiencePage() {
  return (
    <section className="post">
      <header className="major">
        <span className="date">Experience</span>
        <h1>My Work Journey</h1>
      </header>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">&#x1F4BC;</div>
          <div className="timeline-content">
            <h3>Software Developer at Apeiroon</h3>
            <span className="timeline-place">Vicenza, Italy</span>
            <span className="timeline-date">October 2025 - Present</span>
            <p>
              Embedded Linux and web development for private 4G/5G mobile network modules used in tactical and
              strategic operations. I work on ApeiroonOS, our custom Linux distribution that runs the whole network
              stack on a single device, and on Network Manager, the web interface that lets operators bring up, secure
              and update their private network.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">&#x1F4BC;</div>
          <div className="timeline-content">
            <h3>R&amp;D Software Engineer at Apeiroon</h3>
            <span className="timeline-place">Vicenza, Italy</span>
            <span className="timeline-date">May 2025 - September 2025</span>
            <p>
              Worked on analyzing and comparing NG-RAN implementations across different vendors. The research involves
              systematic evaluation of vendor-specific 5G RAN implementations through documentation analysis and
              experimental validation. From this comparative study, I extracted a vendor-neutral configuration schema
              and developed an automated tool that translates standardized inputs into vendor-specific configuration
              files for streamlined deployment.
            </p>
            <p>
              Master&apos;s Thesis:{" "}
              <a
                href="https://github.com/michaelamista/UniPD-MSc-Computer-Science-thesis/blob/main/thesis.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  Analytical comparison of NG-RAN implementations and automated configuration for streamlining gNodeB
                  deployment
                </strong>
              </a>
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">&#x1F4BC;</div>
          <div className="timeline-content">
            <h3>Software Developer at CWBI</h3>
            <span className="timeline-place">Padova, Italy</span>
            <span className="timeline-date">June 2023 - August 2023</span>
            <p>
              Worked on developing a web module for a fintech marketing campaign management system, using technologies
              like Java, Spring, Struts, Hibernate, and JSP.
            </p>
            <p>
              Bachelor&apos;s Thesis:{" "}
              <a
                href="https://github.com/michaelamista/UniPD-BSc-Computer-Science-thesis/blob/document/Amista'_Michael_Tesi.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <strong>
                  Development of a web module for the management of marketing campaigns in the banking/fintech
                  environment
                </strong>
              </a>
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">&#x1F4BC;</div>
          <div className="timeline-content">
            <h3>IT Technician at Stability</h3>
            <span className="timeline-place">Prestatyn, United Kingdom</span>
            <span className="timeline-date">June 2019 - July 2019</span>
            <p>
              Provided technical support, including remote maintenance, system updates, and problem-solving for clients
              in the UK.
            </p>
            <p>
              <a href="https://drive.google.com/file/d/1y8fm3KJHS6EJx374earQmlR5OTyNaOq3/view" target="_blank" rel="noreferrer">
                <strong>Reference letter</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
