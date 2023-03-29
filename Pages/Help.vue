<template>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

    <div class="container">
    <div class="head">
      <div class="support">
        <h1 class="txt">Support</h1>
      </div>
    </div>
    <div class="content">
      <div class="stuff">
        <div class="dropdown">
          <div class="question" @click="displayModal1">Question 1</div>
          <div class="answer" v-bind:style='{"display" : (isActive1? "block" : "none" )}'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eum facere id in incidunt perspiciatis provident quibusdam ratione? Ad, dolores est explicabo facilis fuga id in ipsa neque nesciunt odio odit officiis perspiciatis quas qui ullam veniam, voluptatem. Expedita facilis fugit iste laborum maxime non perferendis quaerat saepe, sed tempora?</p>
          </div>
        </div>
        <div class="dropdown">
          <div class="question" @click="displayModal2">Question 2</div>
          <div class="answer" v-bind:style='{"display" : (isActive2? "block" : "none" )}'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, libero, suscipit? Blanditiis cumque eligendi facere incidunt sunt? Alias dicta ex iusto minus quia! Accusantium ad exercitationem facere laboriosam possimus ratione similique tenetur velit! Consequatur enim minus quo reiciendis voluptates. Esse harum libero maxime neque quis reprehenderit sequi tempore. Laboriosam, possimus.</p>
          </div>
        </div>
        <div class="dropdown">
          <div class="question" @click="displayModal3">Question 3</div>
          <div class="answer" v-bind:style='{"display" : (isActive3? "block" : "none" )}'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci alias aliquid assumenda at commodi consectetur debitis dolore dolorem doloribus, eaque eius eligendi eveniet expedita harum hic iste iure laudantium libero magnam maiores minus necessitatibus, neque nobis nulla optio praesentium quam quas ratione reprehenderit sit soluta totam vel vitae.</p>
          </div>
        </div>
        <div class="dropdown">
          <div class="question" @click="displayModal4">Question 4</div>
          <div class="answer" v-bind:style='{"display" : (isActive4? "block" : "none" )}'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad animi beatae cupiditate deleniti doloremque dolorum, harum natus numquam obcaecati perspiciatis quasi quidem quis tempore ullam vel voluptatum. Assumenda at consequatur corporis debitis delectus dignissimos doloremque ea impedit ipsa ipsam itaque laboriosam laborum libero, maiores neque officiis quisquam rem voluptates?</p>
          </div>
        </div>
        <div class="dropdown">
          <div class="question" @click="displayModal5">Question 5</div>
          <div class="answer" v-bind:style='{"display" : (isActive5? "block" : "none" )}'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur dicta distinctio dolor dolorem eaque enim, error exercitationem in iusto laboriosam laborum magni maiores mollitia nulla odio officia possimus quos, rem soluta temporibus ullam vel, velit! Accusamus, aliquid assumenda aut consequatur delectus earum hic ipsa molestias quam quod, suscipit voluptates.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/*
const dropdowns = document.getElementsByClassName('dropdown');

for (let i = 0; i<dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', function (){
    this.classList.toggle('active')
  })
}
*/

export default {
  name: "Help",
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false
    }
  },
  methods: {
    displayModal1:function () {
      this.isActive1 = !this.isActive1
    },
    displayModal2:function () {
      this.isActive2 = !this.isActive2
    },
    displayModal3:function () {
      this.isActive3 = !this.isActive3
    },
    displayModal4:function () {
      this.isActive4 = !this.isActive4
    },
    displayModal5:function () {
      this.isActive5 = !this.isActive5
    },
  }
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
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.15fr 0.85fr;
    background-image: url("../images/blockdrop.jpg");
  }

  .head {
    background-color: transparent;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
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

  .stuff {
    width: 40%;
  }

  .dropdown {
    margin-bottom: 10px;
  }

  .question {
    background-color: #efebeb;
    padding: 8px;
    cursor: pointer;
    font-size: 20px;
  }

  .question::before {
    content: "+";
    left: 95%;
    font-size: 1.2em;

  }

  .answer {
    position: relative;
    background: #f6f4f4;
  }


</style>