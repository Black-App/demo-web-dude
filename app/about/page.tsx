import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-700 tracking-tight">
            SOLVIA <span className="text-slate-600 text-sm font-normal block sm:inline sm:ml-2">Sustainability Initiative</span>
          </Link>
          <nav className="space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
            <Link href="/about" className="text-emerald-600">About Us</Link>
            <Link href="/services" className="hover:text-emerald-600 transition">Programs & Services</Link>
            <Link href="/contact" className="hover:text-emerald-600 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-emerald-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">About Solvia Sustainability Initiative</h1>
          <p className="text-emerald-100 text-lg">
            Dedicated to environmental stewardship, sustainable waste management, and community empowerment across Zambia.
          </p>
        </div>
      </section>

      {/* Organizational Overview & Vision */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission & Purpose</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Solvia is a Zambian non-profit established to bridge the gap in effective local waste management. We transition communities away from delayed collections and informal roadside dumping toward a structured, circular economy.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By converting organic waste into agricultural compost and creating linkages for recyclables, we turn environmental challenges into economic and social opportunities.
            </p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">5-Stage Transformation Model</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-1 rounded">1</span>
                <div>
                  <h3 className="font-semibold text-emerald-950">Awareness</h3>
                  <p className="text-slate-600 text-sm">Educating households and schools on the impact of mixed waste.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-1 rounded">2</span>
                <div>
                  <h3 className="font-semibold text-emerald-950">Participation</h3>
                  <p className="text-slate-600 text-sm">Engaging communities in source segregation and sorting.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-1 rounded">3</span>
                <div>
                  <h3 className="font-semibold text-emerald-950">Action</h3>
                  <p className="text-slate-600 text-sm">Deploying collection points, waste stewards, and composting setups.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-1 rounded">4</span>
                <div>
                  <h3 className="font-semibold text-emerald-950">Empowerment</h3>
                  <p className="text-slate-600 text-sm">Training local committees and temporary waste stewards.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-1 rounded">5</span>
                <div>
                  <h3 className="font-semibold text-emerald-950">Impact</h3>
                  <p className="text-slate-600 text-sm">Achieving cleaner neighborhoods, bio-fertilizer yield, and reduced emissions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="bg-white border-y border-slate-200 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Guiding Values (ISECI)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-emerald-700 text-lg mb-2">Integrity</h3>
              <p className="text-slate-600 text-sm">Maintaining complete transparency and trust in all partner relationships and resource deployments.</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-emerald-700 text-lg mb-2">Stewardship</h3>
              <p className="text-slate-600 text-sm">Taking personal and collective responsibility for preserving local land, air, and water quality.</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-emerald-700 text-lg mb-2">Empowerment</h3>
              <p className="text-slate-600 text-sm">Equipping youth, school pupils, and residents with skills to generate value from sustainability.</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-emerald-700 text-lg mb-2">Collaboration</h3>
              <p className="text-slate-600 text-sm">Fostering deep partnerships across Ministry offices, local councils, schools, and private recyclers.</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 md:col-span-2">
              <h3 className="font-bold text-emerald-700 text-lg mb-2">Innovation</h3>
              <p className="text-slate-600 text-sm">Implementing tailored circular technologies—from decentralized composting to streamlined community buy-back schemes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Solvia Sustainability Initiative. All rights reserved.</div>
          <div className="space-x-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/services" className="hover:text-white">Programs</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}