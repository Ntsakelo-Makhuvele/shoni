import { Link } from "react-router-dom";
import {Eye} from 'lucide-react';

interface Product{
    name: string,
    description:string,
    startPrice:number,
    category: string,
    id: number,
    image: string
}

const ProductCard = (product:Product) => {
    return(
            <div>
             <div className="group h-110 rounded-3xl overflow-hidden card-elegant" key={product.id}>
                      <div className="h-70  relative">
                          <img src={product.image} alt=""  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>  
                          <Link to="/" className="absolute text-sm bottom-0 mb-5 w-[80%] text-center ml-[10%] p-2 bg-primary rounded-full text-white opacity-[0] group-hover:opacity-[1] translate-y-2 group-hover:translate-y-0 transition duration-300 ease-in-out"> <Eye size={15} className="inline relative bottom-0.5 mr-2"/>View Details</Link> 
                      </div>
                      <div className="p-2">
                          <h6 className="text-xl text-center font-bold">{product.name}</h6>
                          <p className="line-clamp-2 max-h-12 text-center">{product.description}</p>
                          <div className="mt-10 grid grid-cols-2">
                             <h3 className="text-lg">FROM R{product.startPrice.toFixed(2)}</h3>
                             <p className="text-right text-sm w-[fit-content] ml-auto p-1 px-2 rounded-full text-foreground-muted bg-muted">{product.category}</p>
                          </div>
                      </div>                    
                  </div>  
                
            </div>
    )
}

export default ProductCard;