
document.querySelector('#heads').addEventListener('click', usrHeads)
document.querySelector('#tails').addEventListener('click', usrTails)
// const ?  = document.querySelector('img')


 function usrHeads(){
document.querySelector('h3').innerText = ""
   fetch(`/api?word=heads`)
     .then(response => response.json())//request from the server
     .then((data) => {//returned obj from the server
      document.querySelector('#you').innerText = "You picked heads!"
document.querySelector('#pc').innerText = `The computer picked ${data.side}`
       console.log(data);
     showImg(data)
     });  
 }
 function usrTails(){
document.querySelector('h3').innerText = ""
// document.querySelector('#img').innerHTML = '<img src="tails.png">'
    fetch(`/api?word=tails`)//wont need user input
      .then(response => response.json())
      .then((data) => {
              document.querySelector('#you').innerText = "You picked tails!"
             
         document.querySelector('#pc').innerText = `The computer picked ${data.side}`
         
        console.log(data);
       showImg(data)
       
      }); 
  }

function showImg(data){
  if(data.side == 'heads'){
    document.querySelector('#img').src= 'heads.png' 
    console.log('heads img go here')
  }else{
    document.querySelector('#img').src = 'tails.png';
    console.log('tails img go here')
  }
}



 