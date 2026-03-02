export default function List ({children}){
    return(
        <ul className="list-product">
            {children}
        </ul>
    )
}






// export default function List ({product}){
//     return(
//         <ul className="list-product">
//             {product.map((item)=>{
//                 return(
//                     <li key={item}>{item}</li>
                  

                   
//                 )
//             })}
//         </ul>
//     )
// }