import Footer from "./Footer";
import Header from "./Header";

const Dashboard = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Dashboard;
