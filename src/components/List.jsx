import ListLi from "./ListLi.jsx";


function List ({children}){
    return(
        <ul className="list-product">
            {children}
        </ul>
    )
}

List.Li = ListLi;

export default List;






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