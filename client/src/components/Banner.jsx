import bannerImg from "/images/home/banner.png";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc]-100%">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4a4a4a]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
        {/* image */}
        <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;