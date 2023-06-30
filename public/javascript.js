//1.add initial reviews
//2.handle avergae review and show in dom
//3.load more btn

var reviews = [
    {"name": 'Adam',"rate":1.4,"review":'Nice place!Greate experience'},
    {"name": 'John',"rate":3.5,"review":'Nice place!Greate experience'},
    {"name": 'Kim',"rate":4,"review":'Nice place!Greate experience'},
    {"name": 'Rukie',"rate":4.5,"review":'Nice place!Greate experience'},
    {"name": 'Benjamin',"rate":5,"review":'Nice place!Greate experience'},
    {"name": 'Lee-roy',"rate":5,"review":'Nice place!Greate experience'},
    {"name": 'Bule',"rate":5,"review":'Nice place!Greate experience'},
]
var reviewbox = document.getElementById("show-reviews")
var totalnum_of_reviews = Object.values(reviews).length
var start = 0
var offset = 3
function showReviews(){
    var i = 0
    for(const [key, value] of Object.entries(reviews).slice(start, offset)){
        reviewbox.innerHTML += `
            <div class="p-3 rounded-1 row mb-2" style="background:#4d4e500d;">
                <div class="col-md-2 col-4">
                    <div class="img-avatar text-center">
                        <p class="mb-0">${value.name.charAt(0)}</p>
                    </div>
                </div>
                <div class="col-md-10 col-8">
                    <p class="fw-regular mb-0 fs-14px">${value.name} <span style="font-size: x-small;"><i class="fa-solid fa-star"></i> ${value.rate}</span></p>
                    <p class="fs-12px fw-light mb-0">${value.review}</p>
                </div>
            </div>
    `
    i++
    if(i == offset) return
    }
}

loadmorebtn = document.getElementById('loadmore-btn')
function loadmore(){
    loadmorebtn.innerHTML = 'loading...'
    setTimeout(function () {
        if(offset < totalnum_of_reviews){
            offset += 3
            start += 3
            if(offset >= totalnum_of_reviews){
                loadmorebtn.innerHTML = 'View less'
            }else{
                loadmorebtn.innerHTML = 'View more'
            }
            showReviews()
        }else{
            reviewbox.innerHTML = ''
            offset = 3
            start = 0
            loadmorebtn.innerHTML = 'View more'
            showReviews()
        }
      }, 1000);
}

loadmorebtn.addEventListener('click', loadmore) 

function average(numbers) {
    let sum = numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  
    let avg = sum / numbers.length;
      return avg;
  }
  
var listof_rates = []
function getrateList(){
    for(const [key, value] of Object.entries(reviews)){
        listof_rates.push(value.rate)
    }
    var avarage = document.getElementsByClassName("average")
    for (var i = 0; i < avarage.length; i++) {
        avarage[i].innerHTML = Math.round(average(listof_rates) * 100) / 100 ;
    }
}

getrateList()
showReviews()