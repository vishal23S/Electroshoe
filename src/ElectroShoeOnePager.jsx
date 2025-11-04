import React, { useState, useEffect } from 'react';

// ElectroShoe: The Idea That Refused to Die
// Clean, minimalist layout with section subtitles for clarity.

export default function ElectroShoeOnePager() {
  const [revealStep, setRevealStep] = useState(0);

  useEffect(() => {
    const timers = [400, 1000, 1800, 2400, 3000, 3600];
    timers.forEach((t, i) => setTimeout(() => setRevealStep(i + 1), t));
    return () => {};
  }, []);

  const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-[#1c1c1c] 
mb-1">{title}</h2>
      <p className="text-sm text-[#5b5b5b]">{subtitle}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#2f3437] font-sans 
antialiased">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <header className="flex items-center justify-between mb-12">
          <div>
            <div className="text-sm text-[#4b4b4b]">ElectroShoe</div>
            <div className="text-xs text-[#777]">by Siddharth 
Mandala</div>
          </div>
          <nav className="text-sm text-[#777] flex gap-6">
            <a href="#story" className="hover:text-black">Story</a>
            <a href="#tech" className="hover:text-black">Tech</a>
            <a href="#law" className="hover:text-black">Law</a>
            <a href="#impact" className="hover:text-black">Impact</a>
            <a href="#future" className="hover:text-black">Future</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <main className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight 
mb-4 text-[#1c1c1c]">ElectroShoe: The Idea That Refused to Die</h1>
          <p className="text-lg text-[#3a3a3a] mb-6 max-w-xl mx-auto">A 
story of invention that ran faster than the law: a founder who chose 
strategic dormancy over premature release.</p>
          <p className="text-sm text-[#6b6b6b] max-w-md mx-auto">Built for 
protection: Waiting for its moment.</p>
        </main>

        {/* Story */}
        <section id="story" className="mb-16">
          <SectionTitle title="The Beginning" subtitle="How the idea of 
ElectroShoe was born from necessity and conviction." />
          <p className="text-sm text-[#2f3437] leading-relaxed mb-4">I 
built ElectroShoe as a teenager: angry, driven, and unwilling to accept 
that fear was normal for women in public spaces. The idea was radical but 
simple: convert motion into defence. Each step generated charge; the shoe 
stored it, then discharged it on impact to deter an attacker. A loop of 
motion, energy, and self-protection.</p>
          <p className="text-sm text-[#2f3437] 
leading-relaxed">Technically, it worked. Too well. At 20–30kV and microamp 
currents, it created real electro-muscular disruption. That’s when the 
hard truth surfaced: innovation is not judged by possibility; it is judged 
by the system it threatens.</p>
        </section>

        {/* Tech */}
        <section id="tech" className="mb-16">
          <SectionTitle title="Engineering the Edge" subtitle="The science 
and circuitry behind self-charging defence footwear." />
          <p className="text-sm text-[#2f3437] leading-relaxed mb-3">The 
architecture combined a piezoelectric energy harvesting array, 
high-voltage step-up circuitry, and accelerometer-driven impact detection. 
A miniature control system regulated voltage output and time-locked 
discharges to reduce lethality. The design was minimal, self-charging, and 
independent of external power.</p>
          <p className="text-sm text-[#2f3437] leading-relaxed">But every 
electrical defence system walks a thin line between deterrence and damage. 
Human physiology isn’t deterministic; current that disables one person can 
harm another. Under specific cardiac conditions—particularly ventricular 
fibrillation thresholds around 50–100 mA sustained for fractions of a 
second—such current could trigger fatal arrhythmia. In other words, the 
same waveform that protects could, under the wrong biological timing, 
kill. That risk demanded more than engineering: it demanded 
governance.</p>
        </section>

        {/* Law */}
        <section id="law" className="mb-16">
          <SectionTitle title="Law, Regulation & Reality" subtitle="Where 
innovation collided with the legal framework of India’s Arms Act." />
          <p className="text-sm text-[#2f3437] leading-relaxed mb-3">The 
<strong>Arms Act of 1959</strong> governs weapon classification in India. 
It explicitly recognises projectile tasers used by enforcement, but has no 
framework for contact-based electrical defence wearables. Our current 
iteration of the product—classified as a direct-contact electrical 
discharge device—does not qualify for civilian ownership or commercial 
sale under this act. It remains outside the permissible category of 
non-projectile electrical deterrents, making any attempt at consumer 
deployment legally non-compliant.</p>
          <p className="text-sm text-[#2f3437] leading-relaxed">When 
COVID-19 struck, the disruption extended far beyond health. Global 
manufacturing came to a standstill. Our piezoelectric transducer suppliers 
in East Asia halted operations. Indian PCB fabrication labs shifted to 
essential goods. Customs delays increased lead times from weeks to months. 
Component prices spiked by over 40%, and international logistics became 
unpredictable. Even certification labs, required for electrical safety and 
human testing, were shut down. In short: the entire validation and 
production pipeline froze. The choice became clear: push forward 
irresponsibly or pause intentionally. I paused. I licensed parts of the IP 
to preserve its potential until legality and safety could coexist.</p>
        </section>

        {/* Impact */}
        <section id="impact" className="mb-16">
          <SectionTitle title="Impact" subtitle="The reach and resonance 
of a prototype that became a global movement." />
          <p className="text-sm text-[#2f3437] 
leading-relaxed">ElectroShoe resonated far beyond its prototype. The 
project reached more than 20 million shares across the internet, inspiring 
global dialogue about women’s safety and innovation. Two schoolgirls in 
Pakistan built their own version after discovering the concept, proving 
that ideas transcend borders faster than markets. It was recognised by 
India’s Education Minister, featured in over 300 international media 
outlets, and shared on a TEDx stage — not as celebration, but as 
validation that technological intent can inspire cultural movement.</p>
        </section>

        {/* Future */}
        <section id="future" className="mb-16">
          <SectionTitle title="The Future" subtitle="Where ElectroShoe 
fits into the next generation of predictive and defence tech." />
          <p className="text-sm text-[#2f3437] leading-relaxed 
mb-3">ElectroShoe didn’t fail; it exposed a gap between innovation and 
governance. It revealed how technology that protects can also challenge 
existing definitions of power and safety.</p>
          <p className="text-sm text-[#2f3437] leading-relaxed mb-3">Right 
now, my work focuses on predictive technologies that anticipate risk 
before it emerges, and on building strategic ventures that assist the 
Indian government across both defence and civilian innovation. This 
includes research in behavioural sensing, AI-driven situational awareness, 
and systems designed to reduce response time in crisis scenarios. I’m 
learning what it takes to align technology with state-scale impact: legal 
clarity, institutional cooperation, and scalable design.</p>
          <p className="text-sm text-[#2f3437] leading-relaxed mb-3">When 
ElectroShoe returns, it will come back through the right gates—with 
compliance, medical validation, and state partnership. The next version 
won’t fight the law: it will be built with it. It will not be a product; 
it will be <em>infrastructure</em>.</p>
          <p className="text-sm text-[#2f3437] italic">Some ideas are not 
dead: they are waiting for the world to evolve.</p>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-10 border-t border-[#e5e5e5] 
text-center">
          <SectionTitle title="Contact" subtitle="Reach out for 
collaborations or strategic partnerships." />
          <p className="text-sm text-[#2f3437]">For collaborations, 
partnerships, or legal advisories: <a 
href="mailto:siddharth.eth@gmail.com" 
className="underline">siddharth.eth@gmail.com</a></p>
          <p className="text-xs text-[#6b6b6b] mt-3">Referenced Interview: 
<a 
href="https://medium.com/@vivienneschrder/no-money-hungry-and-eager-to-succeed-6-interview-tech-startup-culture-5007d5c6c843" 
target="_blank" rel="noreferrer" className="underline">Medium: Tech 
Startup Culture</a></p>
        </section>

        <footer className="pt-6 text-center text-xs text-[#7a7a7a]">
          <div>© {new Date().getFullYear()} ElectroShoe: The Idea That 
Refused to Die.</div>
        </footer>
      </div>
    </div>
  );
}

