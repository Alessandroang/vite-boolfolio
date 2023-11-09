<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      message: "",
    };
  },

  methods: {
    sendMessage() {
      // Logica di invio del messaggio
      console.log("Email:", this.email);
      console.log("Nome:", this.name);
      console.log("Messaggio:", this.message);

      this.email = "";
      this.name = "";
      this.message = "";
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="mb-3">
      <label for="contactform-email" class="form-label">Email address</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="contactform-email"
        placeholder="name@example.com"
      />
    </div>

    <div class="mb-3">
      <label for="contactform-name" class="form-label">Nome</label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        id="contactform-name"
        placeholder="name@example.com"
      />
    </div>

    <div class="mb-3">
      <label for="contactform-message" class="form-label"
        >Example textarea</label
      >
      <textarea
        v-model="message"
        class="form-control"
        id="contactform-message"
        rows="3"
      ></textarea>
    </div>

    <button class="btn btn-success" @click="sendMessage">
      <font-awesome-icon icon="paper-plane" class="me-2" />
      Invia messaggio
    </button>
  </div>
</template>
