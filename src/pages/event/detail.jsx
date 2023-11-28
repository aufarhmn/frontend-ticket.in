import { useEffect, useState } from "react";
import MakeEvent from "@/components/event/MakeEvent";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/HeaderComp";
import { BsCalendarWeek } from "react-icons/bs";

export default function EventDetail() {
  const eventSelected = localStorage.getItem("selectedEventData");
  const parsedEvent = JSON.parse(eventSelected);
  const ticketPrice = parsedEvent.eventPrice;
  const [buyNow, setBuyNow] = useState(false);
  const [count, setCount] = useState(1);
  const [totalTicketPrice, setTotalTicketPrice] = useState(ticketPrice);
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const handleBuyNow = () => {
    setBuyNow(true);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalTicketPrice(ticketPrice * (count - 1));
    }
  };
  const increment = () => {
    setCount(count + 1);
    setTotalTicketPrice(ticketPrice * (count + 1));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-col items-center  bg-white mt-[200px] w-[450px] sm:w-[630px] lg:w-7/12   mb-[50px] rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
          <img
            src="/home/event_image.png"
            alt="Picture of the author"
            className="w-5/6 px-7 py-10"
          />
        </div>
        <div className="flex flex-col items-start w-full px-[40px] sm:px-[100px] lg:px-[200px]">
          <p className="self-start text-blue-text font-extrabold text-[30px] ">
            {parsedEvent.eventName}
          </p>
          <div className="flex flex-row ">
            <BsCalendarWeek className="text-[30px] text-blue-text font-normal mt-2 min-w-[27px] w-[27px] lg:w-[50px]" />
            <div className="flex flex-col">
              <p className="text-[23px] lg:text-[30px] text-blue-text font-normal ml-2">
                {parsedEvent.eventDate}
              </p>
            </div>
          </div>
          <h1 className="text-[30px] text-blue-text font-normal ml-2 mt-7">
            About Event
          </h1>
          <p className="text-[20px] text-blue-text font-normal ml-2">
            {parsedEvent.eventDescription}
          </p>

          {buyNow ? (
            <div className="text-white self-center  w-1/2 flex flex-col min-w-[400px] bg-blue-text px-10 py-5 mt-10 rounded-xl shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
              <h1 className="text-[#F5167E] text-[30px] font-bold">
                Your Order
              </h1>
              <p className="text-[20px]">
                {IDR.format(parsedEvent.eventPrice)}
              </p>
              <div className="flex justify-end items-center w-full mb-5 mt-10">
                <button
                  onClick={decrement}
                  className="bg-[#F5167E] w-10 h-10 rounded-full text-[23px]"
                >
                  -
                </button>
                <p className="text-[20px] mx-5">{count}</p>
                <button
                  onClick={increment}
                  className="bg-[#F5167E] w-10 h-10 rounded-full text-[23px]"
                >
                  +
                </button>
              </div>
              <div className="w-full h-[1px] bg-white mb-6 opacity-70"></div>
              <div className="flex justify-between">
                <p className="text-[20px]">Total</p>
                <p className="text-[20px]">{IDR.format(totalTicketPrice)}</p>
              </div>
              <button className="bg-[#F5167E] w-1/2 self-center py-2 mt-5 rounded-full text-[17px] lg:text-[23px]">
                BUY TICKET
              </button>
            </div>
          ) : (
            <div className="text-white flex justify-between rounded-xl px-7 py-2 mt-10 items-center bg-blue-text w-full font-bold shadow-[0_25px_50px_-12px_rgba(56,57,157,0.3)]">
              <p className="text-xl">{IDR.format(parsedEvent.eventPrice)}</p>
              <button
                onClick={handleBuyNow}
                className="text-white  w-[120px] bg-[#F5167E] py-3 font-medium  rounded-[100px] hover:opacity-90 "
              >
                Buy Now
              </button>
            </div>
          )}
          <h1 className="text-[30px] text-blue-text font-normal ml-2 mt-20">
            Important
          </h1>
          <p className="text-[20px] text-blue-text font-normal ml-2">
            You will receive E-Ticket after finish your payment
          </p>
          <h1 className="text-[30px] text-blue-text font-normal ml-2 mt-5">
            Something Wrong?
          </h1>
          <p className="text-[20px] text-blue-text font-normal ml-2">
            if problems continue, please contact us at
          </p>
          <button className="text-white mt-5  w-[120px] bg-[#F5167E] py-3 font-light  rounded-[100px] hover:opacity-90 ">
            Contact Us
          </button>
        </div>
      </div>

      <MakeEvent />
      <FooterComp />
    </div>
  );
}
