const change_display = (class_flex,class_none)=>{
    class_flex.forEach(element => {
        document.querySelectorAll(element)[0].style.display='flex'
        document.querySelectorAll(element)[0].style.animation='load_page 1s forwards'
        // document.querySelector('.rout').style.height = 'auto'
    });
    class_none.forEach(element => {
        // document.querySelectorAll(element)[0].style.animation='remove_page 2s forwards'
        document.querySelectorAll(element)[0].style.display='none'
        // document.querySelector('.rout').style.height = '100vh'
    });
    // setTimeout(() => {
    // }, 1500);
}
let open =true

const anime = ()=>{
    if (open===true){
        document.querySelectorAll('.line').forEach((element)=>{
            element.style.height='1.5px'
            element.style.width='1.5rem'
            element.style.margin = '0'
        })
        document.querySelectorAll('.line')[0].style.transform = 'rotate(65deg)'
        document.querySelectorAll('.line')[1].style.transform = 'rotate(-65deg)'
        document.querySelectorAll('.line')[2].style.display = 'none'
        // document.querySelectorAll('.rout')[0].classList.remove('anime_backward')
        document.querySelectorAll('.rout')[0].classList.add('anime_forward')
        setTimeout(() => {
            
            document.querySelectorAll('.rout-li')[0].innerHTML = '<img src="add.png" class="nav-img">  Add patient'
            document.querySelectorAll('.rout-li')[1].innerHTML = '<img src="layout.png" class="nav-img" >  View Patient Table'
            document.querySelectorAll('.rout-li')[2].innerHTML = '<img src="help-desk.png" class="nav-img">  Help Desk' 
            document.querySelectorAll('.rout-li').forEach((element)=>{
                element.style.display = 'flex'
            })
            document.querySelectorAll('.nav-img').forEach((element)=>{
                element.style.width = '1rem'
                element.style.height = '1rem'
                element.style.marginRight = '1rem'
            })
            document.querySelectorAll('.rout')[0].classList.remove('anime_forward')
            document.querySelectorAll('.rout')[0].style.width = '18%'
        }, 1600);
        open=false
    }
    else{
        document.querySelectorAll('.line')[0].style.transform = 'rotate(0)'
        document.querySelectorAll('.line')[1].style.transform = 'rotate(0)'
        document.querySelectorAll('.line')[2].style.display = 'block'
        document.querySelectorAll('.line').forEach((element)=>{
            element.style.height='4px'
            element.style.width='2rem'
            element.style.marginTop = '5px'
            element.style.display = 'block'
            
        })
        open = true
        change_display(['.rout-li'],['.random'])
        document.querySelectorAll('.rout-li')[0].innerHTML = '<img src="add.png" class="nav-img">'
        document.querySelectorAll('.rout-li')[1].innerHTML = '<img src="layout.png" class="nav-img">'
        document.querySelectorAll('.rout-li')[2].innerHTML = '<img src="help-desk.png" class="nav-img">'
        document.querySelectorAll('.rout')[0].classList.add('anime_backward')
        document.querySelectorAll('.nav-img').forEach((element)=>{
            element.style.width = '2rem'
            element.style.height = '2rem'
            element.style.marginRight = '0rem'
        })
        
        setTimeout(() => {
            document.querySelectorAll('.rout')[0].classList.remove('anime_backward')
            document.querySelectorAll('.rout')[0].style.width = '5%'
            }, 2100);
    }
    console.log(open)
}

let mode = 'dark'
const change_mode = ()=>{
    if (mode==='dark'){
        document.querySelector('body').style.backgroundColor='#353740'
        document.querySelector('header h1').style.color='white'
        mode='light'
        document.querySelectorAll('.line').forEach(element => {
            element.style.backgroundColor='white'
        });
        document.querySelector('.rout').style.backgroundColor = '#353740'
        document.querySelectorAll('.rout-li').forEach(element => {
            element.style.color='white'
        });
        document.querySelector('.mode').innerHTML = 'Light Mode'
    }else{
        document.querySelector('body').style.backgroundColor='#f2f2f2'
        document.querySelector('header h1').style.color='black'
        mode='dark'
        document.querySelectorAll('.line').forEach(element => {
            element.style.backgroundColor='black'
        });
        document.querySelectorAll('.rout-li').forEach(element => {
            element.style.color='black'
        });
        document.querySelector('.rout').style.backgroundColor = 'white'
        document.querySelector('.mode').innerHTML = 'Dark Mode'
    }
}
const get_values = (event)=>{
    event.preventDefault();
    let PatientId = document.getElementById('patient-id').value
    let DocterID = document.getElementById('doctor-id').value
    let PatientName = document.getElementById('patient-name').value
    let Disease = document.getElementById('patient-disease').value
    let Age = document.getElementById('patient-age').value
    let currentDate = new Date();
    
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth() + 1; 
let currentDay = currentDate.getDate(); 
let currentHour = currentDate.getHours(); 
let currentMinute = currentDate.getMinutes(); 
let currentSecond = currentDate.getSeconds(); 
let formattedDateTime = `${currentDate}-${currentMonth}-${currentYear} ${currentHour}:${currentMinute}:${currentSecond}`;
    // return PatientId,DocterID,PatientName,Disease,Age
    addPatientData(PatientId,PatientName,Disease,Age,formattedDateTime)
}
const addPatientData = (id, name, disease, age, timestamp)=> {
    let tbody = document.querySelector('tbody');
    let newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${disease}</td>
        <td>${age}</td>
        <td>${timestamp}</td>
    `;
    tbody.appendChild(newRow);
}
const rout =(class_flex,class_none)=>{
    change_display(class_flex,class_none);
    if (document.querySelectorAll('.patient-display')[0].style.display=='flex'){
        document.querySelector('.rout')[0].style.height=='100vh'
    }else{
        document.querySelector('.rout')[0].style.height=='auto'
    }
    // class_flex.forEach(element => {
    //     document.querySelectorAll(element)[0].style.display='flex'
    // });

}

