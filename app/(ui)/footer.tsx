import FooterLink from "./footer-link";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-16 text-lg">
      <p className="mb-6">
        Ready to elevate your team or project? Reach out to me at{" "}
        <a
          className="underline hover:no-underline active:no-underline"
          href="mailto:farlineagan@gmail.com"
        >
          farlineagan@gmail.com
        </a>{" "}
        and let{"'"}s make it happen!
      </p>

      <FooterLink label="Github" refURI="https://github.com/EaganFarlin" />
      <FooterLink label="Youtube" refURI="https://youtube.com/@EaganFarlin" />

      <p>Made with Next.js 14</p>
    </footer>
  );
};

export default Footer;
