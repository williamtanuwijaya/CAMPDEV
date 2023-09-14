import './faqs.css'
import data from './data'
import Faq from 'react-faq-component';

const Faqs = () => {
  const styles = {
    bgColor: '1b7be2',
    rowContentColor: 'white',
    arrowColor: "white",
    rowTitleColor:'white',
    rowTitleTextSize:'20px',
  };

  return (
    <section className="faqs">
      <h2>Frequently Askerd Questions</h2>
      <div className='faqs_container'>
        <Faq
          data={data}
          styles={styles}
        />
      </div>

    </section >
  )
}

export default Faqs