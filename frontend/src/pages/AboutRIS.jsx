import React from 'react';

const AboutRIS = () => {
  return (
    <div className=" text-gray-800 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to our Reagent Inventory Management System (RIMS), a cutting-edge solution designed to streamline the management of chemical reagents and laboratory supplies. Our mission is to empower research facilities, laboratories, and educational institutions with a robust tool that simplifies inventory management, ensures compliance, and enhances productivity.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed mb-4">
          At RIMS, we believe that effective inventory management is the backbone of successful scientific research. Our vision is to eliminate the complexities of tracking, ordering, and maintaining reagents by providing an intuitive, user-friendly platform. We are committed to helping you focus on what truly matters—innovative research and discovery.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Why Choose RIMS?</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
          <li className="mb-2"><strong>Precision and Accuracy:</strong> Our system offers real-time tracking of reagent quantities, ensuring that you always have the materials you need when you need them.</li>
          <li className="mb-2"><strong>Compliance and Safety:</strong> RIMS helps you stay compliant with regulatory standards by managing safety data sheets (SDS) and providing alerts for hazardous materials and expiration dates.</li>
          <li className="mb-2"><strong>Efficiency and Productivity:</strong> Automate your procurement process with low-stock alerts and direct supplier integration, reducing downtime and increasing efficiency.</li>
          <li className="mb-2"><strong>Customizable Solutions:</strong> Tailor the system to meet the specific needs of your laboratory with customizable dashboards, reports, and user roles.</li>
        </ul>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Commitment</h2>
        <p className="text-lg leading-relaxed mb-4">
          We are dedicated to providing exceptional customer support and continuous updates to ensure that RIMS remains the best-in-class solution for reagent inventory management. Your success is our priority, and we are here to support you every step of the way.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed mb-4">
          For more information about RIMS, or to schedule a demo, please contact us at <a href="mailto:email@example.com" className="text-blue-500 underline">email@example.com</a> or call us at (123) 456-7890. We look forward to helping you manage your laboratory’s inventory with precision and ease.
        </p>
      </div>
    </div>
  );
}

export default AboutRIS;
