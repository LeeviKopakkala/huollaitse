<template>
    <b-container>
        <b-container id="search-container">
            <b-row>
                <div class="search-title">
                    <font-awesome-icon icon="search" id="search-icon" />
                    <h1 class="header-2" >Hae vapaita halleja</h1>
                </div>
            </b-row>
            <b-row>
                <b-col md="6" class="input-container">
                    <div class="date-input input-left">
                        <p class="input-helper">Alkaa</p>
                        <input id="input-from" placeholder="2021-01-01 08:00">
                        <font-awesome-icon icon="calendar-alt" class="search-calendar-icon"/>
                    </div>
                </b-col>
                <b-col md="6" class="input-container">
                    <div class="date-input input-right">
                        <p class="input-helper">Päättyy</p>
                        <input id="input-to" placeholder="2021-01-01 16:00">
                        <font-awesome-icon icon="calendar-alt" class="search-calendar-icon"/>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="10"></b-col>
                <b-col>
                  <button
                    class="btn btn-search"
                    v-on:click="loadReservations()"
                    v-scroll-to="{
                        el: '#search-results',
                        duration: 1000,
                        offset: -400,
                        easing: 'ease',
                        }">
                        <div class="btn-content">
                            <p class="btn-title">Hae</p>
                            <font-awesome-icon icon="arrow-right" id="search-button-icon"/>
                        </div>
                    </button>
                </b-col>
            </b-row>
        </b-container>
        <b-container class="search-results-container" id="search-results">
            <div class="loading-container" v-if="isLoading === true">
                <font-awesome-icon icon="toolbox" id="search-button-icon"/>
            </div>
            <ul id="example-1">
                <li v-for="workshop in workshops" :key="workshop.id">
                    {{ workshop.name }}
                </li>
            </ul>
        </b-container>
    </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
  @Prop() private msg!: string;

  public isLoading = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public workshops: any;

  loadReservations() {
    this.isLoading = true;
    Vue.axios.get('http://localhost:3000/api/workshops').then((response) => {
      console.log(response.data);
      this.workshops = response.data;
      this.isLoading = false;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import '@/assets/css/variables.scss';
    #search-container {
        width: 100%;
        margin-top: -100px;
        background-color: white;
        border-radius: 25px;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.20), 0 6px 40px 0 rgba(0, 0, 0, 0.15);
        text-align: left;
        padding: 60px;
        margin-bottom: 50px;
    }
    .btn-search {
      width: auto;
      padding: 0;
      background-color: $primary;
      color: white;
      margin-top: 25px;
      position: absolute;
      right: 10px;
    }
    .btn-content {
        width: 150px;
        padding: 15px 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .btn-title {
        margin: 0;
        font-size: 1.0em;
    }
    .search-title {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #search-icon {
        color: $primary;
        font-size: 1.5em;
        margin-right: 40px;
        background: none;
    }
    .search-calendar-icon {
        color: $primary;
    }
    input:focus {
        outline: none;
    }
    .input-helper {
        width: 100%;
        height: 100%;
        margin: 0;
        color: $primary;
    }
    .input-left {
        border-radius: 25px 0px 0px 25px;
    }
    .input-right {
        border-radius: 0px 25px 25px 0px;
    }
    input {
        border: none;
        width: 100%;
        position: absolute;
        background: none;
        padding: 0px;
        padding-left: 120px;
        height: 100%;
    }
    .input-container {
        padding: 0;
        margin-top: 20px;
    }
    .date-input {
        border: 1px solid rgb(228, 228, 228);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 40px;
        }
    @media screen and (max-width: $md) {
        .input-left, .input-right {
            border-radius: 25px;
        }
        #search-container {
            padding: 50px;
        }
        .date-input {
            padding: 20px 25px;
        }
        #input-from, #input-to {
            font-size: 0.9em;
            padding-left: 30%;
        }
        .input-helper {
            font-size: 0.8em;
        }
    }
    @media screen and (max-width: 375px) {
         #input-from, #input-to {
            font-size: 0.8em;
            padding-left: 30%;
        }
        #search-container {
            padding: 40px;
        }
        .header-2 {
            font-size: 1.2em;
        }
        #search-icon {
            margin-right: 30px;
            font-size: 1.2em;
        }
        .date-input {
            padding: 17px 15px;
        }
    }
    // Results container
    .search-results-container {
        background-color: white;
        padding: 20px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        transition: height 1s;
    }
    .loading-container {
        border-radius: 15px;
        background-color: white;
        color: $primary;
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15), 0 6px 40px 0 rgba(0, 0, 0, 0.10);
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-animation-name: spinner;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-duration: 3s;

        animation-name: spinner;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-duration: 3s;

        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    // Animations

    /* WebKit and Opera browsers */
    @-webkit-keyframes spinner {
        from { -webkit-transform: rotateY(0deg);    }
        to   { -webkit-transform: rotateY(-360deg); }
    }

  /* all other browsers */
  @keyframes spinner {
    0%{
      -moz-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    50% {
      -moz-transform: rotateY(-360deg);
      -ms-transform: rotateY(-360deg);
      transform: rotateY(-360deg);
    }
    75% {
        -moz-transform: rotateX(180deg);
      -ms-transform: rotateX(180deg);
      transform: rotateX(180deg);
    }
    100% {
       -moz-transform: rotateX(360deg);
      -ms-transform: rotateX(360deg);
      transform: rotateX(360deg);
    }
  }
</style>
