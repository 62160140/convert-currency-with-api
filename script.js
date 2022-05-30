const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')

const rateText = document.getElementById('rate')
const swapBtn = document.getElementById('btn')

// เมื่อมีการเปลื่ยนค่าที่ dropdawn 1 
currency_one.addEventListener('change',calculateMoney)
currency_two.addEventListener('change',calculateMoney)

function calculateMoney(){
  const origin = currency_one.value;
  const des = currency_two.value;
  let url = `https://v6.exchangerate-api.com/v6/8b202ec3ef451fb3d3e70f35/latest/${origin}`
  
  // ดึงข้อมูล
  const dataPm = fetch(url).then(function(res){
    return res.json() //แปลงข้อมูลที่ได้เป็น json
  }).then(function(data){
    const rate=data.conversion_rates[des]
    rateText.innerHTML = `1  ${origin} = ${rate} ${des}`
    return console.log(data.conversion_rates[des]); //แสดงข้อมูล Json จากด้านบน
  })

}

// onLoad
calculateMoney();

