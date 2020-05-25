import React from 'react';

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {data && (
          <article data-testid="contact" className="contact">
            <span className="contact__avatar">
              <img src={data.avatar} alt={data.name}/>
            </span>
            <span className="contact__data">{data.name}</span>
            <span className="contact__data">{data.phone}</span>
            <span className="contact__data">{data.country}</span>
            <span className="contact__data">{data.admissionDateFormat}</span>
            <span className="contact__data">{data.company}</span>
            <span className="contact__data">{data.department}</span>
          </article>
        )}
      </>
    );
  }
}

export default Contact;
