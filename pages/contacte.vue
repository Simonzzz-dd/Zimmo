<template>
  <div class="contact">
    <v-container style=" max-width: 1100px; height: 100%">
      <div class="pa--">
        <div class="tittleC">
          Comunique-se conosco preenchendo o formulário abaixo:
        </div>

        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Nome"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              :rules="{
                required: true,
                digits: 9,

              }"
            >
              <v-text-field
                v-model="phoneNumber"
                :counter="9"
                :error-messages="errors"
                label="Contacto"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              rules="required|required"
              name="assunto"
            >
              <v-text-field
                v-model="assunto"
                :error-messages="errors"
                label="Assunto"
                required
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              rules="required|required"
              name="texto"
            >
              <v-textarea
                v-model="texto"
                :error-messages="errors"
                label="Texto"
                required
              />
            </validation-provider>
            <br>
            <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <input

              id="submit"
              class=" g-recaptcha"
              data-sitekey="6Ld1njAdAAAAAGzfmk24bTNaPGNqdTlCSYaV-ZlL"
              data-callback="onSubmit"
              data-action="submit"
              type="submit"
            >
          </form>
        </validation-observer>
        <div v-if="loading_" style="height: 4rem">
          <v-text-field

            color="primary"
            loading
            disabled
          />
        </div>
        <div class="sucess">
          {{ success }}
        </div>
      </div>
    </v-container>
    <div class="border-" />
    <Footer />
  </div>
</template>

<script>
import { required, digits, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import postData from '../requests/sendMail'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})'
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    name: '',
    phoneNumber: '',
    email: '',
    texto: '',
    assunto: '',
    msError: '',
    success: '',
    loading_: false
  }),
  head () {
    return {
      script: [
        { src: 'https://www.google.com/recaptcha/api.js', defer: true, body: true }
      ],
      title: 'Contactos'
    }
  },

  methods: {
    submit () {
      document.querySelector('#submit').click()
      this.error = ''
      this.success = ''
      this.loading_ = true
      this.$refs.observer.validate()
      setTimeout(() => {
        const data_ = {
          name: this.name,
          phoneNumber: this.phoneNumber,
          email: this.email,
          text: this.texto,
          assunto: this.assunto
        }
        postData(data_)
          .then((data) => {
            this.loading_ = false
            this.success = data.success
            this.error = data.error
          })
      }, 300)
    }

  }

}
</script>
<style lang="scss">
.border- {
  height: 5rem;
  opacity: .1;
  border-bottom: 1px solid $secondary;
}
.contact {
      animation-name: move-in;
          animation-duration: 2000ms;
}

@keyframes move-in {
  from { opacity: 0;}
  to {transform: translateX(0%);}
}

.home-container {
  max-height: 100vh;
  overflow-y: scroll;
}
.tittleC {
  font-weight: 700;
  font-size: 1rem;
  padding: 2rem 0;
}

.sucess {
  padding: 1rem 0;
  color: $primary;
  text-transform: capitalize;
}

#submit {
  display: none;
}
</style>
