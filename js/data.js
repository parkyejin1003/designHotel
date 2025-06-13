let container=document.querySelector('.gallery-wrap');//ul
let loadMoreBtn=document.querySelector('.loadMoreBt');//더보기 버튼
let addItemCount=4;//더보기 버튼 클릭시 3개씩 보이게 할려고 만든 변수
let added=0;//데이터 초기값 
let allData=[]; //모든 데이터를 배열안에 넣을 예정
let filter=document.querySelector('#gallery-filter');//탭버튼 종류
let filterData=[];



//json 데이터 로드
fetch('./data/video.json')
.then(response => response.json())
.then(data => {
    allData=data;
    filterData=allData;
    addItem();

    loadMoreBtn.addEventListener('click', addItem)
    filter.addEventListener('change', (e) =>{
        if(e.target.type==='radio'){
            filterItems(e.target.value)
        }
    })
    console.log(filterData)
})
.catch(error => console.error('Error loading Json:', error));

function addItem(){
    let element=[];

    let sliceData=filterData.slice(added, added += addItemCount );
    sliceData.forEach(item => {
        const fileExtenstion=item.video.split('.').pop().toLowerCase();
        const isMp4=fileExtenstion==='mp4';

        const sw=isMp4 ? (`<video src="${item.video}" autoplay muted></video>`):(`<img src="${item.video}" />`)
        let itemHtml=`
         
                <div>
                    <a href="javascript:" class="galleryBt">
                        <span class="g-video">
                            ${sw}
                            <div class="g-bg"></div>
                            <div class="g-title">
                                <span><strong>${item.title}</strong></span>
                                <span><b>${item.description}</b></span>
                                <span><i class="exploreBt">exploreBt</i></span>
                                <span><i class="category">${item.category}</i></span>
                            </div>
                        </span>
                    </a>
                </div>
           
        `;
        let liElement=document.createElement('li');
        liElement.classList.add('gallery-item');
        liElement.innerHTML= itemHtml;

        element.push(liElement);

       
    })
     element.forEach(item => {
        container.appendChild(item)
    })
    updateLoadMoreButton()
}

function updateLoadMoreButton(){
    if(added < filterData.length){
        loadMoreBtn.textContent='Load More'
    }else{
        loadMoreBtn.textContent='END'
    }
}

function filterItems(key){
    filterData=[];
    added=0;
    container.innerHTML="";
    if(key==='all'){
        filterData=allData;
    }else{
        filterData=allData.filter(item => item.category === key)
    }
    addItem(true)
}