import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return <section className="not-found"><div className="container"><span className="not-found-number">404</span><h1>We couldn&apos;t find that page.</h1><p>Let&apos;s get you back to something helpful.</p><Link href="/" className="button button-primary"><Home size={17}/> Back to homepage <ArrowLeft size={16}/></Link></div></section>;
}
