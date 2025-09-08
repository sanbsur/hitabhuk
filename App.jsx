import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Phone, Mail, MapPin, Clock, Users, Award, Truck, CheckCircle } from 'lucide-react';
import logo from './assets/HITABHUKLOGO.jpg';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Hitabhuk Logo" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-hitabhuk-green">Hitabhuk</h1>
                <p className="text-sm text-gray-600">Premium South Indian Foods</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-hitabhuk-green transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-hitabhuk-green transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-hitabhuk-green transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-hitabhuk-green transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-hitabhuk-green transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-sm font-semibold text-hitabhuk-green">+91 8699935361</p>
                <p className="text-xs text-gray-600">Wholesale Inquiries</p>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Transforming Wholesale
                <span className="block text-hitabhuk-gold">South Indian Food</span>
                Distribution
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Premium Ayurvedic-inspired South Indian cuisine from our central cloud kitchen in Chandigarh, 
                serving the tri-city area with uncompromising quality and freshness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">

              </div>
            </div>
            <div className="relative">
              <div className="diamond-shape w-80 h-80 bg-white/10 backdrop-blur-sm mx-auto">
                <div className="diamond-content w-full h-full flex items-center justify-center">
                  <img src={logo} alt="Hitabhuk Products" className="w-48 h-48 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-hitabhuk-green mb-2">15000+</div>
              <p className="text-gray-600">Production Units/Day</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-hitabhuk-orange mb-2">99.9%</div>
              <p className="text-gray-600">Timely Supply</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-hitabhuk-green mb-2">50+</div>
              <p className="text-gray-600">Wholesale Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-hitabhuk-orange mb-2">1-7</div>
              <p className="text-gray-600">Days Shelf Life</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Hitabhuk</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable, Efficient, and Customer-focused Approach to South Indian Food Distribution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-hitabhuk-green mb-6">Our Story</h3>
              <p className="text-gray-700 mb-6">
                The founding team includes four experienced professionals from diverse fields. 
                The doctor, a two-time Ironman finisher, brings deep knowledge in critical care and overall wellness. 
                Alongside him are a serial entrepreneur with strong business experience, an IT professional with a solid tech background, 
                and a computer science expert with a strong academic and technical foundation.
              </p>
              <p className="text-gray-700">
                Together, they combine their strengths in health, business, and technology to drive the venture forward, 
                revolutionizing the wholesale food industry with health-focused, premium quality South Indian cuisine.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="food-card-hover">
                <CardHeader className="pb-3">
                  <Award className="h-8 w-8 text-hitabhuk-orange mb-2" />
                  <CardTitle className="text-lg">Premium Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">100% Natural ingredients with Ayurvedic principles</p>
                </CardContent>
              </Card>
              <Card className="food-card-hover">
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-hitabhuk-green mb-2" />
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Diverse expertise in health, business & technology</p>
                </CardContent>
              </Card>
              <Card className="food-card-hover">
                <CardHeader className="pb-3">
                  <Truck className="h-8 w-8 text-hitabhuk-orange mb-2" />
                  <CardTitle className="text-lg">Fresh Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Daily fresh distribution across tri-city area</p>
                </CardContent>
              </Card>
              <Card className="food-card-hover">
                <CardHeader className="pb-3">
                  <CheckCircle className="h-8 w-8 text-hitabhuk-green mb-2" />
                  <CardTitle className="text-lg">Quality Assured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Rigorous QC processes ensure consistent taste</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600">Authentic South Indian delicacies crafted with Ayurvedic principles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="food-card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-hitabhuk-green">Idli Vada Super Combo</CardTitle>
                  <Badge className="bg-hitabhuk-orange text-white">₹3000</Badge>
                </div>
                <CardDescription>100 Idlis + 50 Vada + 15L Sambar + Chutney</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Perfect for large-scale catering and restaurants</p>
                <div className="flex items-center text-sm text-hitabhuk-green">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Wholesale Price
                </div>
              </CardContent>
            </Card>

            <Card className="food-card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-hitabhuk-green">Vada with Sambar</CardTitle>
                  <Badge className="bg-hitabhuk-orange text-white">₹1250</Badge>
                </div>
                <CardDescription>50 Vada + 5L Sambar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Crispy vadas with authentic sambar</p>
                <div className="flex items-center text-sm text-hitabhuk-green">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Fresh Daily
                </div>
              </CardContent>
            </Card>

            <Card className="food-card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-hitabhuk-green">Masala Mini Idlis</CardTitle>
                  <Badge className="bg-hitabhuk-orange text-white">₹2000</Badge>
                </div>
                <CardDescription>200 Mini Idlis + Pudi + Ghee</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Bite-sized idlis with traditional spice mix</p>
                <div className="flex items-center text-sm text-hitabhuk-green">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Premium Ghee
                </div>
              </CardContent>
            </Card>

            <Card className="food-card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-hitabhuk-green">Idli + Vada Combo</CardTitle>
                  <Badge className="bg-hitabhuk-orange text-white">₹2000</Badge>
                </div>
                <CardDescription>50 Idlis + 25 Vada + 7.5L Sambar + Chutney</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Perfect balance of idli and vada</p>
                <div className="flex items-center text-sm text-hitabhuk-green">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Complete Meal
                </div>
              </CardContent>
            </Card>

            <Card className="food-card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-hitabhuk-green">Masala Dosa Combo</CardTitle>
                  <Badge className="bg-hitabhuk-orange text-white">₹2500</Badge>
                </div>
                <CardDescription>5L Batter + Potato Filling + Chutney + Sambar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Complete dosa setup with training</p>
                <div className="flex items-center text-sm text-hitabhuk-green">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Training Included
                </div>
              </CardContent>
            </Card>

            <Card className="food-card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-hitabhuk-green">Uttapam Combo</CardTitle>
                  <Badge className="bg-hitabhuk-orange text-white">₹2500</Badge>
                </div>
                <CardDescription>5L Batter + Chutney + Sambar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Thick pancake-style South Indian delight</p>
                <div className="flex items-center text-sm text-hitabhuk-green">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Training Provided
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4">
              We provide higher discounts for 500+ Units/day and 1000+ Units/day orders
            </p>
            <Button className="bg-hitabhuk-green hover:bg-green-700 text-white">
              Contact Sales Team for Bulk Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">End-to-end wholesale food distribution solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center food-card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-hitabhuk-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-hitabhuk-green" />
                </div>
                <CardTitle>Central Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automated cloud kitchen with minimal human intervention ensures consistent quality and optimal efficiency
                </p>
              </CardContent>
            </Card>

            <Card className="text-center food-card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-hitabhuk-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-hitabhuk-orange" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rigorous QC processes ensure consistent taste and quality across all products and deliveries
                </p>
              </CardContent>
            </Card>

            <Card className="text-center food-card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-hitabhuk-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-hitabhuk-green" />
                </div>
                <CardTitle>Fresh Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Daily delivery to retail partners across the tri-city area with guaranteed freshness
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-hitabhuk-green/5 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-hitabhuk-green mb-4">Coverage Area</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-hitabhuk-orange mr-3" />
                    <span>Chandigarh</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-hitabhuk-orange mr-3" />
                    <span>Panchkula</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-hitabhuk-orange mr-3" />
                    <span>Mohali</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-hitabhuk-orange mr-3" />
                    <span>Zirakpur</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 text-hitabhuk-orange mr-3" />
                    <span>New Chandigarh</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-hitabhuk-green mb-4">Target Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <Users className="h-6 w-6 text-hitabhuk-orange mb-2" />
                    <p className="font-semibold">Hotels & Restaurants</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <Award className="h-6 w-6 text-hitabhuk-orange mb-2" />
                    <p className="font-semibold">Canteens</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <Truck className="h-6 w-6 text-hitabhuk-orange mb-2" />
                    <p className="font-semibold">Caterers</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-hitabhuk-orange mb-2" />
                    <p className="font-semibold">Franchises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your wholesale partnership?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-hitabhuk-green mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-hitabhuk-orange mt-1 mr-4" />
                  <div>
                    <p className="font-semibold">Phone Numbers</p>
                    <p className="text-gray-600">+91 8699935361</p>
                    <p className="text-gray-600">+91 9316618360</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-hitabhuk-orange mt-1 mr-4" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="text-gray-600">www.sizzleaf.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-hitabhuk-orange mt-1 mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">
                      Plot No. 361, K-16, Industrial Area Phase 1,<br />
                      Chandigarh - 160002
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-hitabhuk-orange mt-1 mr-4" />
                  <div>
                    <p className="font-semibold">Delivery Schedule</p>
                    <p className="text-gray-600">Fresh Daily Delivery Across Tri-City Area</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hitabhuk-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Hitabhuk Logo" className="h-10 w-10 object-contain bg-white rounded p-1" />
                <div>
                  <h3 className="text-xl font-bold">Hitabhuk</h3>
                  <p className="text-sm opacity-80">Foods LLP</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Premium South Indian wholesale food distribution with health-focused, Ayurvedic-inspired cuisine.
              </p>
              <p className="text-sm opacity-80">
                "Dosa, Idli, Batter, it doesn't really matter"
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
                <li><a href="#products" className="opacity-80 hover:opacity-100 transition-opacity">Products</a></li>
                <li><a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
                <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li className="opacity-80">Idli Vada Combos</li>
                <li className="opacity-80">Masala Dosa Batter</li>
                <li className="opacity-80">Uttapam Combos</li>
                <li className="opacity-80">Sambar & Chutneys</li>
                <li className="opacity-80">Custom Variations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <p className="opacity-80">Plot No. 361, K-16</p>
                <p className="opacity-80">Industrial Area Phase 1</p>
                <p className="opacity-80">Chandigarh - 160002</p>
                <p className="opacity-80 mt-3">+91 8699935361</p>
                <p className="opacity-80">+91 9316618360</p>
                <p className="opacity-80 mt-3">www.sizzleaf.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2025 Hitabhuk Foods LLP. All rights reserved. | Transforming Wholesale South Indian Food Distribution
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
