<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Drivstoff kalkulator</h1>
        <img src="https://cdn-icons-png.freepik.com/512/3815/3815878.png"
            width="50"
            style="margin-left:20px"
        />
      </div>
    </v-app-bar>
    <v-main>
      <FuelCalc/>
    </v-main>
  </v-app>
</template>

<script>
import FuelCalc from './components/FuelCalc';

export default {
  name: 'App',

  components: {
    FuelCalc,
  },

  data: () => ({
    //
  }),
};
</script>
