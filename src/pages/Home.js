import React from 'react';




export const Home= () => (

	<div>

  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
  <div class="container">
    <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/home">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/Studentlgn">Student Login</a>
        </li>
        <li class="nav-item px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/Facultylgn">Faculty Login</a>
        </li>
        <li class="nav-item px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/AdminLgn">Admin Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  <section class="page-section clearfix">
    <div class="container">
    <div class="intro">
    <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="https://www.pngfind.com/pngs/m/76-761479_don-t-be-too-familiar-in-interview-hd.png" alt="" />

    <div class="intro-text left-0 text-center bg-faded p-5 rounded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-upper">Placement</span>
            <span class="section-heading-lower">Our Placement team</span>
          </h2>
          <p class="mb-3">Developing the students to meet the Industries recruitment process
To motivate students to develop Technical knowledge and soft skills in terms of career planning, goal setting
To motivate students aspire for higher studies and guiding them to take competitive exams such as CAT, GATE, TOEFL, GRE, IES,UPSC,TNPSC etc
Aiming to Place the maximum number of students through campus & off-campus interviews conducted by the top companies
          </p>
          <div class="intro-button mx-auto">
            <a class="btn btn-primary btn-xl" href="#">Visit Us Today!</a>
          </div>
        </div>
    </div>
    </div>
    </section>




    <section class="page-section cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">Our Promise</span>
                <span class="section-heading-lower">To You</span>
              </h2>
              <p class="mb-0">The Placement Cell organizes career guidance programmes for all the students starting from first year. The cell arranges training programmes like Mock Interviews, Group Discussions, Communication Skills Workshop etc and it also organizes Public Sector Exam Training for students who are interested to join Government Sectors. It also invites HR Managers from different industries to conduct training programmes for final year students.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
	</div>


)
