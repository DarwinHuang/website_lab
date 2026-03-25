import React from 'react';

// 內建 SVG 圖示組件，避免使用第三方庫
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const BaseballIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M18 12c0 3.31-2.69 6-6 6" />
    <path d="M6 12c0-3.31 2.69-6 6-6" />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-orange-200">
      {/* Header / Navigation */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-orange-700">My Website</h1>
          <div className="space-x-6 text-sm font-medium text-stone-500">
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#interests" className="hover:text-orange-600 transition-colors">Interests</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <section className="mb-20 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
            Welcome to my personal space
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-stone-900 mb-6 leading-tight">
            Hi, I'm <span className="text-orange-600">R14921A05 Fu-Hsiang Huang </span>.
          </h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl">
            I am a first-year graduate student in the Department of Electrical Engineering at 
            National Taiwan University (NTU), specializing in cybersecurity.
          </p>
        </section>
        
        <div className="mb-20">
          <div className="w-full h-64 md:h-96 rounded-3xl bg-orange-100 overflow-hidden relative group border-4 border-white shadow-xl">

            <img 
              //src="images/profile.jpg"
              // src={`${import.meta.env.BASE_URL}images/profile.jpg`} 
              src="images/profile.jpg"
              alt="Fu-Hsiang Huang" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                e.target.parentElement.innerHTML = '<span className="text-orange-300 font-medium italic">Your Profile Photo Here</span>';
              }}
            />
          </div>
        </div> 
        
        
        {/* Introduction Section */}
        <section id="about" className="mb-20">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">About Me</h3>
            <p className="text-lg text-stone-600 leading-relaxed italic border-l-4 border-orange-400 pl-6">
              "Hi, I'm Fu-Hsiang Huang. I am a first-year graduate student in the Department of Electrical Engineering at National Taiwan University (NTU), specializing in Cybersecurity. Outside of my studies, I enjoy reading and following sports—I’m a huge fan of the LA Dodgers. I am currently focused on honing my web development skills and hope to gain a solid foundation in network security and cyber warfare through this course. Welcome to my website!"
            </p>
          </div>
        </section>

        {/* Cards Section: Interests & Goals */}
        <section id="interests" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-stone-100 rounded-2xl hover:bg-orange-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <ShieldIcon />
            </div>
            <h4 className="font-bold text-stone-900 mb-2">Specialization</h4>
            <p className="text-stone-600 text-sm">Focused on Cybersecurity, network security, and cyber warfare strategies.</p>
          </div>

          <div className="p-6 bg-stone-100 rounded-2xl hover:bg-orange-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <BaseballIcon />
            </div>
            <h4 className="font-bold text-stone-900 mb-2">Hobbies</h4>
            <p className="text-stone-600 text-sm">A passionate reader and a huge supporter of the LA Dodgers.</p>
          </div>

          <div className="p-6 bg-stone-100 rounded-2xl hover:bg-orange-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <BookIcon />
            </div>
            <h4 className="font-bold text-stone-900 mb-2">Current Goal</h4>
            <p className="text-stone-600 text-sm">Honing web development skills and building a strong foundation in IT security.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-10 mt-10">
        <div className="max-w-4xl mx-auto px-6 text-center text-stone-400 text-sm">
          <p>© 2026 Fu-Hsiang Huang. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;