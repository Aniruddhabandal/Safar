import React from 'react';
import { Users, Globe, Award, Heart, MapPin, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Happy Travelers' },
    { number: '500+', label: 'Destinations' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  const team = [
    {
      name: 'Aniruddha Bandal',
      role: 'Founder & CEO',
      image: '../src/Images/aniruddha.jpg',
      bio: 'Passionate traveler with 20+ years in the tourism industry'
    },
    {
      name: 'Vivek Gaikwad',
      role: 'Head of Operations',
      image: '../src/Images/Vivek.jpg',
      bio: 'Expert in sustainable tourism and cultural experiences'
    },
    {
      name: 'Tushar Vala',
      role: 'Travel Experience Designer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Creates unforgettable journeys tailored to your dreams'
    },
    {
      name: 'Shubhankar Kashyap',
      role: 'Customer Success Manager',
      image: '../src/Images/shubhankar.jpeg',
      bio: 'Dedicated to ensuring every trip exceeds expectations'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We believe travel has the power to transform lives and create lasting memories.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building connections between travelers and local communities worldwide.'
    },
    {
      icon: Globe,
      title: 'Sustainable Tourism',
      description: 'Committed to responsible travel that protects our planet for future generations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional experiences through attention to detail and personalized service.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Safar
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're passionate about creating extraordinary travel experiences that connect you 
            with the world's most beautiful destinations and inspiring cultures.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  
                  Founded in 2008 by a group of passionate travelers, Safar began as a small 
                  boutique travel agency with a simple mission: to create authentic, transformative 
                  travel experiences that go beyond the ordinary.
                </p>
                <p>
                  What started as organizing trips for friends and family has grown into a global 
                  community of travelers who share our love for exploration, cultural immersion, 
                  and sustainable tourism practices.
                </p>
                <p>
                  Today, we're proud to have helped over 50,000 travelers discover the world's 
                  most incredible destinations while supporting local communities and preserving 
                  the natural beauty of our planet.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel adventure"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">Destinations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape every experience we create
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind your extraordinary travel experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            To inspire and enable meaningful travel experiences that create lasting connections 
            between people, cultures, and places while promoting sustainable tourism practices 
            that benefit local communities and preserve our planet's natural wonders for future generations.
          </p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600">
              Honored to be recognized for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Best Travel Agency 2023</h3>
              <p className="text-gray-600">Travel Excellence Awards</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Top Rated Service</h3>
              <p className="text-gray-600">Customer Choice Awards</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sustainable Tourism Leader</h3>
              <p className="text-gray-600">Green Travel Initiative</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;