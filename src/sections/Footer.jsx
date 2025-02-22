const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>All copyrights reserved</p>
        <p>|</p>
        <p>Olawale Davidson Awokoya</p>
      </div>

      <div className="flex gap-3">
      <a
            href="https://github.com/Davidson3556"
            download
            className="social-icon">
        
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
            href="https://www.linkedin.com/in/olawaedavidson"
            download
            className="social-icon">
        
          <img src="/assets/linkedin2.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
        <a
            href="https://twitter.com/awokoyad"
            download
            className="social-icon">
        
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        
      </div>

      <p className="text-white-500">© 2025 Awokoya Olawale. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
