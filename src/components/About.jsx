import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white min-h-[calc(90vh-6rem)]">
      <div className="container mx-auto px-6 lg:px-16 py-16">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-400 mt-4">The creative minds behind the code.</p>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">

          {/* --- Team Member 1 Card --- */}
          <div className="md:w-1/2 lg:w-1/3 bg-gray-900 p-8 rounded-lg text-center flex flex-col items-center shadow-lg">
            <img 
              src="/logo_reels.jpg" // Your image path
              alt="A professional headshot of Zaveriya Ridha"
              className="rounded-full w-48 h-48 object-cover border-4 border-gray-700 mb-6"
            />
            <h2 className="text-2xl font-bold mb-1">Zaveriya Ridha</h2>
            <h3 className="text-md text-[#e99b63] font-semibold mb-4">Founder <br/> Backend Developer</h3>
            <p className="text-gray-400 leading-relaxed">
As the founder, Zaveriya brings a unique blend of creative design and clean, efficient code — a skillset she used to personally design and build this site. Her mission is to translate a client's unique vision into a digital reality that is not only stunning but also achieves key business goals.            </p>
          </div>

          {/* --- Team Member 2 Card --- */}
          <div className="md:w-1/2 lg:w-1/3 bg-gray-900 p-8 rounded-lg text-center flex flex-col items-center shadow-lg">
            <img 
              src="/imran.jpg" // Replace with the other person's photo
              alt="A professional headshot of the second team member"
              className="rounded-full w-48 h-48 object-cover border-4 border-gray-700 mb-6"
            />
            <h2 className="text-2xl font-bold mb-1">Imran Pasha</h2>
            <h3 className="text-md text-[#e99b63] font-semibold mb-4">Co-founder<br/>Full-Stack Developer</h3>
            <p className="text-gray-400 leading-relaxed">
Imran is our full-stack powerhouse, architecting robust and secure applications. He leverages deep expertise in backend frameworks like Django, Node.js, and FastAPI to build powerful server-side logic, seamlessly integrating it with intuitive React frontends. His passion for cybersecurity is evident in his dedicated training on platforms like TryHackMe, also fortified against modern threats.            </p>
          </div>

          {/* --- Team Member 3 Card --- */}
          <div className="md:w-1/2 lg:w-1/3 bg-gray-900 p-8 rounded-lg text-center flex flex-col items-center shadow-lg">
            <img 
              src="/saiteja.jpg" // Replace with the other person's photo
              alt="A professional headshot of the second team member"
              className="rounded-full w-48 h-48 object-cover border-4 border-gray-700 mb-6"
            />
            <h2 className="text-2xl font-bold mb-1">Sai Teja</h2>
            <h3 className="text-md text-[#e99b63] font-semibold mb-4">Co-founder<br/>Full-Stack Developer</h3>
            <p className="text-gray-400 leading-relaxed">
Sai Teja is a versatile full-stack developer, skilled at building complete, end-to-end web solutions. He crafts clean user interfaces with Angular, HTML, and CSS, and builds robust backends using Node.js, Express, and Java. His expertise in PostgreSQL/SQL ensures data is managed securely, while his solid foundation in networking and operating systems allows him to deploy stable, high-performance applications. </p>
          </div>

          {/* --- Team Member 4 Card --- */}
          <div className="md:w-1/2 lg:w-1/3 bg-gray-900 p-8 rounded-lg text-center flex flex-col items-center shadow-lg">
            <img 
              src="/ariyan.jpg" // Replace with the other person's photo
              alt="A professional headshot of the second team member"
              className="rounded-full w-48 h-48 object-cover border-4 border-gray-700 mb-6"
            />
            <h2 className="text-2xl font-bold mb-1">Ariyan Samal</h2>
            <h3 className="text-md text-[#e99b63] font-semibold mb-4">co-founder<br/>Full-Stack Developer & WordPress Expert</h3>
            <p className="text-gray-400 leading-relaxed">
Believing that a 'one-size-fits-all' approach is never the answer, Ariyan is the problem-solver who ensures our clients always get the right tool for the job. Whether it's deploying a scalable and user-friendly site with WordPress or architecting a bespoke solution with his full-stack development skills, he is dedicated to creating efficient, effective, and maintainable web experiences. His ability to work in both ecosystems makes him invaluable for complex integrations and custom projects.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;