import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-700 tracking-tight">
            SOLVIA <span className="text-slate-600 text-sm font-normal block sm:inline sm:ml-2">Sustainability Initiative</span>
          </Link>
          <nav className="space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
            <Link href="/about" className="hover:text-emerald-600 transition">About Us</Link>
            <Link href="/services" className="hover:text-emerald-600 transition">Programs & Services</Link>
            <Link href="/contact" className="text-emerald-600">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-emerald-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Partner With Us</h1>
          <p className="text-emerald-100 text-lg">
            Whether you are a school, government ministry, or passionate volunteer, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex-grow w-full">
        <div className="grid md:grid-cols-5 gap-12">
          
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Collaboration is at the heart of the waste-to-value framework. Reach out to discuss pilot communities, educational workshops, or corporate partnerships.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-600 text-sm mt-1">Lusaka, Zambia<br/>(Headquarters & Pilot Zones)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600 text-sm mt-1">partnerships@solvia.org.zm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-700">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600 text-sm mt-1">+260 XX XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name / Organization</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="e.g., Ministry of Local Govt" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="you@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject Area</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
                  <option>School Education Program</option>
                  <option>Community Waste Collection</option>
                  <option>Recycling Partnership</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="How can we collaborate?"></textarea>
              </div>

              <button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-md">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Solvia Sustainability Initiative. All rights reserved.</div>
          <div className="space-x-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/services" className="hover:text-white">Programs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}