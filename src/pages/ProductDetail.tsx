import Navbar from "../components/NavBar"
import {Minus,Plus} from 'lucide-react'
import cake from '../assets/chocolate-cake.jpg'

const ProductDetail = () => {
    return (
        <div className="max-w-[1200px] w-[90%] m-auto">
            <Navbar />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-30">
               <div className="h-120">
                  <img src={cake} className="w-full h-full object-cover"/>
               </div>
               <div className="">
                  <p className="text-primary mb-3">Birthday Cake</p>
                  <h1 className="text-5xl font-bold">Classic Chocolate Cake</h1>
                  <p className="text-lg mt-3 text-foreground-muted">Rich layers of chocolate sponge with velvety ganache frosting, decorated with handcrafted chocolate curls.</p>
                  <div className="mt-5">
                     <p className="text-lg ml-3 mb-3">Select Size</p>
                     <div className="options_list">
                        <input type="radio" name="option1" value="small" id="small" defaultChecked></input>
                        <label htmlFor="small" className="bg-primary/5 border border-2 border-border px-4 py-3 rounded-xl mx-2"> Small <br/><span className="text-foreground-muted">R350</span></label>
                        <input type="radio" name="option1" value="medium" id="medium"></input>
                              <label htmlFor="medium" className="bg-primary/5 border border-2 border-border px-4 py-3 rounded-xl"> Medium <br/><span className="text-foreground-muted">R350</span></label>
                        <input type="radio" name="option1" value="large" id="large"></input>
                            <label htmlFor="large" className="bg-primary/5 border border-2 border-border px-4 py-3 rounded-xl mx-2"> Large <br/><span className="text-foreground-muted">R350</span></label>
                     </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-lg ml-3 mb-3">Select Flavor</p>
                         <div className="options_list_1">
                        <input type="radio" name="option2" value="chocolate" id="chocolate" defaultChecked></input>
                        <label htmlFor="chocolate" className="bg-primary/5 border border-2 border-border px-4 py-2 mx-2 rounded-full mb-5 md:mb-0">Chocolate</label>
                          <input type="radio" name="option2" value="vanilla" id="vanilla"></input>
                        <label htmlFor="vanilla" className="bg-primary/5 border border-2 border-border px-4 py-2 mx-2 rounded-full mb-5 md:mb-0">Vanilla</label>
                          <input type="radio" name="option2" value="lemon" id="lemon"></input>
                        <label htmlFor="lemon" className="bg-primary/5 border border-2 border-border px-4 py-2 mx-2 rounded-full">Lemon</label>
               
                     </div>
                  </div>
                     <div className="mt-5 border-b pb-10 border-b-border">
                    <p className="text-lg ml-3 mb-3">Quantity</p>
                      <div className="w-[fit-content] ml-3">
                        <div className="flex border border-2 border-muted rounded-lg">
                      
                      <button className="text-lg hover:bg-muted cursor-pointer"><Minus className="w-10"/></button>
                     
                     <input type="text" name="" id="" className="w-15 py-2 px-3 text-center text-lg font-bold" defaultValue={1} value={2}/>
                     <button className="text-lg hover:bg-muted cursor-pointer"><Plus className="w-10" /></button>    
                        </div>
                      </div>
                  </div>
                  <div className="mt-5">
                      <p className="text-foreground-muted">Total Price</p>
                      <h3 className="text-3xl text-primary font-bold">R3000.00</h3>
                  </div>
                  <div className="mt-5">
                     <button className="p-3 w-full bg-primary text-white rounded-full cursor-pointer">Add To Cart</button>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default ProductDetail;