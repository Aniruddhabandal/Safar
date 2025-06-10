import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, User, ArrowRight, MapPin, Calendar } from 'lucide-react';

const Guides = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const guides = [
    {
      id: 1,
      title: 'Ultimate Guide to Backpacking Southeast Asia',
      excerpt: 'Everything you need to know for an epic adventure through Thailand, Vietnam, Cambodia, and Laos.',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'backpacking',
      readTime: '15 min read',
      author: 'Sarah Johnson',
      date: 'Dec 10, 2024',
      tags: ['Southeast Asia', 'Budget Travel', 'Adventure']
    },
    {
      id: 2,
      title: 'European City Hopping: A Complete Itinerary',
      excerpt: 'Discover the best routes and hidden gems across 10 European capitals in 3 weeks.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'city-breaks',
      readTime: '12 min read',
      author: 'Michael Chen',
      date: 'Dec 8, 2024',
      tags: ['Europe', 'City Breaks', 'Culture']
    },
    {
      id: 3,
      title: 'Safari Planning: Your African Adventure Guide',
      excerpt: 'From Kenya to Tanzania, plan the perfect wildlife safari with our expert tips and recommendations.',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'wildlife',
      readTime: '18 min read',
      author: 'Emma Rodriguez',
      date: 'Dec 5, 2024',
      tags: ['Africa', 'Wildlife', 'Safari']
    },
    {
      id: 4,
      title: 'Island Hopping in the Maldives',
      excerpt: 'Luxury travel guide to the most beautiful atolls and resorts in the Indian Ocean.',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'luxury',
      readTime: '10 min read',
      author: 'David Park',
      date: 'Dec 3, 2024',
      tags: ['Maldives', 'Luxury', 'Islands']
    },
    {
      id: 5,
      title: 'Budget Travel: Exploring Japan on $50 a Day',
      excerpt: 'Discover how to experience Japan\'s culture, food, and attractions without breaking the bank.',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'budget',
      readTime: '14 min read',
      author: 'Sarah Johnson',
      date: 'Nov 30, 2024',
      tags: ['Japan', 'Budget Travel', 'Culture']
    },
    {
      id: 6,
      title: 'Northern Lights Photography Guide',
      excerpt: 'Capture the aurora borealis like a pro with our comprehensive photography and location guide.',
      image: 'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'photography',
      readTime: '16 min read',
      author: 'Michael Chen',
      date: 'Nov 28, 2024',
      tags: ['Iceland', 'Photography', 'Northern Lights']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Guides' },
    { id: 'backpacking', name: 'Backpacking' },
    { id: 'city-breaks', name: 'City Breaks' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'luxury', name: 'Luxury Travel' },
    { id: 'budget', name: 'Budget Travel' },
    { id: 'photography', name: 'Photography' }
  ];

  const featuredGuides = guides.slice(0, 3);

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Travel Guides
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert tips, insider secrets, and comprehensive guides to help you 
            plan unforgettable adventures around the world.
          </p>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Guides</h2>
            <p className="text-xl text-gray-600">Our most popular and comprehensive travel guides</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <div key={guide.id} className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`relative ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}>
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{guide.author}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{guide.readTime}</span>
                    </div>
                    <h3 className={`font-bold text-gray-900 mb-3 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                      {guide.title}
                    </h3>
                    <p className={`text-gray-600 mb-4 ${index === 0 ? 'text-lg' : ''}`}>
                      {guide.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/guides/${guide.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read Guide
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Travel Guides</h2>
            <p className="text-gray-600">
              Showing {filteredGuides.length} of {guides.length} guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                      {categories.find(cat => cat.id === guide.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{guide.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{guide.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{guide.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {guide.readTime}
                    </div>
                    <Link
                      to={`/guides/${guide.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No guides found matching your criteria</p>
              <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Travel Tips in Your Inbox
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest travel guides, tips, and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;