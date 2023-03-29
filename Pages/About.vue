<template>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">


  <div class="container">
    <div class="header">
      <div class="support">
        <h1 class="txt">About us</h1>
      </div>
    </div>
    <div class="body">
      <div class="part1">
        <div class="profile">
          <img src="../images/user.svg" class="profilepic">
          <div class="description">
            <p class="name">Tim Samoska</p>
            <hr>
            <p class="role">Frontend Dynamic Code</p>
          </div>
        </div>
      </div>
      <div class="part2">
        <div class="sec">
          <div class="profile2">
            <img src="../images/user.svg" class="profilepic">
            <div class="description">
              <p class="name">Alasdair Ball</p>
              <hr>
              <p class="role">Database component</p>
            </div>
          </div>
        </div>
        <div class="sec">
          <div class="text">
            <p class="ss">THE SCRIPT SPHERE TEAM</p>
          </div>
        </div>
        <div class="sec">
          <div class="profile2">
            <img src="../images/user.svg" class="profilepic">
            <div class="description">
              <p class="name">Daniel Liu</p>
              <hr>
              <p class="role">Frontend View Code</p>
            </div>
          </div>
        </div>
      </div>
      <div class="part3">
        <div class="profile">
          <img src="../images/user.svg" class="profilepic">
          <div class="description">
            <p class="name">Brian O'Gorman</p>
            <hr>
            <p class="role">Backend server side code</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Secular One', sans-serif;
  }

  .container {
    background-image: url("../images/blockdrop.jpg");
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.15fr 0.85fr;
  }

  .header {
    background-color: transparent;
  }

  .profilepic {
    top: 1%;
    width: 100%;
  }

  .support {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 100%;
    width: 30%;
  }

  .txt {
    color: white;
    font-size: 50px;
  }

  .body {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .part1, .part3 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .part2 {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .profile {
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    background-color: #ffffff;
    width: 90%;
    height: 30%;
  }

  .profile2 {
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    background-color: #ffffff;
    width: 90%;
    height: 90%;
  }

  .description {
    text-align: center;
    vertical-align: middle;
  }

  .sec {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 100%;
  }

  .name {
    padding-top: 5%;
    font-size: 30px;
  }

  hr {
    border: none;
    height: 3px;
    background-color: #333;
    width:50%;
    margin:0 auto;
  }

  .role {
    padding-top: 20px;
  }

  .ss {
    font-size: 50px;
    color: white;
    text-align: center;
    vertical-align: middle;
  }

</style>