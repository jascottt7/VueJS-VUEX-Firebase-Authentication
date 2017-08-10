<template>
    <div class="form-inline">
        <h3>Sign In</h3>
        <div class="form-group">
            <input type="text"
              placeholder="email"
              class="form-control"
              v-model="email"
            />
            <br><br>
            <input
              type="password"
              placeholder="password"
              class="form-control"
              v-model="password"
            />
            <br><br>
            <button class="btn btn-primary" @click="signIn()">Sign In</button>
        </div>
        <br>
        <p>{{ error.message }}</p>
        <br>
        <router-link to="/signup">Not a user? Sign Up</router-link>
        <br><br>
        <button class="btn-sm btn-primary" @click="resetPassword()">Forgot Password?</button>
    </div>
</template>

<script>
  import { firebaseApp } from '../firebaseApp';

  export default {
    data() {
      return {
        email: '',
        password: '',
        error:
        {
          message: '',
        },
      };
    },
    methods: {
      signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch((error) => {
            this.error = error;
          });
      },
      resetPassword() {
        firebaseApp.auth().sendPasswordResetEmail(this.email).then(() => {
          this.error = 'email sent to with reset instuctions sent';
        }).catch((error) => {
          this.error = error;
        });
      },
    },
  };
</script>
