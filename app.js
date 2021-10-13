const app = Vue.createApp({
    date(){
        return {userInput:'' , confirmedInput:''};
    },
    methods:{
        showAlert(){
            alert();
        },
        saveInput(event){
            this.userInput= event.target.value;
        },
        confirmInput(){
            this.confirmedInput = this.userInput;
        },
        
    },
});

app.mount('#assignment2');