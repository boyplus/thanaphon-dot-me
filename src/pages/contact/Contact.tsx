import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMediumM, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Layout from '@/components/layout/Layout';

import './contact.css'

interface IContact {
  icon: IconDefinition;
  label: string;
  link: string;
}

const contacts: IContact[] = [
  { icon: faEnvelope, label: 'thanaphon.sbk@gmail.com', link: 'mailto: thanaphon.sbk@gmail.com' },
  { icon: faGithub, label: '@boyplus', link: 'https://github.com/boyplus' },
  { icon: faLinkedin, label: 'Thanaphon Sombunkaeo', link: 'https://www.linkedin.com/in/thanaphon-sombunkaeo-755a881b0/' },
  { icon: faMediumM, label: 'Thanaphon Sombunkaeo', link: 'https://medium.com/@_thanaphon' },
];

const Contact: React.FC = () => {
  const contactList = contacts.map(contact => {
    return (
      <a href={contact.link} target="_blank">
        <li className='contact-list-item'>
          <FontAwesomeIcon icon={contact.icon} size='2x'></FontAwesomeIcon>
          <p>{contact.label}</p>
        </li>
      </a>)
  })
  return (
    <Layout>
      <main className='contact-container'>
        <h1 className='blue space big-text'>Contact Me</h1>
        <ul className='contact-list'>
          {contactList}
        </ul>
      </main>
    </Layout>
  )
}

export default Contact;