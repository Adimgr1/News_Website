const API_key='640e06cac0c3428782b705ed85e6584e'
const url= 'https://newsapi.org/v2/everything?q='
let input= document.querySelector('#input1')
let url1;

async function getApi(query){
    let response= await fetch(`${url}${query}&apiKey=${API_key}`)
    response= await response.json()
    bind(response.articles)
 }
window.addEventListener('load',getApi('Top Headlines') )
function bind(arr){
    const a=document.querySelector('.card-container')
    const b= document.querySelector('.template')
    a.innerHTML=""

    arr.forEach((i)=>{
        const card=b.content.cloneNode(true)

        if(i.urlToImage){
            binddatatocard(card,i)
            a.appendChild(card)
        }

    })

    // for(let i=0;i<arr.length;i++){
    // const card = b.content.cloneNode(true)

        
    //     if(!arr[i].urlToImage){
    //         continue
    //     }
    //     else{
    //         binddatatocard(card,arr[i])
    //         a.appendChild(card)
            

    //     }
        
    // }
}
function binddatatocard(card,arr){
    let date= new Date(arr.publishedAt).toLocaleString('en-US',{
        timeZone: 'Asia/Jakarta'
    })
    card.querySelector('.img').src= arr.urlToImage
    card.querySelector('.title').innerHTML=arr.title
    card.querySelector('.news-source').innerHTML= arr.source.name + " " + date
    card.querySelector('p').innerHTML=arr.description
     url1= arr.url
    //console.log(arr.url)
    card.querySelector('.card').querySelector('.img').addEventListener('click', ()=>{
        window.open(url1, "_blank")

    })
    card.querySelector('.card').querySelector('p').addEventListener('click', ()=>{
        window.open(url1, "_blank")

    })
    let bkc= card.querySelector("#bkcbtn")
        card.querySelector('#bkcbtn').addEventListener('click', ()=>{
                bkc.disabled=true;
                bkc.style.backgroundColor='orangered'
                let cardsecond= document.querySelector(".bookmarktemplate")
                let c= document.createElement('div')
                c.innerHTML=cardsecond.innerHTML
                c.id="abc123"
                bindcar2(arr,c,bkc)
                document.querySelector('.bookmark').appendChild(c)
        })

}
const button= document.querySelector('#search')
button.addEventListener('click',()=>{
    document.querySelectorAll('.selector h4').forEach((elem)=>{
        elem.style.color='black'
    })
    let y= input.value
    getApi(y)
    

})
document.querySelector('.selector').querySelector('.h4').addEventListener('click',()=>{
    console.log(document.querySelector('.selector').querySelector('.h4').innerHTML)
    getApi()

})
let array = document.querySelector(".selector").childNodes
array.forEach((x)=>{
    x.addEventListener(
        'click',()=>{
            document.querySelectorAll(".selector h4").forEach((elem)=>{
                elem.style.color="black"
                
            })
            x.style.color='blue'
            getApi(x.innerHTML)
        }
    )

})
function bindcar2 (arr,c,bkc){
    c.querySelector('img').src=arr.urlToImage
    c.querySelector('h6').innerHTML=arr.title
    c.querySelector('i').style.color='orangered'
    c.querySelector('img').addEventListener('click' ,()=>{
        window.open(arr.url, "_blank")
    })
    c.querySelector('i').addEventListener('click',()=>{
        c.remove()
        bkc.disabled=false
        bkc.style.backgroundColor="#007BFF";
    })
}





  
