import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, MapPin, Calendar, Users } from 'lucide-react';

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 899,
      rating: 4.8,
      reviews: 245,
      duration: '7 days',
      category: 'beach',
      description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant culture',
      highlights: ['Uluwatu Temple', 'Rice Terraces', 'Sunset Beach', 'Traditional Spa']
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 1299,
      rating: 4.9,
      reviews: 189,
      duration: '5 days',
      category: 'cultural',
      description: 'Iconic white buildings, breathtaking sunsets, and Mediterranean charm',
      highlights: ['Oia Sunset', 'Wine Tasting', 'Volcanic Tours', 'Blue Domes']
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 1099,
      rating: 4.7,
      reviews: 312,
      duration: '6 days',
      category: 'cultural',
      description: 'Ancient temples, traditional gardens, and authentic Japanese culture',
      highlights: ['Fushimi Inari', 'Bamboo Forest', 'Tea Ceremony', 'Golden Pavilion']
    },
    {
      id: 4,
      name: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 1599,
      rating: 4.9,
      reviews: 167,
      duration: '8 days',
      category: 'adventure',
      description: 'Ancient Incan citadel high in the Andes Mountains',
      highlights: ['Inca Trail', 'Sacred Valley', 'Cusco City', 'Andean Culture']
    },
    {
      id: 5,
      name: 'Safari Kenya',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 2199,
      rating: 4.8,
      reviews: 98,
      duration: '10 days',
      category: 'adventure',
      description: 'Wildlife safari adventure in the heart of Africa',
      highlights: ['Big Five', 'Masai Mara', 'Great Migration', 'Cultural Villages']
    },
    {
      id: 6,
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 2899,
      rating: 4.9,
      reviews: 156,
      duration: '7 days',
      category: 'beach',
      description: 'Luxury overwater villas and pristine tropical waters',
      highlights: ['Overwater Bungalows', 'Snorkeling', 'Spa Treatments', 'Private Beaches']
    },
    {
      id: 7,
      name: 'Iceland Northern Lights',
      image: 'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 1799,
      rating: 4.7,
      reviews: 134,
      duration: '6 days',
      category: 'adventure',
      description: 'Chase the Northern Lights and explore dramatic landscapes',
      highlights: ['Aurora Borealis', 'Blue Lagoon', 'Waterfalls', 'Glaciers']
    },
    {
      id: 8,
      name: 'Tuscany, Italy',
      image: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 1399,
      rating: 4.8,
      reviews: 223,
      duration: '8 days',
      category: 'cultural',
      description: 'Rolling hills, medieval towns, and world-class wine',
      highlights: ['Wine Tours', 'Florence Art', 'Cooking Classes', 'Medieval Villages']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'beach', name: 'Beach & Islands' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'adventure', name: 'Adventure' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Under $1000' },
    { id: 'mid', name: '$1000 - $2000' },
    { id: 'luxury', name: 'Over $2000' }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'budget' && dest.price < 1000) ||
                        (priceRange === 'mid' && dest.price >= 1000 && dest.price <= 2000) ||
                        (priceRange === 'luxury' && dest.price > 2000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore Amazing Destinations
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover breathtaking places around the world and create unforgettable memories
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredDestinations.length} of {destinations.length} destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold ml-1">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{destination.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {destination.reviews} reviews
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {destination.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">${destination.price}</span>
                      <span className="text-gray-500 text-sm ml-1">per person</span>
                    </div>
                    <Link
                      to={`/destinations/${destination.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No destinations found matching your criteria</p>
              <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;