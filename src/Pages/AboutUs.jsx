import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-8 lg:px-16">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed text-center mb-16 max-w-2xl mx-auto">
          Welcome to <span className="font-bold text-green-600">Libassi Store</span>, your trusted partner for high-quality products and exceptional customer service. Established in 2025, we aim to provide a seamless shopping experience that combines innovation, reliability, and a deep commitment to customer satisfaction.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Libassi Store is more than just an online retailer. We are a team of passionate individuals dedicated to curating the best products for our customers. From everyday essentials to unique finds, our collection is carefully selected to meet the diverse needs of our growing community. With a focus on quality and value, we strive to make every purchase a step toward a better lifestyle.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            At Libassi Store, our mission is simple: to bring joy and convenience to our customers’ lives. We believe shopping should be stress-free, and we’re here to make that happen by offering:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li><strong>Top-notch products</strong> sourced from trusted suppliers.</li>
            <li><strong>Affordable prices</strong> without compromising on quality.</li>
            <li><strong>Outstanding customer support</strong> to assist you every step of the way.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Diverse Product Range:</strong> From fashion to electronics, home goods to personal care, we have something for everyone.</li>
            <li><strong>Fast and Reliable Shipping:</strong> Enjoy timely deliveries, ensuring your products reach you when you need them.</li>
            <li><strong>Secure Shopping:</strong> Our platform is designed to provide a safe and secure online shopping environment.</li>
            <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our priority, and we go the extra mile to ensure you’re happy with your experience.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Integrity:</strong> We operate with transparency and honesty.</li>
            <li><strong>Innovation:</strong> Continuously improving our services and product offerings.</li>
            <li><strong>Sustainability:</strong> Committed to eco-friendly practices and responsible sourcing.</li>
            <li><strong>Community:</strong> Building meaningful relationships with our customers and partners.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Have questions or need assistance? We’re here to help!
          </p>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:support@libassi.com" className="text-green-600 hover:underline">support@libassi.com</a></li>
            <li><strong>Phone:</strong> +1 (800) 123-4567</li>
            <li><strong>Social Media:</strong> Follow us on
              <a href="https://www.facebook.com/libassi" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline ml-1">Facebook</a>,
              <a href="https://twitter.com/libassi" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline ml-1">Twitter</a>, and
              <a href="https://instagram.com/libassi" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline ml-1">Instagram</a>.
            </li>
          </ul>
        </section>

        <p className="text-center text-gray-500 text-sm mt-10">Thank you for choosing Libassi Store. We look forward to serving you and becoming your go-to destination for all your shopping needs!</p>
      </div>
    </div>
  );
};

export default AboutUs;
