import React from 'react';

const Contact = () => {
  // --- ACTION REQUIRED: Replace with your details ---
  const phoneNumber = '919876543210'; // Use your number in international format (e.g., 91 for India)
  const message = "Hello! I saw your website and I'm interested in discussing a project.";
  const whatsappLink = `https://wa.me/${7204306056}?text=${encodeURIComponent(message)}`;
  // --- End of Action Required ---

  return (
    <div className="bg-primary text-text-primary min-h-[calc(90vh-6rem)] py-16 px-6 lg:px-16 flex flex-col items-center justify-center">
      <div className="container mx-auto text-center">
        
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold">Let's Talk</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            The quickest way to get in touch is via WhatsApp. Click the button below to start a conversation!
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="mb-12">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white font-semibold py-4 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg text-lg"
          >
            <i className='bx bxl-whatsapp text-3xl'></i>
            Chat with Us on WhatsApp
          </a>
        </div>

        

        <div>
  <h3 className="text-xl font-semibold mb-2 text-text-secondary">Our Availability</h3>
  <p className="text-text-primary">
    We are available for calls and consultations from<br/>
    <strong>Monday - Sunday, 7:00 AM - 10:00 PM (IST)</strong>.
  </p>
</div>

      </div>
    </div>
  );
};

export default Contact;