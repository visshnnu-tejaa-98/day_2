let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send();
request.onload = function(){
    let data = JSON.parse(this.response)
    let sum = 0;
    for(let i in data){
        let key = i;
        let value = data[i];
        // console.log(value.flag)
        sum = sum+value.population
    }
    console.log(sum)
}