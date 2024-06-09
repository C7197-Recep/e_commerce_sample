import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Title from '../../components/Title';
import image from '../../assets/img/building.jpg';
import image1 from '../../assets/img/about1.jpg';
import image2 from '../../assets/img/about2.jpg';
import image3 from '../../assets/img/about3.jpg';
import image4 from '../../assets/img/about4.jpg';

const timelineData = [
  { date: '2009-2011', title: 'Our Humble Beginnings', img: image1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' },
  { date: 'March 2011', title: 'An Agency is Born', img: image2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' },
  { date: 'December 2015', title: 'Transition to Full Service', img: image3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' },
  { date: 'July 2020', title: 'Phase Two Expansion', img: image4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' },
];

const TimelineItem = ({ date, title, img, text, inverted }) => (
  <li className={inverted ? 'timeline-inverted' : ''}>
    <div className="timeline-image">
      <Image className="rounded-circle img-fluid" src={img} alt="..." />
    </div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <h4>{date}</h4>
        <h4 className="subheading">{title}</h4>
      </div>
      <div className="timeline-body">
        <p className="text-muted">{text}</p>
      </div>
    </div>
  </li>
);

function About() {
  return (
    <div>
      <Title
        title="It's a big story"
        subtitle="BE PART OF OUR STORY"
        buttonText="TELL ME MORE"
        Link="/services"
        showButton={false}
        image={image}
      />

      <section className="page-section" id="about">
        <Container>
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Journey</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                img={item.img}
                text={item.text}
                inverted={index % 2 === 1}
              />
            ))}
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
        </Container>
      </section>
    </div>
  );
}

export default About;
