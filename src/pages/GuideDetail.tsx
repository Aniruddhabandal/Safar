import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, MapPin, Camera, Utensils, Plane } from 'lucide-react';

const GuideDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const guide = {
    id: 1,
    title: 'Ultimate Guide to Backpacking Southeast Asia',
    excerpt: 'Everything you need to know for an epic adventure through Thailand, Vietnam, Cambodia, and Laos.',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Sarah Johnson',
    authorImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
    date: 'December 10, 2024',
    readTime: '15 min read',
    category: 'Backpacking',
    tags: ['Southeast Asia', 'Budget Travel', 'Adventure'],
    content: `
      <p>Southeast Asia is a backpacker's paradise, offering incredible diversity, rich cultures, delicious food, and budget-friendly travel options. This comprehensive guide will help you plan an unforgettable journey through Thailand, Vietnam, Cambodia, and Laos.</p>

      <h2>Planning Your Route</h2>
      <p>The classic Southeast Asia backpacking route typically starts in Bangkok, Thailand, and can be completed in 4-8 weeks depending on your pace and budget. Here's a suggested itinerary:</p>

      <h3>Thailand (2-3 weeks)</h3>
      <ul>
        <li><strong>Bangkok (3-4 days):</strong> Explore temples, street food, and vibrant nightlife</li>
        <li><strong>Chiang Mai (4-5 days):</strong> Cultural experiences and elephant sanctuaries</li>
        <li><strong>Islands (1-2 weeks):</strong> Koh Phi Phi, Koh Samui, or Koh Tao for beaches and diving</li>
      </ul>

      <h3>Cambodia (1-2 weeks)</h3>
      <ul>
        <li><strong>Siem Reap (4-5 days):</strong> Angkor Wat temple complex</li>
        <li><strong>Phnom Penh (2-3 days):</strong> History and culture</li>
        <li><strong>Sihanoukville (2-3 days):</strong> Beach relaxation</li>
      </ul>

      <h3>Vietnam (2-3 weeks)</h3>
      <ul>
        <li><strong>Ho Chi Minh City (3-4 days):</strong> Modern Vietnam and war history</li>
        <li><strong>Hoi An (3-4 days):</strong> Ancient town and tailor shops</li>
        <li><strong>Hanoi (3-4 days):</strong> Capital city and street food</li>
        <li><strong>Ha Long Bay (2 days):</strong> Stunning limestone karsts</li>
      </ul>

      <h3>Laos (1-2 weeks)</h3>
      <ul>
        <li><strong>Luang Prabang (4-5 days):</strong> UNESCO World Heritage site</li>
        <li><strong>Vang Vieng (2-3 days):</strong> Adventure activities and scenery</li>
        <li><strong>Vientiane (2-3 days):</strong> Laid-back capital</li>
      </ul>

      <h2>Budget Breakdown</h2>
      <p>Southeast Asia is incredibly budget-friendly. Here's what you can expect to spend per day:</p>

      <h3>Budget Backpacker ($20-30/day)</h3>
      <ul>
        <li>Accommodation: $5-10 (dorms, guesthouses)</li>
        <li>Food: $5-10 (street food, local restaurants)</li>
        <li>Transportation: $3-5 (local buses, trains)</li>
        <li>Activities: $5-10 (temples, basic tours)</li>
      </ul>

      <h3>Mid-range Traveler ($40-60/day)</h3>
      <ul>
        <li>Accommodation: $15-25 (private rooms, mid-range hotels)</li>
        <li>Food: $10-20 (mix of local and international cuisine)</li>
        <li>Transportation: $10-15 (private transfers, flights)</li>
        <li>Activities: $15-25 (guided tours, adventure activities)</li>
      </ul>

      <h2>Essential Packing List</h2>
      <p>Pack light and smart for your Southeast Asia adventure:</p>

      <h3>Clothing</h3>
      <ul>
        <li>Lightweight, quick-dry clothing</li>
        <li>Long pants and sleeves for temples and mosquitoes</li>
        <li>Swimwear</li>
        <li>Rain jacket or poncho</li>
        <li>Comfortable walking shoes</li>
        <li>Flip-flops or sandals</li>
      </ul>

      <h3>Essentials</h3>
      <ul>
        <li>Passport with 6+ months validity</li>
        <li>Travel insurance</li>
        <li>Mosquito repellent (DEET-based)</li>
        <li>Sunscreen (SPF 30+)</li>
        <li>First aid kit</li>
        <li>Water purification tablets</li>
        <li>Power bank and universal adapter</li>
      </ul>

      <h2>Health and Safety Tips</h2>
      <p>Stay healthy and safe during your travels:</p>

      <h3>Vaccinations</h3>
      <p>Consult your doctor 4-6 weeks before travel. Common recommendations include:</p>
      <ul>
        <li>Hepatitis A and B</li>
        <li>Typhoid</li>
        <li>Japanese Encephalitis (for rural areas)</li>
        <li>Malaria prophylaxis (for certain regions)</li>
      </ul>

      <h3>Food Safety</h3>
      <ul>
        <li>Eat at busy local places with high turnover</li>
        <li>Avoid raw vegetables and fruits you can't peel</li>
        <li>Drink bottled or purified water</li>
        <li>Be cautious with ice and dairy products</li>
      </ul>

      <h2>Cultural Etiquette</h2>
      <p>Respect local customs and traditions:</p>

      <h3>Temple Visits</h3>
      <ul>
        <li>Dress modestly (cover shoulders and knees)</li>
        <li>Remove shoes before entering</li>
        <li>Don't point feet toward Buddha statues</li>
        <li>Ask permission before photographing people</li>
      </ul>

      <h3>General Etiquette</h3>
      <ul>
        <li>Learn basic greetings in local languages</li>
        <li>Bargain respectfully at markets</li>
        <li>Tip appropriately (10% in restaurants)</li>
        <li>Be patient and maintain a sense of humor</li>
      </ul>

      <h2>Transportation</h2>
      <p>Getting around Southeast Asia is easy and affordable:</p>

      <h3>Between Countries</h3>
      <ul>
        <li><strong>Flights:</strong> Budget airlines like AirAsia, Jetstar</li>
        <li><strong>Buses:</strong> Overnight buses for longer distances</li>
        <li><strong>Trains:</strong> Scenic routes in Thailand and Vietnam</li>
      </ul>

      <h3>Within Countries</h3>
      <ul>
        <li><strong>Tuk-tuks:</strong> Short distances in cities</li>
        <li><strong>Motorbike taxis:</strong> Quick and cheap</li>
        <li><strong>Local buses:</strong> Very budget-friendly</li>
        <li><strong>Grab:</strong> Southeast Asian Uber alternative</li>
      </ul>

      <h2>Must-Try Experiences</h2>
      <p>Don't miss these incredible experiences:</p>

      <ul>
        <li>Sunrise at Angkor Wat, Cambodia</li>
        <li>Full moon party in Koh Phangan, Thailand</li>
        <li>Motorbike tour through Ha Long Bay, Vietnam</li>
        <li>Alms giving ceremony in Luang Prabang, Laos</li>
        <li>Cooking class in Chiang Mai, Thailand</li>
        <li>Floating markets in Bangkok, Thailand</li>
        <li>Cu Chi Tunnels in Ho Chi Minh City, Vietnam</li>
      </ul>

      <h2>Final Tips</h2>
      <ul>
        <li>Stay flexible with your itinerary</li>
        <li>Connect with other travelers in hostels</li>
        <li>Learn from locals and fellow backpackers</li>
        <li>Keep digital and physical copies of important documents</li>
        <li>Trust your instincts and stay aware of your surroundings</li>
        <li>Embrace the unexpected – it's part of the adventure!</li>
      </ul>

      <p>Southeast Asia offers an incredible journey of discovery, adventure, and personal growth. With proper planning and an open mind, your backpacking adventure will be an experience you'll treasure forever.</p>
    `
  };

  const relatedGuides = [
    {
      id: 2,
      title: 'Budget Travel: Exploring Japan on $50 a Day',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '14 min read'
    },
    {
      id: 3,
      title: 'European City Hopping: A Complete Itinerary',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '12 min read'
    },
    {
      id: 4,
      title: 'Safari Planning: Your African Adventure Guide',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '18 min read'
    }
  ];

  const quickTips = [
    { icon: Plane, title: 'Best Time to Visit', tip: 'November to March for cooler, dry weather' },
    { icon: MapPin, title: 'Visa Requirements', tip: 'Most countries offer visa-on-arrival or e-visas' },
    { icon: Utensils, title: 'Food Safety', tip: 'Eat where locals eat, avoid tap water' },
    { icon: Camera, title: 'Photography', tip: 'Always ask permission before photographing people' }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/guides" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Guides
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {guide.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {guide.excerpt}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-xl shadow-lg p-8">
              {/* Article Meta */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center">
                  <img
                    src={guide.authorImage}
                    alt={guide.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{guide.author}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{guide.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <Bookmark className="h-5 w-5 mr-1" />
                    Save
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <Share2 className="h-5 w-5 mr-1" />
                    Share
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {guide.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />
            </article>

            {/* Related Guides */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedGuides.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.id}
                    to={`/guides/${relatedGuide.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={relatedGuide.image}
                      alt={relatedGuide.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedGuide.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {relatedGuide.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Tips */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
                <div className="space-y-4">
                  {quickTips.map((tip, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3 flex-shrink-0">
                        <tip.icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{tip.title}</h4>
                        <p className="text-gray-600 text-sm">{tip.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#planning" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Planning Your Route
                  </a>
                  <a href="#budget" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Budget Breakdown
                  </a>
                  <a href="#packing" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Essential Packing List
                  </a>
                  <a href="#health" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Health and Safety Tips
                  </a>
                  <a href="#culture" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Cultural Etiquette
                  </a>
                  <a href="#transport" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Transportation
                  </a>
                  <a href="#experiences" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Must-Try Experiences
                  </a>
                </nav>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Get More Travel Tips</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Subscribe to our newsletter for weekly travel guides and tips.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetail;