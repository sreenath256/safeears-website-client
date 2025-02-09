import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = ({ closeCart }) => {
  const navigate = useNavigate();

  const handleGoToShop = () => {
    closeCart(); // Function to toggle off the cart
    navigate("/shop"); // Adjust "/shop" to your shop page route
  };

  return (
    <div className="flex flex-col items-center object-contain justify-center py-10 h-full">
      {/* SVG Icon with reduced size */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        width="150" // Adjusted width
        height="125" // Adjusted height
        viewBox="0 0 896 747.97143"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>empty_cart</title>
            <path
            d="M193.634,788.75225c12.42842,23.049,38.806,32.9435,38.806,32.9435s6.22712-27.47543-6.2013-50.52448-38.806-32.9435-38.806-32.9435S181.20559,765.7032,193.634,788.75225Z"
            transform="translate(-152 -76.01429)"
          fill="rgb(248, 177, 51)"
        />
        <path
          d="M202.17653,781.16927c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92679-50.17653-8.57291S152,772.59636,152,772.59636,179.73811,767.66958,202.17653,781.16927Z"
          transform="translate(-152 -76.01429)"
          fill="#00756b"
        />
        <rect x="413.2485" y="35.90779" width="140" height="2" fill="#f2f2f2" />
        <rect
          x="513.2485"
          y="37.40779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="452.2485"
          y="37.40779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="484.2485"
          y="131.90779"
          width="140"
          height="2"
          fill="#f2f2f2"
        />
        <rect
          x="522.2485"
          y="113.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="583.2485"
          y="113.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="670.2485"
          y="176.90779"
          width="140"
          height="2"
          fill="#f2f2f2"
        />
        <rect
          x="708.2485"
          y="158.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="769.2485"
          y="158.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="656.2485"
          y="640.90779"
          width="140"
          height="2"
          fill="#f2f2f2"
        />
        <rect
          x="694.2485"
          y="622.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="755.2485"
          y="622.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="417.2485"
          y="319.90779"
          width="140"
          height="2"
          fill="#f2f2f2"
        />
        <rect
          x="455.2485"
          y="301.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="516.2485"
          y="301.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="461.2485"
          y="560.90779"
          width="140"
          height="2"
          fill="#f2f2f2"
        />
        <rect
          x="499.2485"
          y="542.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="560.2485"
          y="542.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="685.2485"
          y="487.90779"
          width="140"
          height="2"
          fill="#f2f2f2"
        />
        <rect
          x="723.2485"
          y="469.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <rect
          x="784.2485"
          y="469.90779"
          width="2"
          height="18.5"
          fill="#f2f2f2"
        />
        <polygon
          points="362.06 702.184 125.274 702.184 125.274 700.481 360.356 700.481 360.356 617.861 145.18 617.861 134.727 596.084 136.263 595.347 146.252 616.157 362.06 616.157 362.06 702.184"
          fill="#2f2e41"
        />
        <circle cx="156.78851" cy="726.03301" r="17.88673" fill="#3f3d56" />
        <circle cx="333.10053" cy="726.03301" r="17.88673" fill="#3f3d56" />
        <circle cx="540.92726" cy="346.153" r="11.07274" fill="#3f3d56" />
        <path
          d="M539.38538,665.76747H273.23673L215.64844,477.531H598.69256l-.34852,1.10753Zm-264.8885-1.7035H538.136l58.23417-184.82951H217.95082Z"
          transform="translate(-152 -76.01429)"
          fill="#2f2e41"
        />
        <polygon
          points="366.61 579.958 132.842 579.958 82.26 413.015 418.701 413.015 418.395 413.998 366.61 579.958"
          fill="#f2f2f2"
        />
        <polygon
          points="451.465 384.7 449.818 384.263 461.059 341.894 526.448 341.894 526.448 343.598 462.37 343.598 451.465 384.7"
          fill="#2f2e41"
        />
        <rect
          x="82.2584"
          y="458.58385"
          width="345.2931"
          height="1.7035"
          fill="#2f2e41"
        />
        <rect
          x="101.45894"
          y="521.34377"
          width="306.31852"
          height="1.7035"
          fill="#2f2e41"
        />
        <rect
          x="254.31376"
          y="402.36843"
          width="1.7035"
          height="186.53301"
          fill="#2f2e41"
        />
        <rect
          x="385.55745"
          y="570.79732"
          width="186.92877"
          height="1.70379"
          transform="translate(-274.73922 936.23495) rotate(-86.24919)"
          fill="#2f2e41"
        />
        <rect
          x="334.45728"
          y="478.18432"
          width="34.67449"
          height="1.7035"
          fill="#2f2e41"
        />
      </svg>
      <h2 className="mt-6 text-2xl font-semibold text-gray-700">
        Your cart is empty!
      </h2>
      <button
        className="mt-4 px-4 py-2 text-white bg-secondary rounded hover:bg-secondary-hover"
        onClick={handleGoToShop}
      >
        Go to Shop
      </button>
    </div>
  );
};

export default EmptyCart;
