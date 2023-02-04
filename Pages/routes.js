function loadPage (component) {
    // '@' is aliased to src/components
    return () => import(/* webpackChunkName: "[request]" */
    `@/pages/${component}.vue`)}
    export default [
    { path: '/', component:loadPage('Home') },
    { path: '/accountPage', component:loadPage('AccountPage') },
    { path: '/navigationPage',component:loadPage('Navigation')},
    { path: '/authSignIn',component:loadPage('AuthSignIn')},
    {path:'/authChangePassword',component:loadPage('AuthChangePassword')},
    {path:'/authCreateAccount',component:loadPage('AuthCreateAccount')},
    {path:'/homepage',component:loadPage('Homepage')},
    {path:'/screenshots',component:loadPage('Screenshots')},
    {path:'/test',component:loadPage('Test')}
    ]