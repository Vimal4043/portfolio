import { CONTACT } from '../utils/data'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-sky-400/20 bg-linear-to-r from-slate-950/95 via-slate-950/90 to-blue-950/90 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-end">
        <div>
          <h3 className="font-display text-3xl font-semibold text-sky-400 sm:text-4xl">
            Vimal Kumar
          </h3>
          <p className="mt-2 text-xl text-slate-300">MERN Stack Developer</p>
        </div>

        <div className="text-left md:text-right">
          <p className="text-base text-slate-300">
            © {year} Vimal Kumar. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Crafted with precision and powered by modern web technologies.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
            {CONTACT.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700/80 px-3 py-1.5 text-sm text-slate-300 transition hover:border-sky-400/60 hover:text-sky-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
