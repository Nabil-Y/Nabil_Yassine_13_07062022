import { Ifeature } from "../types";
import Hero from "../components/Home/Hero";
import Feature from "../components/Home/Feature";
import chat from "../assets/icon-chat.png";
import money from "../assets/icon-money.png";
import security from "../assets/icon-security.png";

const Home = () => {
  const features: Ifeature[] = [
    {
      icon: chat,
      altIcon: "chat icon",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. ",
    },
    {
      icon: money,
      altIcon: "money icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be! ",
    },
    {
      icon: security,
      altIcon: "security icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe. ",
    },
  ];
  return (
    <main>
      <Hero />
      <div className="flex flex-col home:flex-row">
        {features.map((item) => (
          <Feature
            icon={item.icon}
            altIcon={item.altIcon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
