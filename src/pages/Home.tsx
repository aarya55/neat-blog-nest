
import { ArrowRight, LineChart, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Transform Your Business with CorpSolutions"
          subtitle="We deliver innovative strategies and solutions to help your business thrive in today's competitive marketplace."
          ctaText="Explore Our Services"
          ctaLink="/services"
        />

        {/* Services Preview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive business solutions tailored to meet your unique needs and help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Business Consulting"
                description="Strategic guidance to optimize operations, increase efficiency, and drive growth in your business."
                icon={<LineChart size={36} />}
              />
              <ServiceCard
                title="Digital Innovation"
                description="Cutting-edge digital solutions to transform your business processes and enhance customer experiences."
                icon={<Lightbulb size={36} />}
              />
              <ServiceCard
                title="Market Expansion"
                description="Comprehensive strategies to help your business enter new markets and expand your customer base."
                icon={<Rocket size={36} />}
              />
            </div>

            <div className="text-center mt-10">
              <Link 
                to="/services" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with CorpSolutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Johnson"
                position="CEO"
                company="TechStart Inc."
                content="Working with CorpSolutions transformed our business. Their strategic insights helped us increase revenue by 40% in just one year."
                rating={5}
              />
              <TestimonialCard
                name="Michael Chang"
                position="Marketing Director"
                company="Global Brands"
                content="The team at CorpSolutions delivered beyond our expectations. Their innovative approach to our marketing challenges yielded immediate results."
                rating={5}
              />
              <TestimonialCard
                name="Elena Rodriguez"
                position="Operations Manager"
                company="Nexus Systems"
                content="Their business consulting services streamlined our operations and reduced costs significantly. Highly recommended for any growing business."
                rating={4}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or ready to start working together? Reach out to us using the form below.
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

export default Home;
