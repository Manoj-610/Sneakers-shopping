const wrapper=document.querySelector(".sliderwrapper");
const menuitem=document.querySelectorAll(".menuitem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./Image/air.png",
        },
        {
          code: "darkblue",
          img: "./Image/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./Image/jordan.png",
        },
        {
          code: "green",
          img: "./Image/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./Image/blazer.png",
        },
        {
          code: "green",
          img: "./Image/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./Image/crater.png",
        },
        {
          code: "lightgray",
          img: "./Image/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./Image/hippie.png",
        },
        {
          code: "black",
          img: "./Image/hippie2.png",
        },
      ],
    },
  ];

  let choosenproduct= products[0];
  const currentproductimg=document.querySelector(".productimg");
  const currentproducttitle=document.querySelector(".producttitle");
  const currentproductprice=document.querySelector(".productprice");
  const currentproductcolors=document.querySelectorAll(".color");
  const currentproductsizes=document.querySelectorAll(".size");
  

menuitem.forEach((item,index)=>{
    item.addEventListener("click" ,()=>{
        wrapper.style.transform= `translateX(${-100 * index}vw)`;
        choosenproduct = products[index];
        currentproducttitle.textContent = choosenproduct.title;
        currentproductimg.src = choosenproduct.colors[0].img;
        currentproductcolors.forEach((color,index)=>{
            color.style.backgroundColor=choosenproduct.colors[index].code;
        })
        currentproductprice.textContent = "$" +  choosenproduct.price;
    });
});
currentproductcolors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentproductimg.src=choosenproduct.colors[index].img;
    })
});
currentproductsizes.forEach((size)=>{
    size.addEventListener("click" , ()=>{
        currentproductsizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white"
    });
});
const productbutton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");
productbutton.addEventListener("click" ,()=>{
    payment.style.display="flex";
});
close.addEventListener("click", ()=>{
    payment.style.display="none"
})


 