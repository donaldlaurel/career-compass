import { Navigation } from '../components/Navigation';

export default function Background() {
  return (
    <>
      <Navigation />
      <main className="background-page">
        <style>{`
          .background-page {
            background-color: #f5f0ea;
            padding: 3rem 2rem;
          }

          .page-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .section-header {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 5vw, 3.5rem);
            color: #8b6f47;
            text-align: center;
            margin-bottom: 3rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .background-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: start;
          }

          .background-image {
            width: 100%;
            height: auto;
            border-radius: 0.5rem;
            object-fit: cover;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .background-text h3 {
            font-size: clamp(1.5rem, 3vw, 2rem);
            color: #6b5344;
            margin-bottom: 1.5rem;
            font-weight: 700;
          }

          .background-text p {
            margin-bottom: 1.5rem;
            font-size: 1rem;
            line-height: 1.8;
            color: #333333;
            text-align: justify;
          }

          .background-text ul {
            margin: 1.5rem 0;
            margin-left: 2rem;
            list-style-type: disc;
          }

          .background-text li {
            margin-bottom: 0.75rem;
            color: #333333;
          }

          @media (max-width: 768px) {
            .background-content {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .background-page {
              padding: 2rem 1rem;
            }
          }
        `}</style>

        <div className="page-container">
          <h2 className="section-header">Background of the Issue</h2>

          <div className="background-content">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-d9XfQw8xROyQEuMmCK8cFoGlG5lQ5t.png"
                alt="Classroom with students"
                className="background-image"
              />
            </div>

            <div className="background-text">
              <h3>Understanding the Problem</h3>
              <p>
                Many students face challenges in accessing college due to limited preparation, guidance, and financial
                resources. Despite efforts of the United Nations under SDG 4, these barriers still affect learners,
                especially in the Philippines.
              </p>

              <h3 style={{ marginTop: '2rem' }}>Additional Information</h3>
              <p style={{ fontWeight: 600, marginBottom: '1rem' }}>Students often struggle with:</p>
              <ul>
                <li>Limited knowledge about college application processes</li>
                <li>Lack of career guidance and direction</li>
                <li>Financial and socioeconomic barriers</li>
                <li>Insufficient academic preparation</li>
              </ul>

              <p style={{ marginTop: '2rem' }}>
                Reports from UNESCO emphasize that gaps in access and readiness remain major issues in education
                systems worldwide.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
