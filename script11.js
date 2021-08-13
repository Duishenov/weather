// let imgUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Bishkek,KG&lang=ru&key=b243323206c94a609e57dbbfcd78f583&units=S'
// fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=bishkek%2CKyrgyzstan&lat=42.87&lon=74.59&cnt=15&units=metric%20or%20imperial&lang=ru", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "4613906626msh3ef3a52f788ce0fp1c01e0jsn96ef5dec1531",
//       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
//     }
//   })
//   .then(response => {
//     console.log(response);
//       return response.json()
//     })
//     .then(data =>{
//     console.log(data)
//     document.querySelector('.city h1').innerHTML = data.city.name + ', ' + data.city.country
//     document.querySelector('.minTemp').innerHTML = Math.floor(data.list[0].temp.min - 273) + '&deg;'
//     document.querySelector('.maxTemp').innerHTML = Math.floor(data.list[0].temp.max - 273) + '&deg;'
//     document.querySelector('.temp p').innerHTML = Math.floor(data.list[0].temp.day - 273) + '&deg;'
//     document.querySelector('.wind p').innerHTML = 'Ветер: ' + Math.floor(data.list[0].speed) + ' м/с'
//     document.querySelector('.fallout span').innerHTML = data.list[0].humidity+ '%'
//     document.querySelector('.icon p').innerHTML = data.list[0].weather[0].description
//     // document.querySelector('#weekDayTemp2').innerHTML = Math.floor(data.list[1].temp.day -273) + '&deg;'
//     // document.querySelector('#weekDayTemp3').innerHTML = Math.floor(data.list[2].temp.day -273) + '&deg;'
//     // document.querySelector('#weekDayTemp4').innerHTML = Math.floor(data.list[3].temp.day -273) + '&deg;'
//     // document.querySelector('#weekDayTemp5').innerHTML = Math.floor(data.list[4].temp.day -273) + '&deg;'
//     // document.querySelector('#weekDayTemp6').innerHTML = Math.floor(data.list[5].temp.day -273) + '&deg;'
//     // document.querySelector('#weekDayTemp7').innerHTML = Math.floor(data.list[6].temp.day -273) + '&deg;'

//     })
//     .catch(err => {
//     console.error(err);
//     });




// fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Bishkek,KG&lang=ru&key=b243323206c94a609e57dbbfcd78f583&units=S')
// .then(function(resp){
//     return resp.json()
// })
// .then(function(dat){
//     console.log(dat)
//     document.querySelector('#iconImg').innerHTML = `<img src="https://www.weatherbit.io/static/img/icons/${dat.data[0].weather.icon}.png">`
    
// })


let url='http://api.weatherunlocked.com/api/forecast/42.87,74.59?app_id=999207aa&app_key=1e1afdbf0250f7f24b35028b7a0b77cb'
function dated(Date){
  if(Date==1 || Date==8){
    return 'Понедельник'
  }else if(Date==2 || Date==9){
    return 'Вторник'
  }else if(Date==3 ||Date==10){
  return 'Среда'
  }else if(Date==4||Date==11){
    return 'Четверг'
    }else if(Date==5||Date==12){
      return 'Пятница'
      }else if(Date==6||Date==13){
        return 'Суббота'
        }else if(Date==7||Date==14){
          return 'Воскресенье'
          }
}



fetch(url)
   .then(resp =>{
     return resp.json()
   })
   .then(data =>{
     document.querySelector('.dateToDay').textContent = data.Days[0].date
     document.querySelector('.city').textContent = 'Бишкек'
     document.querySelector('.dayToDay').textContent = dated(new Date().getDay())
     document.querySelector('.wind p').textContent = 'Скорость ветра: ' + data.Days[0].windspd_max_kmh + 'км/ч'
     document.querySelector('.fallout span').textContent = Math.floor((data.Days[0].humid_max_pct + data.Days[0].humid_min_pct)/2)+ '%'
     let iconSrc = data.Days[0].Timeframes[0].wx_icon
     document.querySelector('.icon img').setAttribute('src',`imgs/icons/${iconSrc.substring(0,iconSrc.length - 3)}png`)
     document.querySelector('.icon p').textContent = data.Days[0].Timeframes[0].wx_desc
     document.querySelector('.maxTemp').textContent = data.Days[0].temp_max_c
     document.querySelector('.minTemp').textContent = data.Days[0].temp_min_c
     document.querySelector('.temp p').innerHTML = Math.floor((data.Days[0].temp_max_c-3))+ ' &deg'
     for(let i=1;i<7;i++){
       
       let pimax =Math.floor(data.Days[i].temp_max_c)+'&deg'
       let vlazhnost=Math.floor((data.Days[i].humid_max_pct + data.Days[i].humid_min_pct)/2)+ '%'
       
      
       let srcic = data.Days[i].Timeframes[2].wx_icon
       let imgx = `<div class="weeksImg"><img src="imgs/icons/${srcic.substring(0,srcic.length - 3)}png"></div>`
      document.querySelector('.week').insertAdjacentHTML('beforeend',`<div class="daysOf"><div class="weekss">${dated(new Date().getDay()+i)}</div>${imgx}<div class="max_temp">${pimax}</div><div class="windspdMaxKmh">Скорость ветра: <br>${data.Days[i].windspd_max_kmh}км/ч<br>Влажность: ${vlazhnost}</div></div>`)
      
      console.log(i)
     }
     
     
     console.log(data)
     console.log(iconSrc)
   })


//    const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 3000);
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//     // expected output: "foo"
//   });
  
//   console.log(promise1);
//   // expected output: [object Promise]



//   // let person={

//   //     name:'Igor'
//   //     age: 30
//   //     job: 'programmer',
//   //     getYear:function({
//   //       setTimeout(function(){
//   //         console.log('имя'+this.name)
//   //         console.log('Возраст:'+this.age)
//   //       })
//   //     })
    
    
    
//       let promise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//          console.log('Сервер: запрашиваю список пользователей в БД')
//          console.log('...')
//         },1000)
//         resolve()
//      })
     
//      promise.then(function(){
//        return new Promise(function(resolve,reject){
//          setTimeout(function() {
//            console.log('БД: формирую список пользователей')
//            console.log('...')
//          },500)
//          // resolve()
//          reject('БД: не получили данные')
//        })
//      })
//      .then(function(){
//        return new Promise(function(resolve,reject){
//          setTimeout(function() {
//                  console.log('Сервер: трансформирую данные для клиента')
//                  console.log('...')
//        },500)
//        resolve()
//       })
//      })
//      .then(function(){
//        return new Promise(function(resolve,reject){
//          setTimeout(function() {
//                    console.log('Клиент: получил данные и отображаю их')
//                  }, 1000)
//            resolve()
//        })
//      })
//      .catch(function(error){
//        console.log('ощибка ',error)
//      })

// let url='https://jsonplaceholder.typicode.com/users'

// async function get(){
//   let response=await fetch(url)
//   let data=await response.json
//   console.log(data[0])

// }

// get()
