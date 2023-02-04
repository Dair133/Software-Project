<template>
    <h1>Welcome to my blog page</h1>
    <p>This is my blog page for my SaaS app</p>
    <div class="container">
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" v-model="handle" id="exampleFormControlInput1"
    placeholder="name@example.com">
    </div>
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
    <textarea class="form-control" v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button type="button"   @click="postComment()" class="btnbtn-primary">Post Comment</button>
    <button type="button"   @click="getComments()" class="btn btn-primary">show comments</button>

    <div class="mb-3">
<ul id="array-rendering">
<li v-for="comment in
comments">
{{ comment.data.comment }}
</li>
</ul>
</div>
   
   
<button type="button" class="btn btn-primary">Primary</button>
</div>
    </div>
   
    
    </template>
    <style scoped>
    .right{
    text-align: right;
    }
    </style>
    <script>
 import test from '../main'

import { getFunctions, httpsCallable } from "firebase/functions";
export default {
data() {
return {
handle: '',
comment: '',
comments:[],
}
},
created(){//created keyword runs function when the page is loaded
this.getComments();
},
methods : {
 
    postComment() {
console.log(this.handle);
console.log(this.comment);
const functions = getFunctions(test.methods.intialiseFirebase());
const postComment = httpsCallable(functions, 'postcomment');
postComment({"handle": this.handle, "comment":
this.comment})
.then((result) => {
// Read result of the Cloud Function.
/** @type {any} */
console.log(result);
});
},
getComments(){
const functions = getFunctions(test.methods.intialiseFirebase());
const getComments = httpsCallable(functions,
'getcomments');
getComments().then((result) => {
// Read result of the Cloud Function.
// /** @type {any} */
console.log(result);
this.comments = result.data;
console.log(result.data[1].data.comment)
});
}

}
}



</script>