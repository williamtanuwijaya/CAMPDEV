import './faqs.css'
import data from './data'
import { useState } from 'react'
import Faq from 'react-faq-component';

const Faqs = () => {

  return (
    <section className="faqs">
      <h2>Frequently Askerd Questions</h2>

      <Faq
        data={data}
        // styles={

        // }
      />

    </section >
  )
}

export default Faqs