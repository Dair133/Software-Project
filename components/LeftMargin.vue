<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">


  <div class="container">
    
    <div class="LeftMargin">
<div class="logoSection">
  <div>  <section class="stage">
  <figure class="ball"><span class="shadow"></span></figure>
</section></div>
</div>
<div class="linkSection">
  <br>
<img src="../images/undraw_smiley-face.svg" class=linkIcon>       Home <br>
<img src="../images/undraw_smiley-face.svg" class="linkIcon">     About Us <br>
</div>
<div class="playerSection">Players Here</div>

</div>

  </div>

</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.LeftMargin{
  top: 0cm;
height: 100vh;
width: 30vh;
position: absolute;
left: 0cm;
color: rgb(215, 27, 27);
background-color: rgb(0, 0, 0);

}
.logoSection{
  background-color: rgba(0, 0, 0, 0);
height: 24vh;
width: 30vh;
border-color: rgb(242, 10, 219);
border-right-style:solid;
border-bottom-style:solid;
border-bottom-left-radius: 0cm;
border-bottom-right-radius: 0cm;
border-bottom-width: 0.2vh

}
@keyframes logoIn{
from {border-bottom-left-radius: 0cm;border-bottom-right-radius: 0cm;}
to {  border-bottom-left-radius: 3cm;border-bottom-right-radius: 3cm;}

}
@keyframes logoOut{
from {border-bottom-left-radius: 3cm;border-bottom-right-radius: 3cm;}
to {  border-bottom-left-radius: 0cm;border-bottom-right-radius: 0cm;}

}
.logoSection:hover{
  border-bottom-left-radius:3cm;
border-bottom-right-radius: 3cm;
animation-name: logoIn;
animation-duration: 0.45s
}
.logoSection:not(:hover){
  animation-name: logoOut;
animation-duration: 0.45s
}

.linkSection{
 
  border-top-color: #be3bbe;
background-color: rgb(33, 32, 32);
height: 35vh;
width: 30vh;
top:24vh;
position:absolute;
color:white;
text-align:left;
font-size: larger;
}
.playerSection{
background-color: #890aad;
top:59vh;
height: 41vh;
width: 30vh;
position:absolute
}


.linkIcon{
height: 4vh;

}
.pic{
height: 20vh;
width: 27vh;
left:1.5vh;
top:1vh;
position:absolute
}
.ball {
  left:1.5vh;
  top:-1.8vh;
  display: inline-block;
  width: 20vh;
  height: 20vh;
  margin: 0;
 
  position: absolute;
    background: url(http://hop.ie/balls/images/tennisball.png) no-repeat;  

  background-size: 100%;
  
}
.ball:before {
  content: "";
  position: absolute;
  top: 1%;
  left: 5%;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 0px, #ca0ae8, rgba(194, 12, 203, 0.866) 58%);
  -webkit-filter: blur(5px);
  z-index: 2;
  box-shadow:
      0 0 7px #ffffff,
      0 0 10px  #d21bc2,
      0 0 21px  #890aad,
      0 0 42px rgb(157, 33, 199),
      0 0 82px rgb(137, 37, 155),
      0 0 92px rgb(131, 11, 155),
      0 0 102px rgb(131, 11, 155),
      0 0 151px rgb(131, 11, 155);

    color: var(--clr-bg);
}
.ball:hover

.ball:after {
  content: "";
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 50% 30%, rgba(211, 205, 14, 0.923), rgba(200, 190, 20, 0.2) 50%, #575300 100%);
  
}
.ball .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%);
    -webkit-transform: rotateX(90deg) translateZ(-160px);
    transform: rotateX(90deg) translateZ(-160px);
    z-index: 1; }
.stage {
  width: 300px;
  height: 300px;
  display: inline-block;
  margin: 20px;
  -webkit-perspective: 1200px;
  -moz-perspective: 1200px;
  -ms-perspective: 1200px;
  -o-perspective: 1200px;
  perspective: 1200px;
  -webkit-perspective-origin: 50% 50%;
  -moz-perspective-origin: 50% 50%;
  -ms-perspective-origin: 50% 50%;
  -o-perspective-origin: 50% 50%;
  perspective-origin: 50% 50%;
}

body {
  width: 300px;
  margin: 20px auto;
  background: linear-gradient(to bottom, rgba(100, 100, 100, 0.2) 0%, rgba(255, 255, 255, 0.5) 40%,  #be3bbe 100%);
  background-repeat: no-repeat;
}
:root {
  --clr-neon: hsl(317 100% 54%);
  --clr-bg: hsl(323 21% 16%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-bg);
  font-family: "Balsamiq Sans", cursive;
  color: var(--clr-neon);
  padding-right: 10rem;
}

.neon-button {
  font-size: 4rem;

  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-neon);
  border: var(--clr-neon) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);

  position: relative;
}

.neon-button::before {
  pointer-events: none;
  content: "";
  position: absolute;
  background: var(--clr-neon);
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;

  transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
  filter: blur(1em);
  opacity: 0.7;
}

.neon-button::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em 0.5em var(--clr-neon);
  opacity: 0;
  background-color: var(--clr-neon);
  z-index: -1;
  transition: opacity 100ms linear;
}

.neon-button:hover,
.neon-button:focus {
  color: var(--clr-bg);
  text-shadow: none;
}

.neon-button:hover::before,
.neon-button:focus::before {
  opacity: 1;
}
.neon-button:hover::after,
.neon-button:focus::after {
  opacity: 1;
}
</style>