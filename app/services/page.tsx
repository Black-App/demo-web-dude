import Link from "next/link";
import { upcomingEvents } from "../data/programs";

export default function Services() {
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
            <Link href="/about" className="hover:text-emerald-600 transition">About Us</Link>
            <Link href="/services" className="text-emerald-600">Programs & Services</Link>
            <Link href="/contact" className="hover:text-emerald-600 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-emerald-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Our Programs & Initiatives</h1>
          <p className="text-emerald-100 text-lg">
            Translating the waste-to-value philosophy into actionable community programs.
          </p>
        </div>
      </section>

      {/* Core Service Areas */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-800 mb-3">Environmental Education</h3>
            <p className="text-slate-600">Establishing school clubs and running community campaigns to build foundational knowledge on why waste segregation matters.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-800 mb-3">Waste Management & Recycling</h3>
            <p className="text-slate-600">Setting up local public bins, coordinating safe collection points, and linking communities directly with private recyclers for buy-back schemes.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-800 mb-3">Sustainable Agriculture</h3>
            <p className="text-slate-600">Training households and schools to utilize their organic waste to create compost for backyard and community gardens.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-800 mb-3">Community Empowerment</h3>
            <p className="text-slate-600">Forming local environmental committees and employing temporary waste stewards to monitor and manage neighborhood collection points.</p>
          </div>
        </div>
      </section>

      {/* Dynamic Events Section */}
      <section className="bg-slate-100 border-y border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Upcoming Events & Activations</h2>
          <p className="text-slate-600 mb-10">Join us in the field as we implement our core strategies.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* This code dynamically loops through your programs.ts file! */}
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-xl border border-emerald-100 shadow-md flex flex-col">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="text-sm text-slate-500 mb-4 flex-grow">
                  <p className="font-semibold text-slate-700">📍 {event.location}</p>
                  <p className="font-semibold text-slate-700 mb-2">📅 {event.date}</p>
                  <p className="mt-2 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Solvia Sustainability Initiative. All rights reserved.</div>
          <div className="space-x-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}