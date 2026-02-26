import Navbar from "../components/NavBar";
import heroCake from '../assets/hero-cake.jpg'
import { ArrowRight, Cake, Heart, Truck, Star } from 'lucide-react';
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
            <section className="h-80 grid items-center bg-secondary">
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
            <section>
              
            </section>
        </div>
    )
}

export default Home;