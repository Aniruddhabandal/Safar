import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Calendar, Users, Camera, Heart, Share2, ArrowLeft } from 'lucide-react';

const DestinationDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - in real app, fetch based on id
  const destination = {
    id: 1,
    name: 'Bali, Indonesia',
    images: [
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    price: 899,
    rating: 4.8,
    reviews: 245,
    duration: '7 days',
    maxGroupSize: 12,
    location: 'Bali, Indonesia',
    description: 'Discover the magical island of Bali with its stunning beaches, ancient temples, lush rice terraces, and vibrant culture. This comprehensive tour takes you through the highlights of Bali, from spiritual temples to pristine beaches.',
    includes: [
      '6 nights accommodation in 4-star hotels',
      'Daily breakfast and 3 dinners',
      'All transportation and transfers',
      'Professional English-speaking guide',
      'Entrance fees to all attractions',
      'Cultural performances and activities'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Denpasar', activities: ['Airport pickup', 'Check-in to hotel', 'Welcome dinner', 'Rest and relaxation'] },
      { day: 2, title: 'Ubud Cultural Tour', activities: ['Sacred Monkey Forest', 'Tegallalang Rice Terraces', 'Traditional art villages', 'Ubud Palace'] },
      { day: 3, title: 'Temple Hopping', activities: ['Tanah Lot Temple', 'Ulun Danu Temple', 'Jatiluwih Rice Terraces', 'Sunset viewing'] },
      { day: 4, title: 'East Bali Adventure', activities: ['Besakih Temple', 'Mount Batur sunrise trek', 'Hot springs relaxation', 'Coffee plantation visit'] },
      { day: 5, title: 'Beach Day', activities: ['Seminyak Beach', 'Water sports activities', 'Beach club experience', 'Sunset dinner'] },
      { day: 6, title: 'Cultural Immersion', activities: ['Traditional cooking class', 'Batik making workshop', 'Local market tour', 'Farewell dinner'] },
      { day: 7, title: 'Departure', activities: ['Hotel checkout', 'Last-minute shopping', 'Airport transfer', 'Flight departure'] }
    ]
  };

  const reviews = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: '2 weeks ago',
      text: 'Absolutely incredible experience! The temples were breathtaking and our guide was so knowledgeable. The rice terraces at sunrise were magical.'
    },
    {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      date: '1 month ago',
      text: 'Perfect mix of culture, adventure, and relaxation. The accommodation was fantastic and the food was amazing. Highly recommend!'
    },
    {
      name: 'Emma Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4,
      date: '1 month ago',
      text: 'Great tour with well-organized itinerary. The sunrise trek was challenging but so worth it. Would love to come back!'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/destinations" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Destinations
            </Link>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-red-500">
                <Heart className="h-5 w-5 mr-1" />
                Save
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <Share2 className="h-5 w-5 mr-1" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative h-96 lg:h-[500px]">
            <img
              src={destination.images[selectedImage]}
              alt={destination.name}
              className="w-full h-full object-cover rounded-xl"
            />
            <button className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70">
              <Camera className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {destination.images.slice(1, 5).map((image, index) => (
              <div
                key={index + 1}
                className="relative h-44 lg:h-60 cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(index + 1)}
              >
                <img
                  src={image}
                  alt={`${destination.name} ${index + 2}`}
                  className={`w-full h-full object-cover transition-all ${
                    selectedImage === index + 1 ? 'ring-2 ring-blue-500' : 'hover:opacity-80'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{destination.name}</h1>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">{destination.rating}</span>
                    <span className="text-gray-500 ml-1">({destination.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 space-x-6">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {destination.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Max {destination.maxGroupSize} people
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {['overview', 'itinerary', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                        activeTab === tab
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === 'overview' && (
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">About This Trip</h3>
                      <p className="text-gray-700 leading-relaxed">{destination.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-2">
                        {destination.includes.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'itinerary' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Daily Itinerary</h3>
                    <div className="space-y-6">
                      {destination.itinerary.map((day) => (
                        <div key={day.day} className="border-l-4 border-blue-500 pl-6">
                          <div className="flex items-center mb-2">
                            <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                              {day.day}
                            </span>
                            <h4 className="text-lg font-semibold text-gray-900">{day.title}</h4>
                          </div>
                          <ul className="space-y-1 ml-11">
                            {day.activities.map((activity, index) => (
                              <li key={index} className="text-gray-600">• {activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold">Reviews</h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 font-semibold">{destination.rating}</span>
                        <span className="text-gray-500 ml-1">based on {destination.reviews} reviews</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <p className="text-gray-700">{review.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ${destination.price}
                  <span className="text-lg text-gray-500 font-normal"> / person</span>
                </div>
                <p className="text-gray-600">7 days, 6 nights</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
              </div>

              <Link
                to={`/booking/${destination.id}`}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
              >
                Book Now
              </Link>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">Free cancellation up to 24 hours before departure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;