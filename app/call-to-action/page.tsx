import { Navigation } from '../components/Navigation';

export default function CallToAction() {
  return (
    <>
      <Navigation />
      <main className="cta-page">
        <style>{`
          .cta-page {
            background-color: #f5f0ea;
            padding: 3rem 2rem;
          }

          .page-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .cta-hero {
            position: relative;
            background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-aB4qvNVNgeCbnJdMM5Nbl44llDwZLj.png');
            background-size: cover;
            background-position: center;
            border-radius: 1rem;
            padding: 4rem 2rem;
            margin-bottom: 4rem;
            text-align: center;
            color: white;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .cta-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 1rem;
            z-index: 1;
          }

          .cta-hero-content {
            position: relative;
            z-index: 2;
          }

          .cta-tagline {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.75rem, 5vw, 3rem);
            font-weight: 700;
            margin-bottom: 2rem;
            line-height: 1.2;
          }

          .cta-description {
            font-size: clamp(1rem, 2vw, 1.25rem);
            margin-bottom: 2rem;
            line-height: 1.6;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .what-we-do {
            text-align: center;
            margin-bottom: 3rem;
          }

          .what-we-do h2 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 2.5rem);
            color: #6b5344;
            margin-bottom: 2rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .through-help {
            color: #333333;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 2rem;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .service-card {
            padding: 2rem;
            border-radius: 0.5rem;
            text-align: center;
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: #333333;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .service-1 {
            background-color: #fffacd;
          }

          .service-2 {
            background-color: #ffc8e0;
          }

          .service-3 {
            background-color: #b3f0e1;
          }

          .guidance-text {
            color: #6b5344;
            font-size: 1rem;
            line-height: 1.8;
            background-color: rgba(179, 240, 225, 0.3);
            padding: 2rem;
            border-radius: 0.5rem;
            text-align: center;
          }

          @media (max-width: 768px) {
            .cta-page {
              padding: 2rem 1rem;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="page-container">
          <div className="cta-hero">
            <div className="cta-hero-content">
              <p className="cta-tagline">STOP LETTING CIRCUMSTANCES CHOOSE YOUR DIRECTION.</p>
              <p className="cta-tagline">GRAB YOUR CAREER COMPASS AND CHART YOUR OWN PATH TO SUCCESS.</p>
            </div>
          </div>

          <div className="what-we-do">
            <h2>What do we do?</h2>

            <p className="through-help">Through the help of the following:</p>

            <div className="services-grid">
              <div className="service-card service-1">EXPERT-LED INTERVIEWS</div>
              <div className="service-card service-2">DIAGNOSTIC QUIZZES</div>
              <div className="service-card service-3">STRAND-SPECIFIC SEMINARS</div>
            </div>

            <p className="guidance-text">
              We offer a multi-dimensional guidance system that helps students navigate their future with confidence.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
