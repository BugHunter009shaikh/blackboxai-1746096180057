const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Predefined admission FAQs and answers
const faqs = [
  {
    question: /admission process|how to apply|application procedure/i,
    answer: "The admission process at Army Public School Panagarh involves filling out the application form available on our website, followed by submission of required documents and an entrance test."
  },
  {
    question: /age limit|age criteria/i,
    answer: "The age criteria for admission varies by class. Please refer to the admission guidelines on our website or contact the school office for detailed information."
  },
  {
    question: /fee structure|tuition fees|fees/i,
    answer: "The fee structure for different classes is available on our official website. For specific queries, you can contact the school administration."
  },
  {
    question: /documents required|required documents/i,
    answer: "You will need to submit birth certificate, previous school records, passport size photographs, and proof of residence during the admission process."
  },
  {
    question: /contact|phone number|email/i,
    answer: "You can contact Army Public School Panagarh at +91-1234567890 or email us at info@apspanagarh.edu.in."
  },
  {
    question: /school timings|school hours/i,
    answer: "The school timings are from 8:00 AM to 2:00 PM, Monday to Friday."
  },
  {
    question: /transport facility|bus service/i,
    answer: "We provide transport facilities for students. Please contact the transport department for routes and timings."
  },
  {
    question: /sports|extracurricular activities/i,
    answer: "Our school offers a variety of sports and extracurricular activities including football, basketball, music, and drama."
  }
];

// Endpoint for chatbot queries
app.post('/chat', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Find matching FAQ
  const faq = faqs.find(f => f.question.test(message));

  if (faq) {
    return res.json({ reply: faq.answer });
  } else {
    return res.json({ reply: "Sorry, I couldn't understand your question. Please try asking about admission process, fees, documents, or contact information." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
