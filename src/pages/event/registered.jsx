import HeaderComp from "@/components/HeaderComp";
import FooterComp from "@/components/FooterComp";
import MakeEvent from "@/components/event/MakeEvent";
import EventsRegisteredComp from "@/components/event/Registered";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { LoadingContext } from "@/context/LoadingContext";
import { toast } from "react-toastify";
import NoDataFound from "@/components/event/NoDataFound";
import Carousel from "@/components/home/Carousel";

export default function EventsRegistered() {
  const [data, setData] = useState(undefined);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const sildes = [
    "/home/event_image.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
    "https://i.ibb.co/yg7BSdM/4.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  // useEffect(() => {
  //   let isMounted = true;

  //   const getDataEventRegistered = () => {
  //     setIsLoading(true);
  //     axios
  //       .get(process.env.NEXT_PUBLIC_BACKEND_URL + "/admin/events", {
  //         headers: {
  //           Authorization: "Bearer " + Cookies.get("Auth"),
  //         },
  //       })
  //       .then((res) => {
  //         if (isMounted) {
  //           setData(res.data.userEvents);
  //           toast.success("Sukses Mendapatkan Data!", {
  //             zIndex: 9999,
  //           });
  //           console.log(res.data);
  //         }
  //       })
  //       .catch((err) => {
  //         if (err.response.data.message === "No user events found!") {
  //           if (isMounted) {
  //             setData(undefined);
  //             toast.error("Tidak Ada Data!", {
  //               zIndex: 9999,
  //             });
  //           }
  //         } else {
  //           toast.error("Gagal Mendapatkan Data!", {
  //             zIndex: 9999,
  //           });
  //           console.log(err);
  //         }
  //       })
  //       .finally(() => {
  //         if (isMounted) {
  //           setIsLoading(false);
  //         }
  //       });
  //   };

  //   getDataEventRegistered();

  //   return () => {
  //     // Clean up to set isMounted to false when the component is unmounted
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-100">
      <HeaderComp />
      <div className="mt-[160px]">
        <h1 className="text-black text-center font-bold text-[36px]">
          Event Registered
        </h1>
      </div>

      {data === undefined ? (
        <div className="min-w-full bg-red-500">
          <Carousel>
            {sildes.map((data) => (
              <img src={data} className="min-w-full h-[800px]" />
            ))}
          </Carousel>
        </div>
      ) : (
        data.map((dataEventRegistered, index) => {
          return (
            <EventsRegisteredComp
              key={index}
              title={dataEventRegistered.eventId.eventName}
              description={dataEventRegistered.eventId.eventDescription}
              code={dataEventRegistered.code}
              name={dataEventRegistered.userId.name}
              email={dataEventRegistered.userId.email}
              imagePath={dataEventRegistered.paymentFile}
            />
          );
        })
      )}
      <MakeEvent />
      <FooterComp />
    </div>
  );
}
