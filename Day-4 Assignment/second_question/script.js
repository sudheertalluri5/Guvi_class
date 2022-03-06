// XHR Object
xhr_obj = new XMLHttpRequest();

// Open the request
xhr_obj.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

//Send the request
xhr_obj.send();

// load the rest countries
xhr_obj.onload = function() {
    console.log(this.status)
    if (this.status>=200 && this.status<300){
        console.log(this.response);
    }
}
