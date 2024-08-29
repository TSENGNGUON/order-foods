

const items = [
    {
        itemsImg:"https://cdn-icons-png.flaticon.com/512/4727/4727378.png",
        title:"Pizza",
        price:4,
        count:0,
        subprice:0,
        addItem: function() {
             this.count++;
             this.subprice = parseFloat(this.totalEachPrice());
             render();
        },
        subItem: function(){ 
           this.count--;
           this.subprice = parseFloat(this.totalEachPrice());
           render();
        },
        totalEachPrice: function() {
           return this.count * this.price;
        },
     
    },
    {
        itemsImg:"https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
        title:"Hambergur",
        price:4.37,
        count:0,
        subprice: 0,
        addItem: function() {
            this.count++;
            this.subprice = parseFloat(this.totalEachPrice()); 
            render();
       },
       subItem: function(){ 
          this.count--;
          this.subprice = parseFloat(this.totalEachPrice());
          render();
       },
       totalEachPrice: function() {
          return this.count * this.price;
       },
    },
    {
        itemsImg:"https://cdn.icon-icons.com/icons2/3050/PNG/512/line_soda_coca_cola_icon_189440.png",
        title:"Coca cola",
        price:9.4,
        count:0,
        subprice: 0,
        addItem: function() {
            this.count++;
            this.subprice = parseFloat(this.totalEachPrice());
            render();
       },
       subItem: function(){ 
          this.count--;
          this.subprice = parseFloat(this.totalEachPrice());
          render();
       },
       totalEachPrice: function() {
          var totalEachPrice = this.count * this.price;
          var result = totalEachPrice.toFixed(1);
          return result;
       },
    },
];


const shopContainer = document.querySelector('.shop');

const render = () => {

    var content = items.map((item,index) => (
        `<div  class="items">
                <img class="item" src="${item.itemsImg}">
                <h2>${item.title}</h2>
                <h4>${item.price}$</h4>
                <h4>${item.count} item/items</h4>
                <button onclick='items[${index}].subItem()' class='btn sub'>-</button>
                <button  onclick='items[${index}].addItem()' class='btn add'>+</button><br>
                <span>price:${item.subprice}$</span>
         </div>`
    )).join(" ");
    
    shopContainer.innerHTML = content;
}


render();


function orderBtn() {
    var total = document.querySelector(".total");
    var allItem = items.reduce((sum,item) => sum + item.subprice,0);
    var res = parseFloat(allItem).toFixed(1);
    total.innerHTML = `total price:${res}$`;
    render();
}






