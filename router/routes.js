import { getAuth, onAuthStateChanged } from "firebase/auth";
/*import app from "/firebase"*/
function isAuth(to, from, next){
    console.log("Checking auth");
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
// User is signed in so continue to desired page
            return next();
// ...
        } else {
// User is signed out
// Send them back to the home page or maybe the login page
            return next({path : '/'});
        }
    });
}

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
    {path:'/test',component:loadPage('Test')},
    {path:'/play',component:loadPage('Play'), beforeEnter: isAuth },
    {path:'/random',component:loadPage('Random')},
    {path:'/realtime',component:loadPage('Realtime')},
        {path:'/settings',component:loadPage('Settings'), beforeEnter: isAuth},
        {path:'/stats',component:loadPage('Statistics'), beforeEnter: isAuth},
        {path:'/idetest',component:loadPage('IdeTest'), beforeEnter: isAuth},
        {path:'/help',component:loadPage('Help')},
        {path:'/aboutus',component:loadPage('About')},
    ]