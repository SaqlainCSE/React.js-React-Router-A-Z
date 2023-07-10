import React from 'react';
import FAQ from './FAQ';
import { faqsdata } from './data';

export default function FAQS() {
  return (
    <main>
        <section>
            <h1 style={{ textAlign: 'center' }}>FAQs</h1>
            {faqsdata.map((faq) => <FAQ key={faq.id} {...faq}/>)}
        </section>
    </main>
  )
}
