export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#111111]">
      <section className="relative min-h-screen overflow-hidden">
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.93)_38%,rgba(255,255,255,0.55)_60%,rgba(255,255,255,0.05)_100%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">
          
          <div className="max-w-3xl">
            
            <p className="text-[#B7833A] uppercase tracking-[0.34em] text-sm font-semibold mb-7">
              Professional. Reliable. Discreet.
            </p>

            <h1 className="font-serif text-6xl md:text-8xl leading-[0.92] tracking-tight mb-5">
              Mobile Notary & Loan Signing Services
            </h1>

            <p className="text-[#B7833A] uppercase tracking-[0.34em] text-2xl md:text-3xl font-semibold mb-8">
              Delivered To You.
            </p>

            <div className="h-px w-24 bg-[#B7833A] mb-8" />

            <p className="text-lg md:text-xl text-neutral-800 leading-9 max-w-2xl mb-10">
              Convenient, professional, and accurate notary and loan signing services throughout Fresno County and the Central Valley.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              
              <a
                href="https://calendly.com/"
                className="inline-flex items-center justify-center rounded-md bg-black text-white hover:bg-neutral-800 px-8 py-5 text-sm font-semibold tracking-[0.14em] uppercase shadow-lg"
              >
                Schedule Appointment
              </a>

              <a
                href="sms:14158065811"
                className="inline-flex items-center justify-center rounded-md bg-white border border-[#B7833A] text-[#8B5A20] hover:bg-[#F2E6D2] px-8 py-5 text-sm font-semibold tracking-[0.14em] uppercase shadow-sm"
              >
                Text (415) 806-5811
              </a>

            </div>
          </div>

          <div className="mt-20 bg-[#090909] text-white rounded-xl shadow-2xl border border-white/10 px-6 py-7 grid md:grid-cols-5 gap-6">
            
            <div>
              <h3 className="uppercase tracking-[0.12em] text-sm font-bold mb-2">
                Same-Day Appointments
              </h3>
              <p className="text-neutral-300 text-sm leading-6">
                When you need it, we’re there.
              </p>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.12em] text-sm font-bold mb-2">
                Bonded & Insured
              </h3>
              <p className="text-neutral-300 text-sm leading-6">
                Your peace of mind is our priority.
              </p>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.12em] text-sm font-bold mb-2">
                We Travel To You
              </h3>
              <p className="text-neutral-300 text-sm leading-6">
                Homes, offices, hospitals, jails & more.
              </p>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.12em] text-sm font-bold mb-2">
                Evening & Weekend Availability
              </h3>
              <p className="text-neutral-300 text-sm leading-6">
                Flexible scheduling to fit your needs.
              </p>
            </div>

            <div>
              <h3 className="uppercase tracking-[0.12em] text-sm font-bold mb-2">
                Last-Minute Signings Welcome
              </h3>
              <p className="text-neutral-300 text-sm leading-6">
                We’re here when you’re in a rush.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}