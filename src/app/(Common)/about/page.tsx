// pages/about.tsx

const AboutUs = () => {
  return (
    <div className="bg-gray-50">

      {/* Banner Section */}
      <div className="relative w-full h-64 bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-white">
              <h1 className="text-[35px] md:text-[38px] lg:text-[50px] xl:text-[6xl] 2xl:text-[65px] text-white font-bold">
              About Us
              </h1>
          </div>
      </div>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Introduction */}
          <section className="mb-12 max-w-3xl">
            <p className="text-lg text-gray-600">
              At BasaFinder, we are committed to helping you find your perfect home. Our platform is designed to make the
              process of searching for properties smooth, easy, and hassle-free. We believe in providing our users with
              the best tools to make informed decisions when renting a property.
            </p>
          </section>

          {/* Our Vision */}
          <section className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              Our vision is to revolutionize the rental experience by providing a seamless platform that connects
              renters with the best available properties. We strive to simplify the process, offer unparalleled
              customer support, and ensure that every individual finds their dream home.
            </p>
          </section>

          {/* Our Mission */}
          <section className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              We aim to provide a user-friendly platform that makes the search for rental properties more accessible and
              efficient. Our mission is to offer an intuitive, easy-to-use interface that ensures both property seekers and
              landlords have a positive experience.
            </p>
          </section>

          {/* Our Values */}
          <section className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="text-lg text-gray-600 list-disc list-inside">
              <li>Integrity: We value transparency and honesty in all our dealings.</li>
              <li>Customer-Centric: We focus on the needs of our customers first and foremost.</li>
              <li>Innovation: We are committed to continuous improvement and innovation.</li>
              <li>Collaboration: We believe in working together for mutual success.</li>
            </ul>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="flex flex-wrap gap-8">
              <div className="w-full sm:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
                <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Team Member 1" />
                <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="w-full sm:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
                <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Team Member 2" />
                <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">COO</p>
              </div>
              <div className="w-full sm:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
                <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Team Member 3" />
                <h3 className="text-xl font-semibold text-gray-800">Michael Brown</h3>
                <p className="text-gray-600">CTO</p>
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default AboutUs;
