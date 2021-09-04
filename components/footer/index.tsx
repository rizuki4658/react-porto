import { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className="bg-dark py-8">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-center">
            <img
              src="/vercel.svg"
              className="mb-10 mx-auto"
              width="200"
            />

            <div className="mb-2 text-white text-xl">
              Follow Me
            </div>

            <div className="mb-6 flex justify-center items-center -mx-4">
              <div className="px-4">
                <a href="https://www.instagram.com/rizkikhair/">
                  <img width="40"/>
                </a>
              </div>
              <div className="px-4">
                <a href="https://github.com/rizuki4658">
                  <img width="40"/>
                </a>
              </div>
              <div className="px-4">
                <a href="https://www.linkedin.com/in/rizki-khair-0b5a67186/">
                  <img width="40"/>
                </a>
              </div>
            </div>

            <div className="text-white text-xs">
              Copyright ©2021 All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
