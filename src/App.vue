<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" id="nav">
        <b-navbar-brand id="logo-container">
          <img id="logo-icon" src="@/assets/logo.svg"><h1 id="logo-header">Huollaitse</h1>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
         <b-navbar-nav class="navbar-buttons">
            <a class="navbar-link" href="#">Koti</a>
            <a class="navbar-link" href="#">Lisätietoja</a>
            <a class="navbar-link" href="#">Ehdot</a>
         </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
  position: absolute;
  left: 0;
  text-align: center;
  z-index: 100;
}

.navbar-link {
  color: white;
  font-size: 1.2em;
}

#logo-header {
  padding-left: 20px;
  padding-top: 10px;
  color: white;
  font-size: 1.5em;
}

@media only screen and (min-width: $md) {
  .navbar-buttons {
    display: flex;
    margin: 0 auto;
    padding-right: 300px;
    justify-content: space-around;
    width: 40%;
  }

  .navbar-link {
    padding: 20px;
    font-weight: 500;
  }
}
@media only screen and (max-width: $md) {
   #logo-header {
    font-size: 1.2em;
  }
  #logo-icon {
    width: 35px;
  }
}

#logo-container {
  display: flex;
  padding: 20px;
}
</style>
