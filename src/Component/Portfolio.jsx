// import React from "react";
// import {
//   LineChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Line,
// } from "recharts";

// const Portfolio = () => {
//   // Mock data for the chart
//   const data = [
//     { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
//     { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
//     { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
//     { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
//     { name: "May", uv: 189, pv: 4800, amt: 2181 },
//   ];

//   return (
//     <div className="portfolio">
//       <header className="header fixed-top d-flex align-items-center">
//         <div className="container d-flex align-items-center justify-content-between">
//           <a
//             href="#"
//             className="logo d-flex align-items-center me-auto me-lg-0"
//           >
//             <h1>Ketki Shinde</h1>
//           </a>
//           <nav id="navbar" className="navbar text-uppercase">
//             <ul>
//               <li>
//                 <a href="#scrollspyHeading1">Home</a>
//               </li>
//               <li>
//                 <a href="#scrollspyHeading2">Intro</a>
//               </li>
//               <li>
//                 <a href="#scrollspyHeading3">Skills</a>
//               </li>
//               <li>
//                 <a href="#scrollspyHeading4">Portfolio</a>
//               </li>
//               <li>
//                 <a href="blog.html">Blog</a>
//               </li>
//               <li>
//                 <a href="#scrollspyHeading6">Contact</a>
//               </li>
//             </ul>
//           </nav>
//           <a className="btn-book-a-table" href="#book-a-table">
//             Download CV
//           </a>
//         </div>
//       </header>

//       <main>
//         <section id="scrollspyHeading1" className="masthead">
//           <div id="particles-js"></div>
//           <div className="textlanding">
//             <h1>Ketki J. Shinde</h1>
//             <hr
//               style={{
//                 width: "100px",
//                 height: "1px",
//                 border: "none",
//                 color: "#fff",
//                 backgroundColor: "#fff",
//               }}
//             />
//             <div className="col-md-12">
//               <div className="info-box">
//                 <div className="social-links">
//                   <a href="https://github.com/kjs3107" className="github">
//                     <i className="fa fa-github"></i>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/ketki-shinde-186118287/"
//                     className="linkedin"
//                   >
//                     <i className="bi bi-linkedin"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <p style={{ color: "whitesmoke" }}>
//               Welcome to Ketki J. Shinde homepage.
//               <br />
//               I'm a data Science enthusiast and recent graduate, currently doing
//               an internship in data science at Rubix. I'm passionate about
//               leveraging data-driven insights to solve real-world problems.
//               Explore my portfolio to see how I've applied my skills to various
//               projects.
//             </p>
//             <a
//               className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
//               href="mailto:kjshinde2904@gmail.com"
//             >
//               Gmail
//             </a>
//             <a
//               className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
//               href="#scrollspyHeading6"
//             >
//               Contact
//             </a>
//           </div>
//         </section>

//         <section id="scrollspyHeading2" className="bg">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-4 text-center section__pic-container">
//                 <img
//                   className="img-fluid"
//                   src="/api/placeholder/400/400"
//                   alt="ketki shinde profile picture"
//                   style={{ borderRadius: "50%" }}
//                 />
//               </div>
//               <div
//                 className="col-lg-8 text-center text-md-left mt-5 p-3"
//                 style={{ color: "white" }}
//               >
//                 <p>Hi, I'm Ketki.</p>
//                 <p>
//                   Welcome to Ketki J. Shinde homepage.
//                   <br />
//                   I'm a data Science enthusiast and recent graduate, currently
//                   doing an internship in data science at Rubix. I'm passionate
//                   about leveraging data-driven insights to solve real-world
//                   problems. Explore my portfolio to see how I've applied my
//                   skills to various projects.
//                 </p>
//                 <a
//                   className="btn btn-secondary btn-l text-uppercase"
//                   href="https://github.com/kjs3107"
//                 >
//                   Github
//                 </a>
//                 <a
//                   className="btn btn-secondary btn-l text-uppercase"
//                   href="https://www.linkedin.com/in/ketki-shinde-186118287/"
//                 >
//                   LinkedIn
//                 </a>
//               </div>
//             </div>

//             <div
//               className="row hide-if-small-screen"
//               style={{ marginTop: "8%" }}
//             >
//               <div className="col-lg-12 text-center">
//                 <svg width="1000" height="100">
//                   {/* SVG content */}
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="scrollspyHeading3">
//           <div className="section-title text-uppercase">
//             <span>Skills</span>
//             <h2>Technical Skills</h2>
//           </div>
//           <div className="skills container">
//             <div className="row text-uppercase">
//               {[
//                 "PYTHON",
//                 "NLP",
//                 "SQL",
//                 "Pandas",
//                 "Numpy",
//                 "Scikit-learn",
//                 "PowerBI",
//                 "Tableau",
//                 "AWS",
//                 "ML Algorithms",
//                 "Data Visualization",
//                 "Deep Learning",
//                 "GitHub",
//               ].map((skill, index) => (
//                 <div key={index} className="col-lg-3 col-md-4 mt-4">
//                   <div className="icon-box">
//                     <h3 style={{ color: "#ffbb2c" }}>{skill}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section
//           id="scrollspyHeading4"
//           className="container mt-5"
//           style={{ paddingTop: "10%" }}
//         >
//           <div className="col-lg-12 text-center mt-5">
//             <h2 className="section-heading text-uppercase">Portfolio</h2>
//             <h3 className="section-subheading text-muted">
//               A glimpse of the projects I've been working on
//             </h3>
//           </div>
//           {/* Add your portfolio projects here */}
//         </section>

//         <section id="scrollspyHeading6" className="contact">
//           <div className="container">
//             <div className="section-title text-uppercase">
//               <span>Contact Me</span>
//               <h2>Contact Me</h2>
//             </div>
//             <div className="row">
//               <div className="col-lg-6">{/* Contact information */}</div>
//               <div className="col-lg-6">{/* Contact form */}</div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer id="footer">
//         <div className="container">
//           <h3>Ketki Shinde</h3>
//           <div className="col-md-12">
//             <div className="info-box">
//               <div className="social-links">
//                 <a href="https://github.com/kjs3107" className="github">
//                   <i className="fa fa-github"></i>
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/ketki-shinde-186118287/"
//                   className="linkedin"
//                 >
//                   <i className="bi bi-linkedin"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="copyright">
//             &copy; Copyright{" "}
//             <strong>
//               <span>Ketki</span>
//             </strong>
//             . All Rights Reserved
//           </div>
//         </div>
//       </footer>

//       <a
//         href="#"
//         className="scroll-top d-flex align-items-center justify-content-center"
//       >
//         <i className="bi bi-arrow-up-short"></i>
//       </a>

//       {/* Example of using Recharts */}
//       <div style={{ width: "100%", height: 300 }}>
//         <LineChart
//           width={600}
//           height={300}
//           data={data}
//           margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
//         >
//           <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//         </LineChart>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
