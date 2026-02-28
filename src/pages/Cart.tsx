import Navbar from "../components/NavBar";
import cake from '../assets/chocolate-cake.jpg'
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@headlessui/react";

const Cart = () => {
    return (
        <div className="grid-cols-2 max-w-[1200px] w-[90%] m-auto">
            <Navbar />
            <h1 className="mt-30 mb-5 text-4xl font-bold">Your Cart</h1>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
                <div className="h-full lg:col-span-8 md:block"> 
                    <div className="w-full h-50 card-elegant rounded-lg mb-5">
                        <div className="h-full">
                            <div className="flex items-center h-full p-5">
                                <div className="w-30 h-30 flex-1 md:flex-none">
                                    <img src={cake} alt="" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="ml-3 flex-2">
                                    <h3 className="text-2xl font-bold">Classic Chocolate Cake</h3>
                                    <p className="text-foreground-muted text-sm">Size: Tier 2 (50 Servings)</p>
                                    <p className="text-foreground-muted text-sm">Flavor: Chocolate</p>
                                     <p className="text-xl font-bold block">R3500</p>
                                     <div className="w-[fit-content] mt-2">
                                        <div className="flex border border-2 border-muted rounded-lg">
                                            <button className="text-lg hover:bg-muted cursor-pointer px-1"><Trash2 className="w-5" /></button>
                                            <input type="text" name="" id="" className="w-10 px-3 text-center text-md font-bold" defaultValue={1} value={1} />
                                            <button className="text-lg hover:bg-muted cursor-pointer px-1"><Plus className="w-5" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-50 card-elegant rounded-lg mb-5">
                        <div className="h-full">
                            <div className="flex items-center h-full p-5">
                                <div className="w-30 h-30 flex-1 md:flex-none">
                                    <img src={cake} alt="" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="ml-3 flex-2">
                                    <h3 className="text-2xl font-bold">Classic Chocolate Cake</h3>
                                    <p className="text-foreground-muted text-sm">Size: Tier 2 (50 Servings)</p>
                                    <p className="text-foreground-muted text-sm">Flavor: Chocolate</p>
                                     <p className="text-xl font-bold block">R3500</p>
                                     <div className="w-[fit-content] mt-2">
                                        <div className="flex border border-2 border-muted rounded-lg">
                                            <button className="text-lg hover:bg-muted cursor-pointer px-1"><Trash2 className="w-5" /></button>
                                            <input type="text" name="" id="" className="w-10 px-3 text-center text-md font-bold" defaultValue={1} value={1} />
                                            <button className="text-lg hover:bg-muted cursor-pointer px-1"><Plus className="w-5" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="w-full h-50 card-elegant rounded-lg mb-5">
                        <div className="h-full">
                            <div className="flex items-center h-full p-5">
                                <div className="w-30 h-30 flex-1 md:flex-none">
                                    <img src={cake} alt="" className="w-full h-full object-cover rounded-lg" />
                                </div>
                                <div className="ml-3 flex-2">
                                    <h3 className="text-2xl font-bold">Classic Chocolate Cake</h3>
                                    <p className="text-foreground-muted text-sm">Size: Tier 2 (50 Servings)</p>
                                    <p className="text-foreground-muted text-sm">Flavor: Chocolate</p>
                                     <p className="text-xl font-bold block">R3500</p>
                                     <div className="w-[fit-content] mt-2">
                                        <div className="flex border border-2 border-muted rounded-lg">
                                            <button className="text-lg hover:bg-muted cursor-pointer px-1"><Trash2 className="w-5" /></button>
                                            <input type="text" name="" id="" className="w-10 px-3 text-center text-md font-bold" defaultValue={1} value={1} />
                                            <button className="text-lg hover:bg-muted cursor-pointer px-1"><Plus className="w-5" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="h-90 rounded-lg card-elegant lg:col-span-4 p-5">
                  <h3 className="text-2xl font-bold">Order Summary</h3>
                  <div className="flex mt-5">
                   <p className="flex-1 text-foreground-muted">Sub Total</p>
                   <p className="flex-1 text-right font-bold text-lg">R3500</p>
                  </div>
                  <div className="flex mt-5 border-b border-b-border pb-10">
                   <p className="flex-1 text-foreground-muted">Total</p>
                   <p className="flex-1 text-right font-bold text-lg">R3500</p>
                  </div>
                  <div className="mt-5">
                     <button className="bg-primary text-white p-2 rounded-full w-full cursor-pointer hover:text-primary hover:border-2 hover:border-primary hover:bg-card">Proceed To Checkout</button>
                     <button className="border-2 border-border mt-5 p-2 rounded-full w-full hover:text-primary hover:border-primary cursor-pointer">Continue Shopping</button>
                  </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;