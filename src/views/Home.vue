<template>
  <div class="home-page">
    <b-container fluid class="header">
      <b-container class="header-container">
        <b-row class="header-row">
          <b-col class="column" lg="7">
            <h1 class="header-large">Vuokraa halli käyttöösi
              <span id="price"> <small id="starting">Alk.</small>
                <span id="price-index">{{ price }}€</span>
              </span>
            </h1>
            <p class="w-100 description">Saat hallin vaivattomasti omaan käyttöösi.
            Varaa aika ja huolla itse.</p>
          </b-col>
        </b-row>
        <b-row
                class="intro-buttons">
          <b-col xl="3">
            <button class="btn btn-intro">Tutustu</button>
          </b-col>
          <b-col>
            <div class="icon-container">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
                class="info-tag">
                <font-awesome-icon
                icon="calendar" class="info-icon"/>
                <p class="info-tag-text">Yksinkertainen ajanvaraus</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
                class="info-tag">
                <font-awesome-icon icon="car" class="info-icon"/>
                <p class="info-tag-text">Laadukkaat laitteet ja nosturit</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="800"
                data-aos-duration="1000"
                class="info-tag">
                <font-awesome-icon icon="tools" class="info-icon"/>
                <p class="info-tag-text">Monipuoliset työkalut</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row>
        <Search/>
      </b-row>
    </b-container>
    <b-container style="height: 200vh"></b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Search from '@/components/Search.vue';

@Component({
  components: {
    HelloWorld,
    Search,
  },
})
export default class Home extends Vue {
  public price: number;

  constructor() {
    super();
    this.price = 40;
  }
}
</script>
<style scoped lang="scss">
  @import '@/assets/css/variables.scss';
  .home-page {
    background-color: rgb(243, 243, 243);
  }
  .header {
    height: auto;
    background-image: url("../../src/assets/garage.png");
    background-size: cover;
  }
  .header-container {
    height: auto;
    padding: 35vh 0vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .intro-buttons {
    align-self: start;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    text-align: left;
    margin-top: 20px;
  }
  .icon-container {
    display: flex;
  }
  .info-icon {
    color: $primary;
    font-size: 2.1em;
    padding: 5px;
  }
  .info-tag {
    margin: 0px 20px;
    text-align: center;
  }
  .info-tag-text {
    color: white;
    font-size: 0.8em;
  }
  .header-row {
    text-align: left;
    color: white;
    width: 100%;
  }
  .column {
    padding: 0;
  }
  .header-large {
    text-align: left;
    width: 100%;
    font-size: 5.5em;
    font-weight: 800;
  }
  .description {
    margin-top: 20px;
  }
  #price {
    font-size: 0.5em;
  }
  #starting {
    color: $primary;
  }

  @media only screen and (max-width: $lg) {
    .header-large {
        font-size: 3.2em;
    }
    .icon-container {
      padding-top: 40px;
    }
    .info-tag {
      margin-left: 0px;
      text-align: center;
    }
    .header-container {
      height: auto;
      padding: 30vh 0vh;
      padding-bottom: 25vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
</style>
