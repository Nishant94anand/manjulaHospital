"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Menu, Phone, X } from "lucide-react";
import { navigation, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span><MapPin size={13} aria-hidden="true" /> Near B.R.B. College, Samastipur, Bihar</span>
          <span className="utility-right">A thoughtful healthcare experience, close to home</span>
        </div>
      </div>
      <div className="nav-shell">
        <div className="container main-nav">
          <Link href="/" className="brand" aria-label="Dr. Manjula Hospital, homepage" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true"><span className="brand-plus">+</span></span>
            <span className="brand-copy"><strong>Dr. Manjula</strong><small>HOSPITAL <i>·</i> SAMASTIPUR</small></span>
          </Link>
          <nav className="desktop-navigation" aria-label="Primary navigation">
            {navigation.map((link) => (
              <Link key={link.href} href={link.href} className={pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/")) ? "nav-link is-active" : "nav-link"}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={site.phoneHref} className="nav-contact"><Phone size={15} /> <span>Call reception</span><ArrowUpRight size={15} /></a>
          <button type="button" className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={pathname === link.href ? "is-active" : ""}>{link.label}<ArrowUpRight size={16} /></Link>)}
            <a href={site.phoneHref} onClick={() => setOpen(false)}><Phone size={16} /> Call reception</a>
          </nav>
        )}
      </div>
    </header>
  );
}
