const { createApp } = Vue;

createApp({
    data() {
      return {
        randomMail: [],

      }
    },
created(){
  for(i=0; i<10; i++){
  axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (response) => {

    this.randomMail.push(response.data.response)
    console.log(this.randomMail)


  })}
}
}).mount('#app')