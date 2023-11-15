import FooterLink from "@/app/footer-link";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-16 text-lg">
      <FooterLink refURI="https://www.linkedin.com/in/eagan-farlin-b6848429b/">
        LinkedIn
      </FooterLink>
      <FooterLink refURI="https://github.com/EaganFarlin">Github</FooterLink>
      <FooterLink refURI="https://youtube.com/@EaganFarlin">YouTube</FooterLink>

      <p className="text-gray-500">
        Made with Next.js 14, React.js, Tailwind CSS
      </p>
    </footer>
  );
}
