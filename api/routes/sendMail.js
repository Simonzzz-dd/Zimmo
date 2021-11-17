const { Router } = require('express')
const sgMail = require('@sendgrid/mail')
const router = Router()
const apiKey = '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'

// Test route
router.post('/sendMail', async function (req, res) {
  sgMail.setApiKey(apiKey)
  const msg = {
    to: 'ivansimon2014.is@gmail.com', // Change to your recipient
    from: 'zimmodesign.mz@gmail.com', // Change to your verified sender
    subject: 'Mensagem do website',
    text: `${req.body.name} \nAssunto: ${req.body.assunto} \nEnviado por: ${req.body.email} \n ${req.body.text} `,
    html: '<strong>' + `${req.body.name} <br/> Assunto: ${req.body.assunto} <br/>Enviado por: ${req.body.email} <br/> ${req.body.text} ` + '</strong>'
  }
  sgMail
    .send(msg)
    .then(() => {
      res.json({ success: 'Formulario foi enviado. \nO seu pedido sera brevemente respondido.' })
    })
    .catch((error) => {
      res.json({ error: error.message })
    })
  console.log(req.body)
})

module.exports = router
