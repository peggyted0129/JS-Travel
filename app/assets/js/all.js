let data = [];           // 撈回來的原始資料
let travelList = [];     // 目標資料
let selectChoose = document.querySelector('.select');
let innertext = document.querySelector('.innertext');
let travelTitle = document.querySelector('.travel-title');
let btn = document.querySelectorAll('.btn');

let xhr = new XMLHttpRequest();
xhr.open('get', 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json', true);
xhr.send(null); 
xhr.onload = function() {
  data = JSON.parse(xhr.responseText).result.records; // 撈回來的原始資料

  updateList();  // 更新 <select> 資料
};

// 監聽
selectChoose.addEventListener('change', selectChange, false);
for (let i = 0; i < btn.length; i++){  
  btn[i].addEventListener('click', btnChange, false);
}

// 選取所有的按鈕，並且監聽事件
function btnChange(e){
  let selectBtn = e.target.value;
  console.log(selectBtn);
};

function selectChange(e){
  e.preventDefault();
  let areaName = e.target.value;  // 取出 "XX區"
  travelTitle.textContent = areaName;  // title 加入旅遊區域名稱
  console.log(areaName);

  /* (寫法一)
  for (let i = 0; i < data.length; i++) {
    if(areaName == data[i].Zone){ 
      travelList.push(data[i]);
    }else if(areaName == '全部行政區'){
      travelList.push(data[i]);
    }
  }
  console.log(travelList); 
  */

  travelList = data.filter((item) => {
    if (item.Zone == areaName) {
      return item.Zone == areaName;
    } else if(areaName == '全部行政區'){
      return data;
    }
  })
  console.log(travelList);
  updateContent(travelList);
};

function updateContent(items){
  let str = '';
  for (let i = 0; i < items.length; i++){
    str += `
    <div class="col-6 mb-10">
      <div class="card mx-9">
        <div class="position-relative">
          <img src="./assets/images/Hero.png" class="pic card-img-top" alt="area-pic">
          <div class="card-title w-100 text-white d-flex p-7 justify-content-between position-absolute">
            <h5 class="card-title"> ${items[i].Name} </h5>
            <p class="pt-1"> ${items[i].Zone} </p>
          </div>
        </div>
        <div class="card-body">
          <li class="d-flex mb-4">
            <img class="icon mr-4" src="./assets/images/icons_clock.png" alt="clock-pic">
            <p> ${items[i].Opentime} </p>
          </li>
          <li class="d-flex mb-4">
            <img class="icon mr-4" src="./assets/images/icons_pin.png" alt="location-pic">
            <p> ${items[i].Add}　</p>
          </li>
          <li class="d-flex justify-content-between">
            <div class="d-flex">
              <img class="icon mr-4" src="./assets/images/icons_phone.png" alt="phone-pic">
              <p> ${items[i].Tel} </p>
            </div>
            <div class="d-flex">
              <img class="icon mr-4" src="./assets/images/icons_tag.png" alt="tag-pic">
              <p>　${items[i].Ticketinfo} </p>
            </div>
          </li>
        </div>
      </div>
    </div>  
    `
  }
  innertext.innerHTML = str;
};

function updateList(){
  let zoneArr = [];      // 放不重複的 "XX區" 資料
  let len = data.length;   // 原始資料共 56 筆 
  for (let i = 0; i < len; i++) {
    zoneArr.push(data[i].Zone);
  }
  //console.log(zoneArr);  // 先存入全部 "XX區" 資料

  zoneArr = zoneArr.filter((item, index, arr)=>{
    return arr.indexOf(item) === index;
  })
  //console.log(zoneArr);  // 再篩出不重複的 "XX區" 資料

  // 因為要繼續添加 <option> 內容，所以選用 createElement 新增網頁節點的方式
  // 若使用 innerHTML 的方式，會把之前的內容清除
  let select = document.querySelector('.select');
  let selectLen = zoneArr.length;  // zoneArr資料共 22 筆

  for (let i = 0; i < selectLen; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', zoneArr[i]);
    option.textContent = zoneArr[i];
    select.appendChild(option);  // 添加至 <section> 裡
    //console.log(option);   // <option value="三民區">三民區</option>
  }
};

