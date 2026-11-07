const publications = [
  {
    title: "Performance Comparison between Monolithic gNB and DU-CU Split Deployments in 5G Networks",
    description:
      "An experimental comparison of srsRAN and OpenAirInterface (OAI) in monolithic and DU-CU split deployments. Using a reproducible SDR-based 5G testbed, the study evaluates round-trip latency, TCP and UDP throughput, jitter, and packet loss. Results show OAI performs better in monolithic deployments, while srsRAN provides more stable latency and stronger uplink performance in DU-CU split configurations."
  },
  {
    title: "5G and Beyond: Analytical Comparison of Real NG-RAN Implementations",
    description:
      "A systematic comparison of srsRAN and OpenAirInterface (OAI) NG-RAN implementations, examining their architectures, functional areas, and configuration dependencies. The analysis combines vendor and project documentation with preliminary CPU-usage measurements across monolithic and DU-CU split deployments."
  }
];

export default function PublicationsPage() {
  return (
    <section className="post">
      <header className="major">
        <span className="date">Publications</span>
        <h1>Research Papers</h1>
      </header>
      <div>
        {publications.map((publication) => (
          <article key={publication.title} className="box">
            <header>
              <h2>{publication.title}</h2>
              <p>WiMob 2026 · Accepted and presented</p>
            </header>
            <p>{publication.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
