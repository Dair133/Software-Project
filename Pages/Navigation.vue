<template>
    <body class="bodyMain">
    <h1 style="color:white">This is the navigation page</h1>
    <router-link to ="/accountPage" class =btn-primary > AccountPage</router-link><br>
<router-link to ="/authSignIn" class =btn-primary>Sign In Page</router-link><br>
<router-link to ="/authChangePassword" class =btn-primary>Change Password </router-link><br>
<router-link to ="/authCreateAccount" class =btn-primary >Create Account</router-link><br>
<router-link to ="/homepage" class =btn-primary >Homepage</router-link><br>
<router-link to ="/screenshots" class =btn-primary >Screenshots page(WIP)</router-link><br>
<router-link to ="/test" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>


</body>
    </template>
    <style scoped>
    .btn-primary{
  position: relative;
  display: inline-block;
  width: 35mm;
  height: 35mm;
color:white;
                outline: 0;
                border: 0;
                cursor: pointer;
                will-change: box-shadow,transform;
                background: radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100% );
                box-shadow: 0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%);
                padding: 0 32px;
                border-radius: 4px;
                color: #fff;
                height: 40px;
                font-size: 12px;
                text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
                transition: box-shadow 0.15s ease,transform 0.15s ease;
                
}
                .btn-primary:hover {
                    box-shadow: 0px 4px 8px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
                    transform: translateY(-2px);
                }
               .btn-primary:active{
                    box-shadow: inset 0px 3px 7px #3c4fe0;
                    transform: translateY(2px);
                }
                .bodyMain{
  width:100%;
  height:100%;
  background: radial-gradient(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%);
}
        </style>
