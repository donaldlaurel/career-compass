import { Navigation } from '../components/Navigation';

export default function About() {
  const team = [
    {
      name: 'Alliyah A. Cabrera',
      role: 'Usability Tester',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-B99YAZZb4mL5meBbw6wP9xl6lz5rf0.png',
      position: 0,
    },
    {
      name: 'Stephanne G. Laurel',
      role: 'Graphic Designer',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-B99YAZZb4mL5meBbw6wP9xl6lz5rf0.png',
      position: 1,
    },
    {
      name: 'Ket Henzel T. Trangia',
      role: 'Content Development',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-B99YAZZb4mL5meBbw6wP9xl6lz5rf0.png',
      position: 2,
    },
    {
      name: 'Ellyza Marie M. Villaceran',
      role: 'Web Project Manager',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-B99YAZZb4mL5meBbw6wP9xl6lz5rf0.png',
      position: 3,
    },
  ];

  return (
    <>
      <Navigation />
      <main className="about-page">
        <style>{`
          .about-page {
            background-color: #f5f0ea;
            padding: 3rem 2rem;
          }

          .page-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .about-intro {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
            margin-bottom: 4rem;
          }

          .about-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 5vw, 3rem);
            color: #8b6f47;
            margin-bottom: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .about-text {
            color: #333333;
            line-height: 1.8;
            font-size: 1rem;
          }

          .about-text p {
            margin-bottom: 1.5rem;
          }

          .feedback-box {
            background: white;
            border-top: 4px solid #7851a9;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .feedback-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #333333;
            margin-bottom: 1rem;
          }

          .feedback-text {
            font-size: 0.95rem;
            color: #555555;
            line-height: 1.6;
          }

          .team-section {
            margin-top: 4rem;
          }

          .team-header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem;
            background: linear-gradient(135deg, #8b6f47 0%, #a5845c 100%);
            border-radius: 0.5rem;
          }

          .team-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            color: white;
            font-weight: 700;
            font-style: italic;
            margin: 0;
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .team-member {
            text-align: center;
          }

          .member-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 auto 1rem;
            border: 4px solid white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .member-image-0 {
            background-color: #ffc8e0;
          }

          .member-image-1 {
            background-color: #ffd9b3;
          }

          .member-image-2 {
            background-color: #fffacd;
          }

          .member-image-3 {
            background-color: #b3f0e1;
          }

          .member-name {
            font-family: 'Playfair Display', serif;
            font-size: 1.1rem;
            font-style: italic;
            color: #6b5344;
            margin-bottom: 0.5rem;
            font-weight: 700;
          }

          .member-role {
            color: #666666;
            font-size: 0.95rem;
            font-weight: 500;
          }

          @media (max-width: 768px) {
            .about-page {
              padding: 2rem 1rem;
            }

            .about-intro {
              grid-template-columns: 1fr;
            }

            .team-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="page-container">
          <div className="about-intro">
            <div>
              <h2 className="about-title">About Us</h2>
            </div>

            <div className="feedback-box">
              <p className="feedback-title">Website Feedback Form – Career Compass</p>
              <p className="feedback-text">
                Thank you for visiting the <strong>Career Compass</strong> website. This form aims to gather feedback
                about the website's content, design, and usability. The website was created to help students explore
                college preparation, career guidance, and scholarship opportunities.
              </p>
            </div>
          </div>

          <div className="team-section">
            <div className="team-header">
              <h2 className="team-title">Our Team</h2>
            </div>

            <div className="team-grid">
              {team.map((member) => (
                <div key={member.name} className="team-member">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <p className="member-name">{member.name}</p>
                  <p className="member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
