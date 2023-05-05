import Button from "./Button";

const Card = () => {
  return (
    <div className="card">
      <img
        src="/img/illustration-hero.svg"
        alt="Illustraion"
        className="w-full md:h-60"
      />

      <h1 className="font-black text-2xl mt-7 md:mt-10">Order Summary</h1>
      <p className="text-gray-500 w-10/12 mx-auto mt-6 md:mt-8">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="plan-container">
        <img src="/img/icon-music.svg" alt="music note icon" />
        <div>
          <h2 className="font-bold">Annual Plan</h2>
          <span className="text-gray-500">$59.99/year</span>
        </div>
        <span className="text-accent underline hover:cursor-pointer">
          Change
        </span>
      </div>

      <Button />

      <h3 className="font-bold text-gray-500 mt-6 md:mt-9 hover:cursor-pointer">
        Cancel Order
      </h3>
    </div>
  );
};

export default Card;
