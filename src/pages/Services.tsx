
import { LineChart, Lightbulb, Rocket, Globe, Shield, Settings, Users, Database, BarChart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

const Services = () => {
  const services = [
    {
      title: "Business Consulting",
      description: "Expert advice to optimize operations, reduce costs, and improve efficiency across all areas of your business.",
      icon: <LineChart size={36} />
    },
    {
      title: "Digital Innovation",
      description: "Cutting-edge digital solutions to transform your business processes and enhance customer experiences.",
      icon: <Lightbulb size={36} />
    },
    {
      title: "Market Expansion",
      description: "Comprehensive strategies to help your business enter new markets and expand your customer base.",
      icon: <Rocket size={36} />
    },
    {
      title: "International Business",
      description: "Navigate global markets with our expertise in international regulations, cultural considerations, and market entry strategies.",
      icon: <Globe size={36} />
    },
    {
      title: "Risk Management",
      description: "Identify, assess, and mitigate risks to protect your business interests and ensure long-term stability.",
      icon: <Shield size={36} />
    },
    {
      title: "Process Optimization",
      description: "Streamline your business processes to eliminate inefficiencies, reduce costs, and improve productivity.",
      icon: <Settings size={36} />
    },
    {
      title: "Talent Management",
      description: "Develop strategies to attract, retain, and develop top talent to drive your business forward.",
      icon: <Users size={36} />
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into meaningful insights to make informed business decisions and gain competitive advantage.",
      icon: <Database size={36} />
    },
    {
      title: "Financial Advisory",
      description: "Expert financial guidance to optimize your company's financial performance and plan for sustainable growth.",
      icon: <BarChart size={36} />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Our Services"
          subtitle="Comprehensive business solutions tailored to your unique needs and challenges."
          ctaText="Contact Us Today"
          ctaLink="#contact"
          image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
        />

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a wide range of business solutions designed to address your specific challenges and help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Approach</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our structured approach ensures we deliver consistent, high-quality results for every client.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Discovery</h3>
                <p className="text-gray-600">We begin by understanding your business, challenges, and objectives in detail.</p>
              </div>

              <div className="relative">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Analysis</h3>
                <p className="text-gray-600">Our experts analyze the gathered information to identify opportunities and solutions.</p>
              </div>

              <div className="relative">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Implementation</h3>
                <p className="text-gray-600">We work with you to implement the recommended strategies and solutions.</p>
              </div>

              <div className="relative">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 z-10">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluation</h3>
                <p className="text-gray-600">We continuously monitor and evaluate results, making adjustments as needed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Contact us today to discuss how we can help your business thrive. Our team is ready to provide the solutions you need.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
