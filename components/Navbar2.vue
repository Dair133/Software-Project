<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">


  <div class="container">
    <nav class="navbar">
      <h1 class="logo">MMoguls</h1>
      <ul class="menu">
        <router-link class="underline" to="/">Home</router-link>
        <router-link class="underline" to="/aboutus">About us</router-link>
        <router-link class="underline" to="/help">Help</router-link>
        <router-link class="btn" to="/AuthCreateAccount">Sign up</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
* {
  color: white;
  font-family: 'Secular One', sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  width:100%;
  background-image: linear-gradient(#800080, #330433);
  /*background-color: #700070;*/
  /*background-color: #330433;*/
}

.navbar {
  display: grid;
  grid-template-columns: 0.2fr auto;
  align-items: center;
  height: 75px;
}

.logo {
  color: white;
  justify-self: start;
  margin-left: 20px;
}

.menu {
  display: flex;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 30px;
  text-align: center;
  width: 40%;
  justify-self: end;
  padding-right: 50px;
}

a {
  font-size: 20px;
  text-decoration: none;
  color: #e8dede;
  /* Temp fix to other 3 moving up when changing the padding of the Login button */
  padding: 8px 15px;
}

.underline:after {
  content: "";
  position: absolute;
  background-color: #800080;
  height: 3px;
  width: 0;
  left: 0;
  bottom: -10px;
  transition: 0.3s;
}
.underline:hover {
  color: white;
  /*font-size: 18px;*/
}

.btn:hover {
  /* moves everything */
  /*padding: 9px 16px;*/
  border-color: #181818;
}

.underline:hover:after {
  width: 100%;
}
.btn {
  color: black;
  background-color: white;
  border-radius: 5px;
  border-style: solid;
  border-color: #800080;
  padding: 9px 20px;
}
</style>