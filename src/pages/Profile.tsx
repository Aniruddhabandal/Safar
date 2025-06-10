import React, { useState } from 'react';
import { User, MapPin, Calendar, Star, Settings, LogOut, CreditCard, Bell } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: 'January 2023',
    totalTrips: 5,
    countries: 12,
    reviews: 8
  };

  const bookings = [
    {
      id: 'WL-123456',
      destination: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=300',
      dates: 'Dec 15-22, 2024',
      status: 'Confirmed',
      price: 899,
      travelers: 2
    },
    {
      id: 'WL-789012',
      destination: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=300',
      dates: 'Aug 10-15, 2024',
      status: 'Completed',
      price: 1299,
      travelers: 1
    },
    {
      id: 'WL-345678',
      destination: 'Kyoto, Japan',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=300',
      dates: 'May 5-11, 2024',
      status: 'Completed',
      price: 1099,
      travelers: 2
    }
  ];

  const reviews = [
    {
      destination: 'Santorini, Greece',
      rating: 5,
      date: 'Aug 2024',
      text: 'Absolutely incredible experience! The sunset views were breathtaking and the service was exceptional.'
    },
    {
      destination: 'Kyoto, Japan',
      rating: 5,
      date: 'May 2024',
      text: 'Perfect cultural immersion. The temples were beautiful and our guide was so knowledgeable.'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'bookings', name: 'My Bookings', icon: Calendar },
    { id: 'reviews', name: 'My Reviews', icon: Star },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{user.totalTrips}</div>
                <div className="text-sm text-gray-600">Total Trips</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{user.countries}</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{user.reviews}</div>
                <div className="text-sm text-gray-600">Reviews</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-3" />
                    {tab.name}
                  </button>
                ))}
                <button className="w-full flex items-center px-4 py-3 text-left rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Account Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                      <h3 className="text-lg font-semibold mb-2">Next Trip</h3>
                      <p className="text-blue-100 mb-2">Bali, Indonesia</p>
                      <p className="text-blue-100">Dec 15-22, 2024</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                      <h3 className="text-lg font-semibold mb-2">Travel Miles</h3>
                      <p className="text-2xl font-bold">15,420</p>
                      <p className="text-green-100 text-sm">Miles traveled this year</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium">Booked trip to Bali, Indonesia</p>
                          <p className="text-gray-600 text-sm">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <Star className="h-5 w-5 text-yellow-500 mr-3" />
                        <div>
                          <p className="font-medium">Left review for Santorini trip</p>
                          <p className="text-gray-600 text-sm">1 week ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bookings Tab */}
              {activeTab === 'bookings' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">My Bookings</h2>
                  <div className="space-y-6">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-200 rounded-xl p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                          <div className="flex items-center mb-4 md:mb-0">
                            <img
                              src={booking.image}
                              alt={booking.destination}
                              className="w-16 h-16 object-cover rounded-lg mr-4"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">{booking.destination}</h3>
                              <p className="text-gray-600">{booking.dates}</p>
                              <p className="text-sm text-gray-500">
                                {booking.travelers} {booking.travelers === 1 ? 'traveler' : 'travelers'}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center mb-2">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                booking.status === 'Confirmed'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {booking.status}
                              </span>
                            </div>
                            <p className="text-lg font-bold text-gray-900">${booking.price}</p>
                            <p className="text-sm text-gray-500">Booking ID: {booking.id}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">My Reviews</h2>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">{review.destination}</h3>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            defaultValue="John"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            defaultValue="Doe"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            defaultValue={user.email}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Save Changes
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Bell className="h-5 w-5 text-gray-400 mr-3" />
                            <span>Email notifications</span>
                          </div>
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Bell className="h-5 w-5 text-gray-400 mr-3" />
                            <span>Travel reminders</span>
                          </div>
                          <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Bell className="h-5 w-5 text-gray-400 mr-3" />
                            <span>Promotional offers</span>
                          </div>
                          <input type="checkbox" className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <CreditCard className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <p className="font-medium">**** **** **** 1234</p>
                          <p className="text-gray-600 text-sm">Expires 12/25</p>
                        </div>
                        <button className="ml-auto text-blue-600 hover:text-blue-700">
                          Edit
                        </button>
                      </div>
                      <button className="mt-4 text-blue-600 hover:text-blue-700">
                        + Add New Payment Method
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;