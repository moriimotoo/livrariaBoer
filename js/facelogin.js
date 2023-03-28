document.querySelector('#facelogin').addEventListener('click',() =>{
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.addScope('user_gender');
    provider.addScope('email');

    firebase.auth().signInWithPopup(provider).then(result => console.log({result}))
    .catch(error =>{
        console.log({error});
    });
})