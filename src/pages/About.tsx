
import { Users, Award, Briefcase, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="About CorpSolutions"
          subtitle="We're a dedicated team of professionals committed to helping businesses succeed."
          ctaText="Meet Our Team"
          ctaLink="#team"
          image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        />

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, CorpSolutions began with a simple mission: to help businesses navigate the increasingly complex digital landscape. What started as a small consulting firm has grown into a comprehensive business solutions provider with clients across the globe.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've expanded our services to address the evolving needs of modern businesses, always staying ahead of industry trends and technological advancements.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be a trusted partner to businesses of all sizes, from startups to Fortune 500 companies, helping them achieve their goals and realize their full potential.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80" 
                  alt="Our office" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do and define who we are as a company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in everything we do, delivering the highest quality solutions to our clients.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of collaboration, working closely with our clients to achieve shared goals.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Integrity</h3>
                <p className="text-gray-600">We conduct our business with the highest level of integrity, honesty, and transparency.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
                <p className="text-gray-600">We embrace innovation and continuously seek new ways to solve problems and create value.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals who lead our company and drive our success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <img 
                  src="https://i.pravatar.cc/300?img=11" 
                  alt="Team Member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Robert Smith</h3>
                <p className="text-blue-600 mb-3">CEO & Founder</p>
                <p className="text-gray-600">With over 20 years of experience in business consulting, Robert founded CorpSolutions with a vision to help companies thrive in the digital age.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <img 
                  src="https://i.pravatar.cc/300?img=9" 
                  alt="Team Member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Jennifer Lee</h3>
                <p className="text-blue-600 mb-3">Chief Strategy Officer</p>
                <p className="text-gray-600">Jennifer brings strategic insight and a wealth of experience in market analysis and business development to our team.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <img 
                  src="https://i.pravatar.cc/300?img=59" 
                  alt="Team Member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1 text-gray-800">David Chen</h3>
                <p className="text-blue-600 mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">David leads our technology initiatives, ensuring we leverage the latest innovations to deliver cutting-edge solutions to our clients.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
