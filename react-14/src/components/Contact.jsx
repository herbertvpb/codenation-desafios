import React from 'react';

class Contact extends React.Component {
  
  formatDate = (dateToFormat) => {
    const date = new Date(dateToFormat);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(+date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;   
  }

  render() {
    const { data } = this.props;
    return (
      <>
        {data && (
          <article data-testid="contact" className="contact">
            <span className="contact__avatar">
              <img src={data.avatar} alt={data.name}/>
            </span>
            <span 
              data-testid="contact-name" 
              className="contact__data"
            >
              {data.name}
            </span>
            <span 
              data-testid="contact-phone" 
              className="contact__data"
            >
              {data.phone}
            </span>
            <span 
              data-testid="contact-country" 
              className="contact__data"
            >
              {data.country}
            </span>
            <span 
              data-testid="contact-date" 
              className="contact__data"
            >
              {this.formatDate(data.admissionDate)}
            </span>
            <span 
              data-testid="contact-company" 
              className="contact__data"
            >
              {data.company}
            </span>
            <span 
              data-testid="contact-department" 
              className="contact__data"
            >
              {data.department}
            </span>
          </article>
        )}
      </>
    );
  }
}

export default Contact;
