import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>

      <div className="bg-white shadow-md rounded-xl p-8 space-y-6">

        {/* Email */}
        <div className="flex items-center gap-4">
          <Mail className="text-blue-600" />
          <p className="text-gray-700">pamnichapatr@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <Phone className="text-green-600" />
          <p className="text-gray-700">081-323-6464</p>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-green-600" />
          <p className="text-gray-700">Bangkok/Nonthaburi</p>
        </div>

        {/* Social */}
        <div className="flex gap-4 pt-4">

          <a
            href="https://github.com/paminicha"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/pamnichapatr-uth-286110279"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

        </div>

      </div>

    </div>
  );
}