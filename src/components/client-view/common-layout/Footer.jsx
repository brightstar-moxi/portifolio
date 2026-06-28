"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-32">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Left */}

          <div className="max-w-md">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center font-bold text-xl">
                B
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Bright
                  <span className="text-orange-500">
                    star
                  </span>
                </h2>

                <p className="text-zinc-400 text-sm">
                  Full Stack Developer
                </p>

              </div>

            </div>

            <p className="mt-6 text-zinc-400 leading-8">
              I build modern, scalable and user-focused web applications
              with clean architecture and exceptional user experience.
            </p>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-lg font-semibold mb-6">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/brightstar-moxi/"
                className="w-12 h-12 rounded-xl bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="mailto:brightstartech11.com"
                className="w-12 h-12 rounded-xl bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Brightstar. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-500">

            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

            Available for freelance & full-time opportunities

          </div>

        </div>

      </div>

    </footer>
  );
}