export default function List ({product}){
    return(
        <ul className="list-product">
            {product.map((item)=>{
                return(
                    <li key={item}>{item}</li>
                  

                   
                )
            })}
        </ul>
    )
}