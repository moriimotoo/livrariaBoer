document.querySelector('#googlelogin').addEventListener('click',() =>{
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
  provider.addScope('https://www.googleapis.com/auth/user.gender.read');
  provider.addScope('https://www.googleapis.com/auth/user.birthday.read');
  provider.addScope('https://www.googleapis.com/auth/userinfo.email')
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider)
  .then(result => console.log({result}))
  .catch(error =>{
    alert('Erro ao logar');
      console.log({error});
  });
});