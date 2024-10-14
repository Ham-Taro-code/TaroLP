import React from 'react';
import { Github, Twitter } from 'lucide-react';

const projects = [
  { title: 'AI-Powered Chatbot', description: 'Azure OpenAIを用いたビジネス向け社内用チャットボットの構築支援' },
  { title: 'Machine Learning Pipeline', description: 'VertexAIを用いた機械学習パイプラインの構築' },
  { title: 'Python Web API', description: 'FastAPIを用いたWebサービスのバックエンドの開発' },
];

const skills = [
  {
    title: 'プログラミング言語',
    items: ['Python', 'TypeScript', 'JavaScript', 'Rust']
  },
  {
    title: 'フレームワーク',
    items: ['React', 'Next.js', 'FastAPI']
  },
  {
    title: 'ツール・ライブラリ',
    items: ['NumPy', 'Pandas', 'TensorFlow', 'PyTorch', 'Vite']
  },
  {
    title: 'クラウドプラットフォーム',
    items: ['Azure', 'Google Cloud']
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Taro Developer</h1>
          <nav>
            <a href="#about" className="text-gray-600 hover:text-gray-800 px-3 py-2">About</a>
            {/* <a href="#portfolio" className="text-gray-600 hover:text-gray-800 px-3 py-2">Portfolio</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-800 px-3 py-2">Testimonials</a> */}
            <a href="#contact" className="text-gray-600 hover:text-gray-800 px-3 py-2">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="parallax-hero h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Crafting Intelligent Solutions</h2>
            <p className="text-xl mb-8">Innovative Software Engineer Specializing in AI & Programming</p>
            <a href="#contact" className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">Get in Touch</a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="../public/images/profile.jpg" alt="TaroDeveloper" className="rounded-full w-64 h-64 object-cover mx-auto" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-3xl font-bold mb-4">About Me</h3>
              <p className="text-gray-600 mb-6">
                私はバックエンドとAIを中心とした開発を行っているソフトウェアエンジニアです。
                Pythonを用いた開発で7年以上の経験を持ちます。直近ではフロントエンド周りの開発にも携わりフルスタックエンジニアを目指しています。
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Ham-Taro-code" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                  <Github size={24} />
                </a>
                <a href="https://x.com/hamutaro_ai" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                  <Twitter size={24} />
                </a>
                {/* <a href="mailto:john@example.com" className="text-gray-600 hover:text-gray-800">
                  <Mail size={24} />
                </a> */}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="parallax-portfolio py-20">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-8 text-center text-black">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-bold mb-2">{skillGroup.title}</h4>
                  <ul>
                    {skillGroup.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="parallax-contact py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Bring Your Ideas to Life?</h3>
            <p className="text-xl mb-8 text-white">Let's collaborate on your next project!</p>
            <a href="https://x.com/hamutaro_ai" className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">Contact Me</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Taro Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;