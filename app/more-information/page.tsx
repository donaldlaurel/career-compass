import { Navigation } from '../components/Navigation';

export default function MoreInformation() {
  return (
    <>
      <Navigation />
      <main className="more-info-page">
        <style>{`
          .more-info-page {
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

          .info-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: start;
          }

          .info-image {
            width: 100%;
            height: auto;
            border-radius: 0.5rem;
            object-fit: cover;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .info-text h3 {
            font-size: clamp(1.25rem, 2.5vw, 1.75rem);
            color: #6b5344;
            margin-bottom: 1.5rem;
            font-weight: 700;
          }

          .info-text p {
            margin-bottom: 1.5rem;
            font-size: 1rem;
            line-height: 1.8;
            color: #333333;
            text-align: justify;
          }

          .situation-label {
            font-family: 'Playfair Display', serif;
            font-size: 1.75rem;
            color: #6b5344;
            font-weight: 700;
            text-align: center;
            margin-top: 1rem;
          }

          @media (max-width: 768px) {
            .info-content {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .more-info-page {
              padding: 2rem 1rem;
            }
          }
        `}</style>

        <div className="page-container">
          <h2 className="section-header">More Information</h2>

          <div className="info-content">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-UQPULQJR0zWG8h12YXMnBcKhkq28wS.png"
                alt="Situation in the Philippines"
                className="info-image"
              />
              <p className="situation-label">Situation in the Philippines</p>
            </div>

            <div className="info-text">
              <h3>Understanding College Access Barriers</h3>
              <p>
                Every student dreams of going to college and earning a degree. But this goal can be very hard to reach
                if students don't have enough preparation. For many Filipinos, one of the main reasons is financial
                constraints. Pagulayan et al. (2021) found that students whose parents earn more money are more ready
                for college. This is because families with more income can provide important learning tools, like
                technology, review materials, and access to review centers. Daway-Ducanes, Pernia, and Ramos (2022)
                also found that students from wealthier families are more likely to be accepted into the University of
                the Philippines, showing that money can affect educational opportunities.
              </p>

              <p>
                Another factor that hinders college preparedness is the low quality of high school education. According
                to a study, fewer than five out of every 1,000 senior high school students display the skills they are
                expected to have acquired after more than ten years of schooling. (Hernando-Malipot, 2026b)This lack of
                knowledge acquired from senior high school can affect their college preparedness, as college-level
                courses assume students have a certain foundation in core subjects.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
