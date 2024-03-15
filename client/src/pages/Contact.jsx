import React, { useRef } from "react";
import axios from 'axios';
import { useState } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    Subejct:''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9002/contact', formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' , Subject:'' });
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  
  return (
    <>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus ipsum aperiam cumque fugit suscipit animi natus
                nostrum voluptatem iste quam!
              </p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required/>
                  </div>
                  <div className="form__input">
                    <input
                         type="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         placeholder="Your Email"
                         required/>
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                    required/>
                  </div>
                  {/* <div className="form__input">
                    <input
                      type="hidden"
                      name= "_captcha"
                      value="false"                     
                    />
                  </div> */}
                  <div className="form__input">
                    <input
                      type="hidden"
                      name= "_template"
                      value="table"                     
                    />
                    </div>
                    <div className="form__input">
                    <input
                      type="hidden"
                      name= "_autoresponse"
                      value="Thankyou for Writing the mail we'll get back to you soon"                     
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                       rows="7"
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       placeholder="Your Message"
                       required
                    ></textarea>
                  </div>

                  <button
                    className="send__btn"
                    style={{
                      border: "none",
                      padding: "7px 25px",
                      borderRadius: "5px",
                      marginTop: "20px",
                    }}
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
