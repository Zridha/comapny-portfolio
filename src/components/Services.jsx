import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="bg-primary text-text-primary min-h-[calc(90vh-6rem)] py-16 px-6 lg:px-16">
      <div className="container mx-auto">
        
        {/* Our Recent Work Showcase */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Recent Work</h1>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Here are a few examples of projects we've recently launched. Click any card to view the live site.
          </p>
        </div>

        {/* Project Cards Grid - FURTHER REDUCED SIZES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          
          {/* --- Project Card 1 --- */}
          <a 
            href="https://groom2b.in/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-secondary rounded-lg shadow-lg overflow-hidden group block"
          >
            <div className="overflow-hidden h-56">
              <img 
                src="/Groom2b.png"
                alt="Screenshot of Project One"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">GROOM2B: Website for ethnic customized clothing</h3>
              <p className="text-text-secondary text-xs mb-4">
                Groom2b is a bespoke brand specializing in luxurious ethnic and wedding wear, offering exceptional customizations for unforgettable celebrations.
              </p>
              <div className="flex flex-wrap gap-3">
                {/* ... your tags ... */}
              </div>
            </div>
          </a>

          {/* --- Project Card 2 --- */}
          <a 
            href="https://leafwater.in/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-secondary rounded-lg shadow-lg overflow-hidden group block"
          >
            <div className="overflow-hidden h-56">
              <img 
                src="/leaf.png"
                alt="Screenshot of Project Two"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Leafwater - Personalized Skincare brand</h3>
              <p className="text-text-secondary text-xs mb-4">
                Leaf Water is a personalized skincare brand dedicated to creating tailored skincare solutions, embracing each user's unique skin journey.
              </p>
              <div className="flex flex-wrap gap-3">
                {/* ... your tags ... */}
              </div>
            </div>
          </a>

          {/* --- Project Card 3 --- */}
          <a 
            href="https://www.women2o.com/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-secondary rounded-lg shadow-lg overflow-hidden group block"
          >
            <div className="overflow-hidden h-56">
              <img 
                src="/women.png"
                alt="Screenshot of Project Three"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Women2.O Bussiness Wear for women
              </h3>
              <p className="text-text-secondary text-xs mb-4">
                Women2.0 is a sophisticated brand offering premium formal wear for women, combining elegance with impeccable custom tailoring.
              </p>
              <div className="flex flex-wrap gap-3">
                {/* ... your tags ... */}
              </div>
            </div>
          </a>

          {/* --- Project Card 4 --- */}
          <a 
            href="https://www.women2o.com/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-secondary rounded-lg shadow-lg overflow-hidden group block"
          >
            <div className="overflow-hidden h-56">
              <img 
                src="/style.png"
                alt="Screenshot of Project Four"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                App Tester For MPF Style Club
              </h3>
              <p className="text-text-secondary text-xs mb-4">
                Testing the LifeStyle Super app & With its Signature feature of Wardrobe and many more.
              </p>
              <div className="flex flex-wrap gap-3">
                {/* ... your tags ... */}
              </div>
            </div>
          </a>
          
          {/* --- Project Card 5 --- */}
          <a 
            href="https://www.blutailor.com/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-secondary rounded-lg shadow-lg overflow-hidden group block"
          >
            <div className="overflow-hidden h-56">
              <img 
                src="/blue.png"
                alt="Screenshot of Project Five"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                Blutailor - Luxury Customization and Alterations
              </h3>
              <p className="text-text-secondary text-xs mb-4">
                Blutailor provides expert tailoring and alteration services, ensuring precise fit and impeccable craftsmanship for every garment.
              </p>
              <div className="flex flex-wrap gap-3">
                {/* ... your tags ... */}
              </div>
            </div>
          </a>

        </div>

        {/* Our Services Section */}

        <div className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold">Our Services</h2>

          <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">We offer a range of web development services to bring your vision to life, from custom-coded applications to powerful WordPress sites.</p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col">

              <i className='bx bx-code-alt text-accent text-5xl mb-4'></i>

              <h2 className="text-2xl font-bold mb-3">Custom Web Development</h2>

              <p className="text-text-secondary mb-4 flex-grow">For unique projects that require a bespoke solution. We build high-performance, scalable web applications from the ground up using modern technologies.</p>

              <ul className="text-text-secondary space-y-2">

                <li className="flex items-center"><i className='bx bx-check-shield text-accent mr-2'></i>Secure & Reliable</li>

                <li className="flex items-center"><i className='bx bx-rocket text-accent mr-2'></i>Optimized for Speed</li>

                <li className="flex items-center"><i className='bx bx-devices text-accent mr-2'></i>Fully Responsive Design</li>

              </ul>

            </div>

            <div className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col">

              <i className='bx bxl-wordpress text-accent text-5xl mb-4'></i>

              <h2 className="text-2xl font-bold mb-3">WordPress Expert</h2>

              <p className="text-text-secondary mb-4 flex-grow">Leveraging the world's most popular CMS, we build powerful, flexible, and easy-to-manage websites, blogs, and e-commerce stores.</p>

              <ul className="text-text-secondary space-y-2">

                <li className="flex items-center"><i className='bx bx-edit text-accent mr-2'></i>Easy Content Management</li>

                <li className="flex items-center"><i className='bx bx-store-alt text-accent mr-2'></i>E-commerce Ready</li>

                <li className="flex items-center"><i className='bx bx-slider-alt text-accent mr-2'></i>Customizable Themes</li>

              </ul>

            </div>

            <div className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col">

              <i className='bx bx-cog text-accent text-5xl mb-4'></i>

              <h2 className="text-2xl font-bold mb-3">Website Maintenance</h2>

              <p className="text-text-secondary mb-4 flex-grow">Keep your website running smoothly and securely. We offer maintenance packages that include updates, backups, and performance monitoring.</p>

              <ul className="text-text-secondary space-y-2">

                <li className="flex items-center"><i className='bx bx-shield-quarter text-accent mr-2'></i>Security Updates</li>

                <li className="flex items-center"><i className='bx bx-cloud-upload text-accent mr-2'></i>Regular Backups</li>

                <li className="flex items-center"><i className='bx bx-tachometer text-accent mr-2'></i>Performance Checks</li>

              </ul>

            </div>

        </div>

        <div className="text-center mt-20">

          <Link to="/contact">

            <button className="bg-accent text-primary font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-105">

              Let's Talk

            </button>

          </Link>

        </div>



      </div>

    </div>

  );

};



export default Services;