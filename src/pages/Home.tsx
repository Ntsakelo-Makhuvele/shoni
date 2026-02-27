import Navbar from "../components/NavBar";
import heroCake from '../assets/hero-cake.jpg';
import birthdayCake from '../assets/birthday-cake-featured.jpg';
import weddingCake from '../assets/wedding-cake-featured.jpg';
import chocolateCake from '../assets/chocolate-cake.jpg';
import pastries from '../assets/pastries-featured.jpg'
import { ArrowRight, Cake, Heart, Truck, Star, Eye } from 'lucide-react';

import { Link } from "react-router-dom";

const features = [
  {
    icon: Cake,
    title: 'Handcrafted with Love',
    description: 'Every creation is made from scratch using premium ingredients',
  },
  {
    icon: Heart,
    title: 'Made to Order',
    description: 'Fresh baked just for you, never from a shelf',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Safe delivery to your doorstep across Johannesburg',
  },
  {
    icon: Star,
    title: '5-Star Reviews',
    description: 'Loved by hundreds of happy customers',
  },
];

const categories = [
  {
    name: 'Birthday Cakes',
    image: birthdayCake,
    href: '/products?category=birthday',
    description: 'Make every birthday magical',
  },
  {
    name: 'Wedding Cakes',
    image: weddingCake,
    href: '/products?category=wedding',
    description: 'Elegant creations for your special day',
  },
  {
    name: 'Pastries & Scones',
    image: pastries,
    href: '/products?category=pastries',
    description: 'Fresh-baked delights daily',
  },
];

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="relative mt-20 w-full min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroCake} alt="" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent"></div>
                </div>
                {/* <h1 className="text-7xl font-bold leading-tight font-display animate-fadeInUp stagger-1">Sweet Moments</h1> */}
                    <div className="container-custom relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/20 backdrop-blur-sm rounded-full border border-primary-foreground/20 animate-fade-in-up">
              ✨ Handcrafted with Love
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up stagger-1">
              Sweet Moments, <br />
              <span className="text-primary">Crafted Perfectly</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-up stagger-2 leading-relaxed">
              From elegant wedding cakes to joyful birthday creations, we bring your sweetest 
              dreams to life with premium ingredients and artisan craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-3">
              <Link to="/products">
                <button className="p-3 rounded-full bg-primary">
                  <span className="inline">View Our Cakes</span>
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link to="/custom-cake">
                {/* <Button variant="hero-outline" size="xl">
                  Request Custom Cake
                </Button> */}
              </Link>
            </div>
          </div>
        </div>
            </section>
            <section className="min-h-80 grid items-center bg-secondary">
            <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 w-[70%] m-auto">
                {features.map(feature => (
                  <div className="bg-white min-h-50 rounded-2xl text-center">
                      <div className="mt-5 w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>

                ))}
            </div>
            </section>
            <section className="mt-30">
                  <p className="text-center w-[fit-content] m-auto px-3 bg-secondary text-primary rounded-full">Our Collection</p>
                  <h1 className="text-4xl text-center py-2 font-bold">Explore Our Creation</h1>
                  <p className="text-center text-xl">From grand wedding cakes to daily delights, discover the perfect treats for the occasion</p>
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1 max-w-[1200px] w-[95%] m-auto gap-6 mt-15">
                       {categories.map((category,index) => (
                          <Link to={category.href} key={index}>
                          <div className="group h-120 rounded-2xl relative animate aspect-[4/5] overflow-hidden m-auto w-full">
                             <img src={category.image} className="rounded-3xl w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                             <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                             <div className="absolute bottom-0 p-3">
                          <h6 className="text-2xl pb-3 font-bold text-primary-foreground">{category.name}</h6>
                          <p className="pb-3 font-sm text-primary-foreground">{category.description}</p>
                          <p  className="text-primary-foreground">Shop Now <ArrowRight size={20} className="inline arrow"/></p>
                         </div>  
                      </div>
                      </Link>
                       ))}
                 
                  </div>
            </section>
            <section className="mt-30 min-h-100 h-full bg-gradient-rose grid items-center p-20">
               <div className="max-w-[1200px] w-[95%] m-auto min-h-90 h-full p-3">
                <p className="bg-white w-[fit-content] p-1 px-2 rounded-full text-primary">Customer Favorites</p>
                <h1 className="text-4xl py-4 font-bold">Best Sellers</h1>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                  <div className="group h-80 rounded-3xl overflow-hidden card-elegant">
                      <div className="h-40  relative">
                          <img src={chocolateCake} alt=""  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>  
                          <Link to="/" className="absolute text-sm bottom-0 mb-5 w-[80%] text-center ml-[10%] p-2 bg-primary rounded-full text-white opacity-[0] group-hover:opacity-[1] translate-y-2 group-hover:translate-y-0 transition duration-300 ease-in-out"> <Eye size={15} className="inline relative bottom-0.5 mr-2"/>View Details</Link> 
                      </div>
                      <div className="p-2">
                          <h6 className="text-xl text-center font-bold">Classic Choclate</h6>
                          <p className="line-clamp-2 max-h-12 text-center">Rich layers of chocolate sponge with velvety ganache frosting, decorate</p>
                          <div className="mt-10 grid grid-cols-2">
                             <h3 className="text-lg">FROM R350.00</h3>
                             <p className="text-right text-sm w-[fit-content] ml-auto p-1 rounded-full text-foreground-muted bg-muted">Birthday</p>
                          </div>
                      </div>
                      
                  </div>
                    <div className="group h-80 rounded-3xl overflow-hidden card-elegant">
                      <div className="h-40 relative">
                          <img src={chocolateCake} alt=""  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>  
                          <Link to="/" className="absolute text-sm bottom-0 mb-5 w-[80%] text-center ml-[10%] p-2 bg-primary rounded-full text-white opacity-[0] group-hover:opacity-[1] translate-y-2 group-hover:translate-y-0 transition duration-300 ease-in-out"> <Eye size={15} className="inline relative bottom-0.5 mr-2"/>View Details</Link> 
                      </div>
                      <div className="p-2">
                          <h6 className="text-xl text-center font-bold">Classic Choclate</h6>
                          <p className="line-clamp-2 max-h-12 text-center">Rich layers of chocolate sponge with velvety ganache frosting, decorate</p>
                          <div className="mt-10 grid grid-cols-2">
                             <h3 className="text-lg">FROM R350.00</h3>
                             <p className="text-right text-sm w-[fit-content] ml-auto p-1 rounded-full text-foreground-muted bg-muted">Birthday</p>
                          </div>
                      </div>
                      
                  </div>
                    <div className="group h-80 rounded-3xl overflow-hidden card-elegant">
                      <div className="h-40 relative">
                          <img src={chocolateCake} alt=""  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>  
                          <Link to="/" className="absolute text-sm bottom-0 mb-5 w-[80%] text-center ml-[10%] p-2 bg-primary rounded-full text-white opacity-[0] group-hover:opacity-[1] translate-y-2 group-hover:translate-y-0 transition duration-300 ease-in-out"> <Eye size={15} className="inline relative bottom-0.5 mr-2"/>View Details</Link> 
                      </div>
                      <div className="p-2">
                          <h6 className="text-xl text-center font-bold">Classic Choclate</h6>
                          <p className="line-clamp-2 max-h-12 text-center">Rich layers of chocolate sponge with velvety ganache frosting, decorate</p>
                          <div className="mt-10 grid grid-cols-2">
                             <h3 className="text-lg">FROM R350.00</h3>
                             <p className="text-right text-sm w-[fit-content] ml-auto p-1 rounded-full text-foreground-muted bg-muted">Birthday</p>
                          </div>
                      </div>
                      
                  </div>
          
               </div>
               </div>
               <div className="border mt-30 bg-foreground p-10">
                  <h1 className="text-center text-2xl font-bold text-primary-foreground">Have Something Special In Mind?</h1>
                  <p className="text-center mt-3 text-primary-foreground/80">Let us bring your dream cake to life. Share your vision and we'll create something<br/> truly unforgettable for your special occasion.</p>
                  <Link to="" className="block w-[fit-content] m-auto mt-4 p-2 rounded-full bg-primary text-white">Request Custom Cake</Link> 
               </div>
            </section>
        </div>
    )
}

export default Home;