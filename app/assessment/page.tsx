import { Navigation } from '../components/Navigation';

export default function Assessment() {
  return (
    <>
      <Navigation />
      <main className="assessment-page">
        <style>{`
          .assessment-page {
            background-color: #f5f0ea;
            min-height: 100vh;
            padding: 3rem 2rem;
          }

          .page-container {
            max-width: 1000px;
            margin: 0 auto;
          }

          .assessment-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .assessment-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 5vw, 3.5rem);
            color: #8b6f47;
            margin-bottom: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .assessment-subtitle {
            color: #666666;
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .assessment-container {
            background: white;
            border-radius: 0.5rem;
            padding: 2rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
          }

          .form-group {
            margin-bottom: 2rem;
          }

          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #6b5344;
          }

          .form-group input,
          .form-group textarea,
          .form-group select {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #e0d5c7;
            border-radius: 0.5rem;
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .form-group input:focus,
          .form-group textarea:focus,
          .form-group select:focus {
            outline: none;
            border-color: #ff69b4;
            box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.1);
          }

          .form-group textarea {
            resize: vertical;
            min-height: 120px;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }

          .submit-button {
            background: linear-gradient(135deg, #ff69b4, #ff1493);
            color: white;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 700;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
          }

          .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
          }

          .submit-button:active {
            transform: translateY(0);
          }

          .assessment-intro {
            background: linear-gradient(135deg, #ffc8e0 0%, #b3f0e1 100%);
            padding: 2rem;
            border-radius: 0.5rem;
            margin-bottom: 2rem;
            text-align: center;
          }

          .assessment-intro p {
            color: #333333;
            font-size: 1rem;
            line-height: 1.8;
          }

          @media (max-width: 768px) {
            .form-row {
              grid-template-columns: 1fr;
            }

            .assessment-page {
              padding: 2rem 1rem;
            }

            .assessment-container {
              padding: 1.5rem;
            }
          }
        `}</style>

        <div className="page-container">
          <div className="assessment-header">
            <h1 className="assessment-title">Career Compass Assessment</h1>
            <p className="assessment-subtitle">Take this comprehensive assessment to discover your ideal career path</p>
          </div>

          <div className="assessment-intro">
            <p>
              This assessment is designed to help you understand your strengths, interests, and readiness for college
              preparation. Based on your responses, we'll provide personalized recommendations and guidance to help you
              chart your path to success.
            </p>
          </div>

          <form className="assessment-container" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" required placeholder="Your first name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" required placeholder="Your last name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" required placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your contact number" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="grade">Current Grade Level *</label>
              <select id="grade" required>
                <option value="">Select your grade level</option>
                <option value="grade-9">Grade 9</option>
                <option value="grade-10">Grade 10</option>
                <option value="grade-11">Grade 11</option>
                <option value="grade-12">Grade 12</option>
                <option value="first-year">First Year College</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="interests">What are your main interests? (Select all that apply) *</label>
              <textarea
                id="interests"
                placeholder="E.g., STEM, Arts, Business, Health Sciences, etc."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="challenges">
                What challenges do you face in preparing for college? (Select all that apply) *
              </label>
              <textarea
                id="challenges"
                placeholder="E.g., Financial constraints, Limited guidance, Academic preparation, etc."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="goals">What are your career goals? *</label>
              <textarea id="goals" placeholder="Describe your ideal career path" required></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="support">How can we best support you? *</label>
              <select id="support" required>
                <option value="">Select an option</option>
                <option value="interviews">Expert-led interviews</option>
                <option value="quizzes">Diagnostic quizzes</option>
                <option value="seminars">Strand-specific seminars</option>
                <option value="all">All of the above</option>
              </select>
            </div>

            <button type="submit" className="submit-button">
              Submit Assessment
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
