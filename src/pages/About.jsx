import SprayArt from '../assets/spray-art.svg'

export default function About({showCoolArt}) {
    return (
        <section id="about" className="section">
      <div className="container"> 
      
        <p className="text-center mb-2 wow fadeInUp"><span className="bg-primary text-dark px-2">About Me</span></p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">Get to Know Me</h2>
        
        <div className="row">
          <div className={showCoolArt ? "col-lg-8 text-left text-lg-start wow fadeInUp art-option" : "col-lg-12 text-left text-lg-start wow fadeInUp art-option"}>
            <h2 className="text-8 fw-400 mb-3">Hi, I'm <span className="fw-700 border-bottom border-3 border-primary">CHRISTOPHER</span> !</h2>
            <p className="text-5 text-right">I am an aspiring Full Stack Web Developer with a background in Graphic Design.
              Web Design and Graphic Design ignited my interest in becoming a Full Stack Developer. As of now, my design skills are most frequently
              used to create logos and branding for start-up businesses and for making personalized custom ski graphics and t-shirt designs.
              In my free time I chase waves around the east coast year-round and enjoy snowboarding the mountains of Colorado and Vermont in the winter.
              I am also a part of the Springfield Rifels Rugby Club and work with their board to create poster designs for fundraising opportunities.
              I have a passion for creating and problem solving. I am excited to bring that passion to the world of web development.</p>
          </div>

          {/* Conditionally render the image based on the user's choice */}
          {showCoolArt && (
            <div className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp" data-wow-delay="0.2s">
              <div className="featured-box style-4">
                <img src={SprayArt} alt="Spray Can" className="img-fluid spray2" />
              </div>
            </div>
          )}

        </div>
        <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-3 wow fadeInUp">
            <p className="text fw-500 mb-0">Name:</p>
            <p className="text-4 text-white-50 fw-600 mb-0">Christopher Ferraro</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <p className="text fw-500 mb-0">Email:</p>
            <p className="text-4 fw-600 mb-0"><a className="text-white-50" href="mailto:christopher.ferraro34@gmail.com">Email Me</a></p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
            <p className="text fw-500 mb-0">Favorite Mountain:</p>
            <p className="text-4 text-white-50 fw-600 mb-0">Keystone</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text fw-500 mb-0">From:</p>
            <p className="text-4 text-white-50 fw-600 mb-0">Cape Cod, MA</p>
          </div>
        </div>
      </div>
    </section>
        
    );
}