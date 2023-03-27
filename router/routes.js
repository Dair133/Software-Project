function loadPage (component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */
    `@/pages/${component}.vue`)}
    export default [
    { path: '/', component:loadPage('AuthSignIn') },
    { path: '/accountPage', component:loadPage('AccountPage') },
    { path: '/navigationPage',component:loadPage('Navigation')},
    { path: '/authSignIn',component:loadPage('AuthSignIn')},
    {path:'/authChangePassword',component:loadPage('AuthChangePassword')},
    {path:'/authCreateAccount',component:loadPage('AuthCreateAccount')},
    {path:'/homepage',component:loadPage('Homepage')},
    {path:'/screenshots',component:loadPage('Screenshots')},
    {path:'/test',component:loadPage('Test')},
    {path:'/play',component:loadPage('Play')},
    {path:'/random',component:loadPage('Random')},
    {path:'/realtime',component:loadPage('Realtime')},
    {path:'/ideTest',component:loadPage('IdeTest')},
    {path:'/cssTest',component:loadPage('CssTest')},
    ]
    //beforeEnter:isAuth()