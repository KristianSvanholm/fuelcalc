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
            Masse: {{decimals((item.byVolume * slider)/item.byMass)}} kg <br/>
            Utslipp: {{decimals(item.co2l * slider)}} kg <br/>
            Pris: {{decimals((item.byVolume * slider)/item.byMass * item.pricekg)}} kr <br/>
            Pris / kwh: {{decimals(item.pricekg / item.byMass)}} kr 
         </v-card>
    </div>
    <div v-else class="container">
        <v-card class="fuel" width="350px" outlined shaped v-for="(item, key) in fuels" :key=key>
            <h1>{{item.name}} </h1>
            Energi: {{decimals(item.byMass * slider)}} kWh <br/>
            Volum: {{decimals((item.byMass * slider)/item.byVolume)}} liter <br/>
            Utslipp: {{decimals((item.byMass * slider)/item.byVolume*item.co2l)}} kg <br/>
            Pris: {{decimals(slider * item.pricekg)}} kr <br/>
            Pris / kwh: {{decimals(item.pricekg / item.byMass)}} kr
        </v-card>
    </div>
    <br/>
    Kilder<br/>
    <a href="https://www.idealhy.eu/index.php?page=lh2_outline">idealhy ~2013</a><br/>
    <a href="https://natural-resources.canada.ca/sites/www.nrcan.gc.ca/files/oee/pdf/transportation/fuel-efficient-technologies/autosmart_factsheet_9_e.pdf">canadian govt 2014</a><br/>
    <a href="https://h2.live/en/">H2 kg price h2.live</a><br/>
    <a href="https://www.cargopedia.net/europe-fuel-prices">diesel and gas price cargopedia.net 25.03.24</a><br/>
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
    name: 'FuelCalc',

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
                co2l: 0,
                pricekg: 300,
            },
            {
                name: "Hydrogen (700 bar)",
                byVolume: 1.4,
                byMass: 33.33,
                co2l: 0,
                pricekg: 300,
            },
            {
                name: "Hydrogen (-252.9 °C)",
                byVolume: 2.3,
                byMass: 33.33,
                co2l: 0,
                pricekg: 300,
            },
            {
                name: "Diesel",
                byVolume: 10,
                byMass: 11.9,
                co2l: 2.7,
                pricekg: 23.80,
            },
            {
                name: "Bensin",
                byVolume: 8.8,
                byMass: 12,
                co2l: 2.3,
                pricekg: 28.64,
            }
        ]
    }),
      methods: {
        decimals(num){
            return Math.round(num*100) / 100
        },
      },
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
