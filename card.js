 const addProduct =()=>{
    const product = document.getElementById('product-input')
    const quantity = document.getElementById('Quantity') ;
    const productValue = product.value ;
    const quantityValue = quantity.value ;
    product.value = '' ;
    quantity.value = '' ;
    console.log(productValue, quantityValue)
    displayProduct(productValue, quantityValue)
    saveLocalStorage(productValue,quantityValue)

 } ;


 const displayProduct =(product,quantity)=>{
    const ProductContainer = document.getElementById('product-container')
    const li = document.createElement('li') ;
    li.innerText = `${product} : ${quantity}` ;
    ProductContainer.appendChild(li)
 }
// store kora data ta amra kivabe paite pari seta 
 const getStoredShopingCard = () =>{
    const storedCard = localStorage.getItem('card');
    let card = {} ;
    if(storedCard){
        card = JSON.parse(storedCard)
    }
    return card ;
 }
// set korar jonno(ager j store kora data cilo seta ke call kore)
 const saveLocalStorage = (product, quantity)=>{
    const getCard = getStoredShopingCard()
    getCard[product] = quantity ;
    // console.log(getCard)
    const cardStringified = JSON.stringify(getCard)
    console.log(cardStringified)
    localStorage.setItem('card', cardStringified)
 }

//  ===> uporer kaj gulo korar por sob gulo inputkrito data gulo localStorage a store(joma) kore rakhtece.. akhen ai data gulo jodi reload dewar poreo dekhate chai tahle nicher kaj ta kore korte pari 

// item gulo akta akta kore dekhanor kaj ta korteci
const displayProductsShowLocalStorage =()=>{
     const showDisplay = getStoredShopingCard()
     console.log(showDisplay)
    //  akhn protita product er nam gulo dekhar jonno loop chalabo
    for(const product in showDisplay){
        const quantity = showDisplay[product] ;
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}
displayProductsShowLocalStorage()

// 1... local Storage a rakhar jonno kaj korte hobe jeno reload dile harai na jay

//2... variable er moddhe kono value thakle take [] er moddhe nite hobe 