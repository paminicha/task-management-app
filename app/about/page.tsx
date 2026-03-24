import {
  PenLine,
  Filter,
  LayoutDashboard,
  Smartphone,
  Database,
  Layers,
  CheckCircle,
  Component,
  FishingHook,
} from "lucide-react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

      {/* HERO */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Personal Task Management Dashboard
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          A personal productivity web application designed to help users
          manage daily tasks through an interactive dashboard interface.
        </p>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="bg-white/30 shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>

        <p className="leading-relaxed">
          The Personal Task Management Dashboard is a prototype web application
          designed to help users organize and monitor daily tasks. The system
          allows users to create, edit, and track tasks while visualizing them
          through a simple dashboard interface.
        </p>

        <p className="mt-4">
          The application focuses on front-end development practices including
          component-based architecture, responsive design, and client-side data
          persistence using browser localStorage.
        </p>
      </section>

      {/* FEATURES */}
      <section className="rounded-xl shadom-sm p-8 border-gray-400/30 border">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="flex items-start gap-3">
            <PenLine className="text-blue-600 mt-1" />
            <p>Create, edit, and delete tasks</p>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="text-blue-600 mt-1" />
            <p>Task status tracking (To-Do / In Progress / Done)</p>
          </div>

          <div className="flex items-start gap-3">
            <Filter className="text-blue-600 mt-1" />
            <p>Filter tasks by date or status</p>
          </div>

          <div className="flex items-start gap-3">
            <LayoutDashboard className="text-blue-600 mt-1" />
            <p>Interactive dashboard layout</p>
          </div>

          <div className="flex items-start gap-3">
            <Smartphone className="text-blue-600 mt-1" />
            <p>Responsive design for multiple screen sizes</p>
          </div>

          <div className="flex items-start gap-3">
            <Database className="text-blue-600 mt-1" />
            <p>Data persistence using browser LocalStorage</p>
          </div>

        </div>
      </section>

      {/* TECH STACK */}
        <section className="bg-gray-50/30 rounded-xl shadow-sm p-8 border-gray-400/30 border">
            <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="flex flex-col items-center gap-3 p-6 bg-white/30 rounded-xl shadow hover:shadow-lg transition">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    className="w-8 h-8"
                />
                <p className="text-sm font-medium">Next.js</p>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 bg-white/30 rounded-xl shadow hover:shadow-lg transition">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-8 h-8"
                />
                <p className="text-sm font-medium">React</p>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 bg-white/30 rounded-xl shadow hover:shadow-lg transition">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                    className="w-8 h-8"
                />
                <p className="text-sm font-medium">Tailwind CSS</p>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 bg-white/30 rounded-xl shadow hover:shadow-lg transition">
                <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    className="w-8 h-8"
                />
                <p className="text-sm font-medium">Java Script</p>
                </div>

            </div>
        </section>

      {/* WHAT I LEARNED */}
      <section className="rounded-xl shadow-sm p-8 border-gray-400/30 border">
        <div className="grid md:grid-cols-3 gap-8">
            <div>
                <h2 className="text-2xl font-semibold">What I Learned</h2>
                <p className="text-gray-500 mt-2">
                    Key front-end concepts practiced while building this project.
                </p>
            </div>

            <div className="md:col-span-2 flex flex-col gap-6">
                <div className="flex items-start gap-3">
                    <Component className="text-green-600 mt-1" />
                    <p>Building reusable React components and functions</p>
                </div>

                <div className="flex items-start gap-3">
                    <FishingHook className="text-green-600 mt-1" />
                    <p>Managing state with React hooks</p>
                </div>

                <div className="flex items-start gap-3">
                    <Filter className="text-green-600 mt-1" />
                    <p>Implementing task filtering logic</p>
                </div>

                <div className="flex items-start gap-3">
                    <Database className="text-green-600 mt-1" />
                    <p>Implementing client-side data persistence with LocalStorage</p>
                </div>
            </div>

        </div>

      </section>

    </div>
  );
}