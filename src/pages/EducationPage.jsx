export default function EducationPage() {
  return (
    <section className="post">
      <header className="major">
        <span className="date">Education</span>
        <h1>My Learning Journey</h1>
      </header>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">&#x1F393;</div>
          <div className="timeline-content">
            <h3>Master&apos;s Degree in Computer Science</h3>
            <span className="timeline-date">2023 - 2025</span>
            <p>
              Major in Internet, Mobile and Security
              <br />
              University of Padova
              <br />
              Grade: 107/110
              <br />
              <a href="https://drive.google.com/file/d/1cStZ3MGKciaEZZnOOREcD553b2wc6pxc/view?usp=drive_link">
                <strong>Diploma Supplement</strong>
              </a>
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">&#x1F393;</div>
          <div className="timeline-content">
            <h3>Bachelor&apos;s Degree in Computer Science</h3>
            <span className="timeline-date">2020 - 2023</span>
            <p>
              University of Padova
              <br />
              Grade: 97/110
              <br />
              <a href="https://drive.google.com/file/d/1RzPj42_vKE_TqZl3Gl4NsdNzfECjeOji/view?usp=drive_link">
                <strong>Diploma Supplement</strong>
              </a>
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">&#x1F393;</div>
          <div className="timeline-content">
            <h3>High School Diploma in Computer Science and Telecommunications</h3>
            <span className="timeline-date">2015 - 2020</span>
            <p>
              IIS Euganeo, Este (PD), Italy
              <br />
              Grade: 96/100
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
