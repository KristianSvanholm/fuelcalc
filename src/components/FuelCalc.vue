<template>
    <v-card id="calculator">

    <v-slider
        label="km"
        v-model="dist"
        :max="1000"
        :min="0"
        thumb-label="always"
        step="10"
    />

    <div class="container"> 
        <v-card class="fuel" width="350px" outlined shaped>
            <h1> Hydrogen (700 bar) </h1>
            tank: {{decimals(hydrogen.kgpkm * dist)}} kg <br/>
            Pris: {{decimals(hydrogen.pricekg * hydrogen.kgpkm * dist)}} kr <br/> 
            Utslipp: {{decimals(0)}} kg Co2 <br/>
            Energi: {{decimals(hydrogen.kwhpkg * hydrogen.kgpkm * dist)}} kWh <br/>
            <br/>
            <v-row>
                <v-col><v-text-field label="kr / kg" variant="underlined" v-model="hydrogen.pricekg" type="number"/></v-col>
                <v-col><v-text-field label="kg / km" variant="underlined" v-model="hydrogen.kgpkm" type="number"/></v-col>
            </v-row>

        </v-card>

        <v-card class="fuel" width="350px" outlined shaped>
            <h1> Diesel </h1>
            tank: {{decimals(diesel.lpkm * dist)}} l <br/>
            Pris: {{decimals(diesel.pricel * diesel.lpkm * dist)}} kr <br/> 
            Utslipp: {{decimals(diesel.co2l * diesel.lpkm * dist)}} kg Co2 <br/>
            Energi: {{decimals(diesel.kwhpl * diesel.lpkm * dist)}} kWh <br/>
            <br/>
            <v-row>
                <v-col><v-text-field label="kr / liter" variant="underlined" v-model="diesel.pricel" type="number"/></v-col>
                <v-col><v-text-field label="liter / km" variant="underlined" v-model="diesel.lpkm" type="number"/></v-col>
            </v-row>
        </v-card>

        <v-card class="fuel" width="350px" outlined shaped>
            <h1> Bensin </h1>
            tank: {{decimals(bensin.lpkm * dist)}} l <br/>
            Pris: {{decimals(bensin.pricel * bensin.lpkm * dist)}} kr <br/> 
            Utslipp: {{decimals(bensin.co2l * bensin.lpkm * dist)}} kg Co2 <br/>
            Energi: {{decimals(bensin.kwhpl * bensin.lpkm * dist)}} kWh <br/>
            <br/> 
            <v-row>
                <v-col><v-text-field label="kr / liter" variant="underlined" v-model="bensin.pricel" type="number"/></v-col>
                <v-col><v-text-field label="liter / km" variant="underlined" v-model="bensin.lpkm" type="number"/></v-col>
            </v-row>
        </v-card>
    </div>

    <br/>
    Kilder<br/>
    <a href="https://www.idealhy.eu/index.php?page=lh2_outline">idealhy ~2013</a><br/>
    <a href="https://natural-resources.canada.ca/sites/www.nrcan.gc.ca/files/oee/pdf/transportation/fuel-efficient-technologies/autosmart_factsheet_9_e.pdf">canadian govt 2014</a><br/>
    <a href="https://h2.live/en/">H2 kg price h2.live</a><br/>
    <a href="https://www.cargopedia.net/europe-fuel-prices">diesel and gas price cargopedia.net 25.03.24</a><br/>
    <a href="http://www.h2data.de/">h2Data.de</a><br/>
    <a href="https://www.nrel.gov/docs/fy19osti/73010.pdf">nrel gov - h2 fuel efficiency 14.04.14</a><br/><br/>
    </v-card>
</template>

<script>
  export default {
    name: 'FuelCalc',

    data: () => ({
        dist: 500,
        hydrogen: {
            name: "Hydrogen",
            kwhpkg: 33.33,
            pricekg: 300,
            kgpkm: 0.012,
        },
        diesel: {
            name: "Diesel",
            kwhpl: 10,
            co2l: 2.7,
            pricel: 22,
            kmpl: 20.92,
            lpkm: 0.06,
        },
        bensin : {
            name: "Bensin",
            kwhpl: 8.8,
            co2l: 2.3,
            pricel: 24,
            lpkm: 0.07,
        },
    }),
      methods: {
        decimals(num){
            return Math.round(num*100) / 100
        },
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
