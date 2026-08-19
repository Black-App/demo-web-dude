import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-700 tracking-tight">
            SOLVIA <span className="text-slate-600 text-sm font-normal block sm:inline sm:ml-2">Sustainability Initiative</span>
          </div>
          <nav className="space-x-6 text-sm font-medium">
            <Link href="/" className="text-emerald-600">Home</Link>
            <Link href="/about" className="hover:text-emerald-600 transition">About Us</Link>
            <Link href="/services" className="hover:text-emerald-600 transition">Programs & Services</Link>
            <Link href="/contact" className="hover:text-emerald-600 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-emerald-700/60 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/30">
            Zambian Non-Profit Organization
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Transforming Waste into Value for Environmental Stewardship
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Empowering local communities, schools, and partners through circular economy practices, composting, and sustainable waste management.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/services" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition shadow-md">
              Explore Programs
            </Link>
            <Link href="/contact" className="border border-emerald-300/40 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg transition">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Strategic Focus Areas</h2>
          <p className="text-slate-600 mt-2">Targeted allocation driving community action and environmental impact.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="text-emerald-600 font-extrabold text-2xl mb-2">30%</div>
            <h3 className="text-xl font-bold mb-2">Environmental Education</h3>
            <p className="text-slate-600 text-sm">School clubs, community campaigns, and training on source segregation.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="text-emerald-600 font-extrabold text-2xl mb-2">30%</div>
            <h3 className="text-xl font-bold mb-2">Waste Management</h3>
            <p className="text-slate-600 text-sm">Source segregation, responsible collection, and local recycling linkages.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="text-emerald-600 font-extrabold text-2xl mb-2">20%</div>
            <h3 className="text-xl font-bold mb-2">Sustainable Agriculture</h3>
            <p className="text-slate-600 text-sm">Converting organic waste into composting for household and school gardens.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="text-emerald-600 font-extrabold text-2xl mb-2">20%</div>
            <h3 className="text-xl font-bold mb-2">Strategic Partnerships</h3>
            <p className="text-slate-600 text-sm">Collaborating with local councils, ministries, schools, and international bodies.</p>
          </div>
        </div>
      </section>

      {/* Core Philosophy & Values */}
      <section className="bg-white border-y border-slate-200 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">The &ldquo;Waste-to-Value&rdquo; Philosophy</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Solvia addresses key challenges like unmonitored roadside dumping and unsegregated waste by turning potential waste streams into valuable economic and agricultural resources.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Through local steward networks and educational programs, we move communities along a clear roadmap: Awareness → Participation → Action → Empowerment → Impact.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-emerald-800">Core Values (ISECI)</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><strong className="text-emerald-700">Integrity:</strong> Unwavering commitment to honest stewardship.</li>
              <li className="flex items-center gap-2"><strong className="text-emerald-700">Stewardship:</strong> Responsible care of local environments.</li>
              <li className="flex items-center gap-2"><strong className="text-emerald-700">Empowerment:</strong> Training community members and stewards.</li>
              <li className="flex items-center gap-2"><strong className="text-emerald-700">Collaboration:</strong> Uniting government, schools, and partners.</li>
              <li className="flex items-center gap-2"><strong className="text-emerald-700">Innovation:</strong> Practical circular economy solutions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Solvia Sustainability Initiative. All rights reserved.</div>
          <div className="space-x-4">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Programs</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}