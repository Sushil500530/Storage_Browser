 const addProduct =()=>{
    const product = document.getElementById('product-input')
    const quantity = document.getElementById('Quantity') ;
    const productValue = product.value ;
    const quantityValue = quantity.value ;
    product.value = '' ;
    quantity.value = '' ;
    console.log(productValue, quantityValue)
    displayProduct(productValue, quantityValue)
 } ;


 const displayProduct =(product,quantity)=>{
    const ProductContainer = document.getElementById('product-container')
    const li = document.createElement('li') ;
    li.innerText = `${product} : ${quantity}` ;
    ProductContainer.appendChild(li)
 }

//  local Storage a rakhar jonno kaj korte hobe jeno reload dile harai na jay