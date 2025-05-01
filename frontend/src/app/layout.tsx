import Navbar from './components/Navbar';
import './globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div>
        <Navbar />
        <main>{children}</main>
      </div>
      </body>
    </html>
  );
};

export default Layout;
