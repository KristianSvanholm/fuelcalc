<template>
    <v-card id="calculator">
        <v-radio-group v-model="radios">
          <v-radio label="Volum" value="liter"></v-radio>
          <v-radio label="Vekt" value="kilo"></v-radio>
        </v-radio-group><br/>
        <v-slider
            :label="radios"
            v-model="slider"
            :max="sliderLimit"
            :min="1"
            thumb-label="always"
            step="1"
        >
        </v-slider>
    <div v-if="radios=='liter'" class="container">
        <v-card class="fuel" width="350px" outlined shaped v-for="(item, key) in fuels" :key=key>
            <h1>{{item.name}} </h1>
            Energi: {{Math.round(item.byVolume * slider)}} kWh <br/>
            Masse: {{Math.round((item.byVolume * slider)/item.byMass)}} kg <br/>
        </v-card>
    </div>
    <div v-else class="container">
        <v-card class="fuel" width="350px" outlined shaped v-for="(item, key) in fuels" :key=key>
            <h1>{{item.name}} </h1>
            Energi: {{Math.round(item.byMass * slider)}} kWh <br/>
            Volum: {{Math.round((item.byMass * slider)/item.byVolume)}} liter <br/>
        </v-card>
    </div>
    <br/>
    Kilder<br/>
    <a href="https://everything2.com/index.pl?node=energy%20density">everything2 11/10/2004</a><br/>
    <a href="https://www.idealhy.eu/index.php?page=lh2_outline">idealhy ~2013</a><br/>
    <a href="https://www.arenaev.com/how_big_is_the_fuel_tank_of_an_ev-news-139.php">arenaev 10.4.22</a><br/>
    <a href="http://www.h2data.de/">h2Data.de</a><br/><br/>
    Notater<br/>
    <ul>
        <li>Hydrogen i væske form krever ~36% av sin egen energi for kjøling.</li>
        <li>Li-Ion tallene er basert på Tesla Model S.</li>
    </ul>
    </v-card>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
        radios: "liter",
        slider: 0,
        volumeUnit: "kWh/l",
        massUnit: "kWH/Kg",
        fuels: [
            {
                name: "Hydrogen",
                byVolume: 0.003,
                byMass: 33.33,
            },
            {
                name: "Hydrogen (700 bar)",
                byVolume: 1.4,
                byMass: 33.33
            },
            {
                name: "Hydrogen (-252.9 °C)",
                byVolume: 2.3,
                byMass: 33.33
            },
            {
                name: "Diesel",
                byVolume: 10,
                byMass: 11.9   
            },
            {
                name: "Bensin",
                byVolume: 8.8,
                byMass: 12,
            },
            {
                name: "Lithium-Ion batteri",
                byVolume: 0.6, 
                byMass: 0.15,
            },
        ]
    }),
      computed: {
        sliderLimit: function() {
            if (this.radios == "liter") {
                return 200
            }
            return 600
        }
      },
  }
</script>

<style>

#calculator {
    min-width: 400px;
    max-width: 1200px;
    margin: auto;
    width: 65%;
    padding: 10px;
    margin-top: 50px;
}

.fuel {
    min-width: 350px;
    margin: 10px;
    padding: 10px;
}

.container {
    justify-content: space-around;
    display:flex;
    flex-wrap:wrap;
}
</style>
