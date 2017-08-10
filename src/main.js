import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import { firebaseApp } from './firebaseApp';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Signin from './components/Signin';
import Signup from './components/Signup';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
  ],
});

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.replace('/signin');
  }
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App),
});
