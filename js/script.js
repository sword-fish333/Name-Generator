
document.querySelector('#generate-names').addEventListener('submit',loadNames);


//execute the function to query the API

function loadNames(e){
    e.preventDefault();

    //read the values from the form
    let country=document.getElementById('country').value;
    let gender=document.getElementById('gender').value;
    let amount=document.getElementById('quantity').value;

    //build the url
    let url='http://uinames.com/api/?';

    if(country!==''){
        url+=`region=${country}&`;
    }

    if(gender!==''){
        url+=`gender=${gender}&`;
    }
    if(amount!==''){
        url+=`amount=${amount}&`;
    }
    console.log(url);

    //Ajax
    let xhr=new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.onreadystatechange=function(){
        if(this.status===200&&this.readyState===4){
            const names=JSON.parse(this.responseText);
             
            let html='<h2>Genarate Names</h2>';
            html+="<ul class='list'>";
            names.forEach((name)=>{
                html+=`<li>${name.name}</li>`;
            });
            html+="</ul>";
            document.querySelector('#result').innerHTML=html;
        }
    };
    xhr.send();
}