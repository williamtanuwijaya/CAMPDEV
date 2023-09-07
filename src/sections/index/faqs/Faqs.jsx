import './faqs.css'
import data from './data'
import { useState } from 'react'
import Faq from 'react-faq-component';

const Faqs = () => {
  const [showAnswer, setShowAnswer] = useState(false)

  const onClickQuest = (id) => {
    setShowAnswer(!showAnswer)
    console.log(showAnswer)
    console.log(id)
  }

  return (
    <section className="faqs">
      <h2>Frequently Askerd Questions</h2>

      <Faq
        data={data}
      // styles={}
      />

    </section >
  )
}

export default Faqs