
const xhttp = new XMLHttpRequest();
xhttp.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/quiz');
xhttp.send();
xhttp.addEventListener('readystatechange', onReadyStateChange);

function onReadyStateChange(e){
    e.preventDefault();
    if(e.target.readyState === 4 && e.target.status === 200){
      const datum = JSON.parse(e.target.responseText);
    //   console.log(datum[]);
      disUI(datum);
      
    //   console.log(secTag);
    }
}

function disUI (data){
    /* console.log(data[0].options[0]);
    console.log(data[0].options[1]);
    console.log(data[0].options[2]);
    console.log(data[0].options[3]);
    console.log(data[0].options[4]); */
    data.forEach((val, ind, arr)=>{
       /* console.log(val.options[0]);
        console.log(val.options[1]);
        console.log(val.options[2]);
        console.log(val.options[3]); */
        let divTag = document.createElement('div')
        let p = document.createElement('p');
        let ul = document.createElement('ul');
        p.innerText = `Q${val.id}.` + val.question;
        
        let option = val.options
        // console.log(option)
        // console.log(data.length)
        // console.log(option.length)
        /* for(let i=0; i<5; i++){
            for(let j=0; j<4; j++){
                console.log(data[i].options[j]);
            }
        } */
        for(let i=0; i<data.length; i++){
            for(let j=0; j<option.length; j++){
                // console.log(data[i].options[j]);
                let li = document.createElement('li');
                li.innerHTML = data[i].options[j];
                // console.log(li.innerHTML);
                console.log(ul.appendChild(li));
            }
            
        }
        // let list = document.getElementsByTagName('li');
        divTag.append(p);
        divTag.append(ul);
        let secTag = document.querySelector(".ques");
        secTag.appendChild(divTag);
        // for(let i=0; i<data.length; i++){
        //     for (let j=0; j<val.options.length; j++){
        //         li.innerText = data[i].val.options[j];
        //         console.log(li);
        //     }
        // }
    
        // console.log(divTag);
        // uidata += `<div>
        // <p>Q${val.id}.${val.question}</p>
        // <ul>
        // </ul>
        // </div>`
        // let ul = document.getElementsByTagName('ul');
        // ul.className = "unList";
        // console.log(ul)
        
        // let ulist = document.getElementsByClassName('unList');
        // console.log(ulist)
        // let li = document.createElement('li');
        
        //     for(let i=0; i<= val.options.length; i++){
        //     li.innerText = val.options[i];
        //     console.log(li)
        //     }
        
        // ulist.appendChild(li);
    })
}