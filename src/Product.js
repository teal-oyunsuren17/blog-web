function Product () {
    const productEl = document.getElementById('products');
fetch('https://dummyjson.com/products')
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })
    .then((products) => {
        for (let i = 0; i<products.products.length; i++) {
        const product = document.createElement('div');
        product.className = `pro1`;
        const inner = `
               <div><img src="${products.products[i].thumbnail}" alt=""></div>
               <p class="title">${products.products[i].title}</p>
               <p class="description" >${products.products[i].description}</p>
               <p>${products.products[i].brand}</p>
               <p class="price">${products.products[i].price} $</p> 
               <button style=" background-color: blue; color : white; border : none;">More</button>`;
        product.innerHTML = product.innerHTML + inner ;
        productEl.append(product)

        const iputEl = document.getElementById('input')
        function submit() {
            if (iputEl.value != products.products[i].value) {
                productEl.classList.remove(`pro${i}`)
            }
        }
        submit();
        }

    });
}

export default Product;