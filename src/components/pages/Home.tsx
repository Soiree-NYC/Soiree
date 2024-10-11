import SlideMenu from "../ui/inputs/SlideMenu";
import Feed from "../ui/cards/Feed";
import SimpleCard from "../ui/cards/SimpleCard";
import Primary from "../ui/buttons/Primary";

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked");
  }
  const items  = [
    <Primary
      label='West Village'
      callback={handleClick}
      bold
    />,
    <Primary
      label='Chelsea'
      callback={handleClick}
      bold
    />,
    <Primary
      label='FIDI'
      callback={handleClick}
      bold
    />,
    <Primary
      label='East Village'
      callback={handleClick}
      bold
    />,
    <Primary
      label='Upper West Side'
      callback={handleClick}
      bold
    />,
    <Primary
      label='SOHO'
      callback={handleClick}
      bold
    />,
    <Primary
      label={`Hell's Kitchen`}
      callback={handleClick}
      bold
    />,
    <Primary
      label='DUMBO'
      callback={handleClick}
      bold
    />,
    <Primary
      label='Prospect Heights'
      callback={handleClick}
      bold
    />,
    <Primary
      label='Meatpacking'
      callback={handleClick}
      bold
    />,
    <Primary
      label='Midtown'
      callback={handleClick}
      bold
    />,
  ];

  const feedItems = [
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
  ];

  return (
    <main className="px-8">
      <SlideMenu items={items} />
      <Feed children={feedItems} />
    </main>
  );
};

export default Home;
