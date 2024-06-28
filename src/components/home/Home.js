import CountUp from "react-countup";
import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
  const [direction, setDirection] = useState("ltr"); // State to toggle the direction of the Slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: direction === "rtl", // Dynamic rtl property based on the direction state
  };

  // Function to handle beforeChange event of the Slider
  const handleBeforeChange = (oldIndex, newIndex) => {
    // Toggle direction when reaching the last slide
    if (newIndex === 4) {
      setDirection("rtl");
    } else if (newIndex === 0) {
      // Toggle direction when reaching the first slide
      setDirection("ltr");
    }
  };

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="text-content">
          <header>
            <h1 className="align-center">Welcome to</h1>
            <h2>VNRVJIET</h2>
          </header>
          <section className="content fs-6 text-align-center">
            <p>
              The Philosophy of Vignana Jyothi unravels education as a process
              of "Presencing" that provides, both individually and collectively,
              to one's deepest capacity to sense and experience the knowledge
              and activities to shape the future. Based on a synthesis of direct
              experience, leading edge thinking and ancient wisdom, it taps into
              'deeper levels of LEARNING for discovering new possibilities'.
              <br></br>
              <br></br>
              Today, with this philosophy, Vignana Jyothi has created an edifice
              that is strong in its foundations, which can only rise higher and
              higher. Quality and integrity is the essence for achieving
              excellence at Vignana Jyothi Institutions. This and quest for
              excellence reflects in the vision and mission. Their passion
              reflects in the enterprise of education.
            </p>
          </section>
        </div>
        <div className="image-content">
          <img
            src="https://vnrvjiet.ac.in/assets/images/Landing%20image.png"
            alt="VNRVJIET"
          />
        </div>
      </div>
      <div className="carousel-container">
        <Slider {...settings} beforeChange={handleBeforeChange}>
          <div>
            <img
              src="https://fsf.org.in/news/images/vnrvjiet_seminar_02-768.jpg"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.NFYQ9vEU0uwy6AgNT1SsfgHaFj?pid=ImgDet&w=474&h=355&rs=1"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.tAsgm9u3MXogENc1qrEJwgHaE8?rs=1&pid=ImgDetMain"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/R.28051c762b90563070e0a71de410a154?rik=087%2bsu6OnIr0xg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-bUF5n6eSwbU%2fVcxflb1njSI%2fAAAAAAAABCg%2f-XS9A2wjM0I%2fs1600%2fntu08_09.jpg&ehk=%2fIRVxpaISZ8283IHM%2fF%2bGxyJHyrTdLK4L22RFYI3h0U%3d&risl=&pid=ImgRaw&r=0"
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src="https://accountancy.smu.edu.sg/sites/accountancy.smu.edu.sg/files/dxpr_builder_images/DSC_3422.jpg?fid=13021 "
              alt="Slide 5"
            />
          </div>
        </Slider>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card cc card1 h-100">
              <div className="card-body">
                {/* <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/course-1648742-1400672.png" className='logo pic'></img> */}
                <h5 className="card-title oo bg-dark fs-3 text-white rounded-2">
                  Vision
                </h5>
                <p className="card-text text-dark overflow-auto">
                  To be a World Class University providing value-based
                  education, conducting interdisciplinary research in cutting
                  edge technologies leading to sustainable socio-economic
                  development of the nation.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card cc bg-gradient bg-secondary-subtle h-100">
              <div className="card-body">
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1591/1591045.png" className='logo1 pic'></img> */}
                <h5 className="card-title oo bg-dark  fs-3 text-white rounded-2">
                  Mission
                </h5>

                <p className="card-text text-dark ">
                  To produce technically competent and socially responsible
                  engineers, managers and entrepreneurs, who will be future
                  ready. To involve students and faculty in innovative research
                  projects linked with industry, academic and research
                  institutions in India and abroad. To use modern pedagogy for
                  improving the teaching-learning process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card cc card1 h-100">
              <div className="card-body">
                {/* <img src="https://cdn4.iconfinder.com/data/icons/gamification-flat/64/learning-idea-knowledge-solve-experience-512.png" className='logo2 pic'></img> */}
                <h5 className="card-title bg-dark text-white fs-3 oo rounded-2">
                  Quality Policy
                </h5>
                <p className="card-text text-dark justify-content-center ">
                  Impart up-to-date knowledge in the students' chosen fields to
                  make them quality engineers Make the students experience the
                  applications on quality equipment and tools Provide quality
                  environment and services to all stakeholders Provide systems,
                  resources and opportunities for continuous improvement
                  Maintain global standards in education, training and services
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="container d-flex align-items-center bg-light">
        <div className="row w-100">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="https://annamacharyagroup.org/wp-content/uploads/2018/05/Tip-for-campus-placements-2-05-2018.jpg"
              alt="Placements"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1>Placement Information</h1>
            <div className="mt-4">
              <Link to="/placementForm" className="btn btn-primary me-2">
                Placement Form
              </Link>
              <Link to="/placementData" className="btn btn-secondary me-2">
                Placement Data
              </Link>
              <Link to="/medainPlacemnts" className="btn btn-primary">
                Reports
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="circles">
          <div className="circle">
            <CountUp
              start={0}
              end={7722}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            >
              {({ countUpRef }) => (
                <div className="counter">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
            <span className="circle-name">Students</span>
          </div>
          <div className="line" />
          <div className="circle">
            <CountUp
              start={0}
              end={100}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            >
              {({ countUpRef }) => (
                <div className="counter">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
            <span className="circle-name">Companies</span>
          </div>

          <div className="line" />
          <div className="circle">
            <CountUp
              start={0}
              end={25}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            >
              {({ countUpRef }) => (
                <div className="counter">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
            <span className="circle-name">MNCs</span>
          </div>
          <div className="line" />
          <div className="circle">
            <CountUp
              start={0}
              end={500}
              delay={0}
              enableScrollSpy={true}
              scrollSpyDelay={500}
            >
              {({ countUpRef }) => (
                <div className="counter">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
            <span className="circle-name">Higher Studies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
