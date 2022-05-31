<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
import TitleType from '@/components/TitleType.vue'
</script>

<template>
  <!-- <header>

  </header> -->
  
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
  <div class="wrapper">
    <TitleType class="z-10" msg="Chronoverse" />

    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
    <div class="menu"> 
      <div class="btn"> Gallery</div>
      <div class="btn"> 
        <!-- <RouterLink to="/">Story</RouterLink> -->
        <!-- <NuxtLink to="/">Story</NuxtLink> -->
      </div>
      <div class="btn"> Codex</div>
    </div>

    <div class="chrono-vista">
      <div class="w-full water-cont"> 
        <div class="ocean"> </div>
        <div class="sun"> </div>
      </div>
      
      <div class="wallace-tower"> </div>
      <!-- <div class="flex">
      </div> -->
      <div class="cloud-cont"> 
        <div class="x1"><div class="cloud"></div></div>
        <div class="x2"><div class="cloud"></div></div>
        <div class="x3"><div class="cloud"></div></div>
        <div class="x4"><div class="cloud"></div></div>
        <div class="x5"><div class="cloud"></div></div>
        <div class="x6"><div class="cloud"></div></div>
        <div class="x7"><div class="cloud"></div></div>
        <div class="x8"><div class="cloud"></div></div>
        <div class="x9"><div class="cloud"></div></div>
      </div>
    </div>
  </div>


  <!-- <RouterView /> -->
</template>

<style>
@import '@/assets/base.css';

/*OVERRIDE*/
.ubuntu-bold {
  font-family: "Ubuntu-Bold", Arial, sans-serif;
}

body {
  font-family: "Ubuntu-Light", Arial, sans-serif;
  background-color: white;
  color:  black;
  /*font: ;*/
  width: 100%;
  height: 100%;
}

#app {
  /*max-width: 1280px;*/
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  /*margin: 0 auto;*/
  /*padding: 2rem;*/

  font-weight: normal;
}

#__nuxt {
  /*zz:  a bit hacky*/
  width: 99%;
  height: 99%;
  position: absolute;
  left: 0;
  bottom: 0;
}

.wrapper {
  /*display: block;*/
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  bottom: 0;
}

.menu {
  /*float: none;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 5;
}

.btn {
  background: black;
  color: white;
  padding: 5px;
  width: 150px;
  text-align: center;
  margin: 2px;
  -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.btn:hover {
  cursor: pointer;
  background: gray;
}

.chrono-vista {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%; 
  z-index: 4;
  overflow: hidden;
}


/* OBJECTS */

.water-cont {
  display: block;
  height: 45%;
  position: absolute; 
  left: 0; 
  bottom: 0;
}

.ocean {
  background: linear-gradient(90deg, #ccc 0%, #777 100%);
  /*position: absolute; 
  left: 0; 
  bottom: 0;*/
  width: 100%;
  height: 100%;
  z-index: 5;
}

.wave {
  /*height: 50px;*/
  /*position: relative;*/
  /*background: linear-gradient(90deg, #27b6b9 0%, #0f4061 100%);*/
  /*background: linear-gradient(90deg, #27b6b9 0%, #333 100%);*/
}

.wallace-tower {
  /*display:inline-block;*/
  position: relative;
  bottom: -260px;
  left: 5%; 
  
  height: 1200px;
  width: 40%;
  max-width: 500px;
  background: #000;
  /*-moz-border-radius: 50%;
  -webkit-border-radius: 50%;*/
  border-radius: 50%;
  /*clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);*/
  z-index: 7;
}

.cloud-cont {
  position: absolute;
  width: 100%;
  height: 0%;
  left: 0%;
  bottom: 0%;
  z-index: 8;
  /*padding-top: 50%;*/
}

.cloud {
  animation: levitate 6s ease infinite;
  background: #fff;
  background: -moz-linear-gradient( ,  #fff 5%, #f1f1f1 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#fff), color-stop(100%,#f1f1f1));
  background: -webkit-linear-gradient( ,  #fff 5%,#f1f1f1 100%);
  background: -o-linear-gradient( ,  #fff 5%, #f1f1f1 100%);
  background: -ms-linear-gradient( ,  #fff 5%, #f1f1f1 100%);
  background: linear-gradient( ,  #fff 5%, #f1f1f1 100%);
  
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );
  
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  
  -webkit-box-shadow: 0 12px 200px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 12px 200px rgba(0, 0, 0, 0.6);
  box-shadow: 0 12px 200px rgba(0, 0, 0, 0.6);

  height: 120px;
  width: 350px;
  
  position: absolute;
  left: 0%;
  bottom: 0%;
  z-index: 100;
}

.cloud:after, .cloud:before {
  background: #fff;
  content: '';
  position: absolute;
  z-index: -1;
  /*border: 1px solid black;*/
}

.cloud:after {
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;

  height: 100px;
  left: 50px;
  top: -50px;
  width: 100px;
}

.cloud:before {
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;

  width: 180px;
  height: 180px;
  right: 50px;
  top: -90px;
}

@keyframes levitate{
  50% { transform: translateY(-25px); }
}

.x1 { left: -15%; bottom: -2px;}
.x2 { left: 0%; bottom: -11px;}
.x3 { left: 17%; bottom: -12px;}
.x4 { left: 30%; bottom: -13px;}
.x5 { left: 44%; bottom: -14px;}
.x6 { left: 60%; bottom: -6px;}
.x7 { left: 75%; bottom: -7px;}
.x8 { left: 85%; bottom: -8px;}
.x9 { left: 97%; bottom: -9px;}

.x1 .cloud { animation-duration: 11s; -webkit-transform: scale(0.85);-moz-transform: scale(0.85);transform: scale(0.85);}
.x2 .cloud { animation-duration: 10s; -webkit-transform: scale(0.75);-moz-transform: scale(0.75);transform: scale(0.75);}
.x3 .cloud { animation-duration: 6s; -webkit-transform: scale(0.90);-moz-transform: scale(0.90);transform: scale(0.90);}
.x4 .cloud { animation-duration: 7s; -webkit-transform: scale(0.70);-moz-transform: scale(0.70);transform: scale(0.70);}
.x5 .cloud { animation-duration: 11s; -webkit-transform: scale(0.90);-moz-transform: scale(0.90);transform: scale(0.90);}
.x6 .cloud { animation-duration: 7s; -webkit-transform: scale(0.80);-moz-transform: scale(0.80);transform: scale(0.80);}
.x7 .cloud { animation-duration: 9s; -webkit-transform: scale(0.84);-moz-transform: scale(0.84);transform: scale(0.84);}
.x8 .cloud { animation-duration: 6s; -webkit-transform: scale(1);-moz-transform: scale(1);transform: scale(1);}
.x9 .cloud { animation-duration: 8s; -webkit-transform: scale(0.60);-moz-transform: scale(0.60);transform: scale(0.60);}

.sun {
  position: absolute;
  right: 10%;
  top: -90px;
  width: 180px;
  height: 180px;
  background-color: #f46f0d;
  /*background: linear-gradient(0deg, #f46f0d 0%, #777 100%);*/
  -webkit-border-radius: 200px;
  -moz-border-radius: 200px;
  border-radius: 200px;
  z-index: 3;

}

/*experimental*/
.page-enter-active, .page-leave-active {
  transition: all .25s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}

</style>
