import React from 'react'
import Title from '../../components/Title'

import image from '../../assets/img/building.jpg';

import image1 from '../../assets/img/about1.jpg'
import image2 from '../../assets/img/about2.jpg'
import image3 from '../../assets/img/about3.jpg'
import image4 from '../../assets/img/about4.jpg'

function About() {
  return (
    <div>
        <Title
            title='Its a big story'
             subtitle="BE PART OF OUR STORY"
            buttonText="TELL ME MORE"
            Link="/services"
            showButton={false}
            image={image} 
        />
    

      <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Journey</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={image1} alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={image2}  alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={image3}  alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={image4}  alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default About