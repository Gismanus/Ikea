const requestURL = 'http://localhost:8000/units.json';

const xhr = new XMLHttpRequest();

xhr.onload = function(){
    let units = JSON.parse(xhr.response);
    console.log(units);
};

xhr.onerror = function(){
    console.log(xhr.response)
}
xhr.open('GET', requestURL);

xhr.send();