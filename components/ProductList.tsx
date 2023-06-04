import {
  Accessories,
  DacsAndAmps,
  Headphones,
  HiResAudioPlayers,
  HomeAudio,
  InEars,
  Wireless,
} from ".";

const Products = ({ category }: { category: string }) => {
  const URI = decodeURIComponent(category);

  switch (URI) {
    case "headphones": {
      return <Headphones />;
    }
    case "in-ears": {
      return <InEars />;
    }
    case "wireless": {
      return <Wireless />;
    }
    case "dacs & amps": {
      return <DacsAndAmps />;
    }
    case "hi-res audio players": {
      return <HiResAudioPlayers />;
    }
    case "accessories": {
      return <Accessories />;
    }
    case "home audio": {
      return <HomeAudio />;
    }
    default:
      return <div>{decodeURIComponent(category)}</div>;
  }
};

export default Products;
