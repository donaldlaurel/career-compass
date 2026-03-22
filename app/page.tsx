import { Navigation } from './components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="home-hero">
        <style>{`
          .home-hero {
            position: relative;
            height: 100vh;
            background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-ZBMpYWw44tcSkkRrwaAZ6M7GwEVAhk.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
          }

          .home-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
            z-index: 1;
          }

          .home-hero-content {
            position: relative;
            z-index: 2;
            max-width: 900px;
            padding: 2rem;
          }

          .home-hero h1 {
            color: white;
            font-size: clamp(2.5rem, 8vw, 4.5rem);
            margin-bottom: 1.5rem;
            line-height: 1.1;
          }

          .home-hero-subtitle {
            font-size: clamp(1rem, 2vw, 1.5rem);
            color: rgba(255, 255, 255, 0.95);
            font-weight: 500;
            margin-bottom: 2rem;
          }

          .home-cta-button {
            background: linear-gradient(135deg, #ff69b4, #ff1493);
            color: white;
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            font-weight: 700;
            border-radius: 2rem;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }

          .home-cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
          }

          @media (max-width: 768px) {
            .home-hero {
              height: auto;
              min-height: 80vh;
              padding: 2rem 1rem;
            }

            .home-hero-content {
              padding: 1rem;
            }
          }
        `}</style>

        <div className="home-hero-content">
          <h1>SDG 4: QUALITY EDUCATION</h1>
          <div className="home-hero-subtitle">
            <p style={{ marginBottom: '0.5rem', color: '#ff69b4', fontSize: '1.3rem', fontWeight: 'bold' }}>
              BREAKING BARRIERS:
            </p>
            <p>ACCESS TO COLLEGE PREPARATION AND CAREER GUIDANCE</p>
          </div>
          <a href="/assessment" className="home-cta-button">
            Take the Assessment
          </a>
        </div>
      </main>
    </>
  );
}
