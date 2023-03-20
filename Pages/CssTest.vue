<script>

import LeftMargin from "../components/LeftMargin.vue";

export default{
    inheritAttrs:false,
    components:{
        LeftMargin
    },
 
}
</script>
<template>
<header style="background-color: brown;">

This is the header

</header>
<body  class=body style="background-color: blue;">
 <div class="column">

 </div>


This is the body
</body>
<LeftMargin>
This is the left margin
</LeftMargin>

</template>
<style scoped>



</style>

