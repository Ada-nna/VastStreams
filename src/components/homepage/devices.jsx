import React from "react";
import Categories from "./categories.jsx";
import DeviceCards from "./DeviceCards.jsx";
import Smartphone from "../../assets/devices/smartphone.png";
import Tablet from "../../assets/devices/tablet.png";
import TV from "../../assets/devices/smart-tv.png";
import Laptop from "../../assets/devices/laptop.png";
import Gaming from "../../assets/devices/gaming.png";
import Headset from "../../assets/devices/headset.png";

const devices = () => {
  return (
    <div>
      <div className="pb-5 px-[100px] mt-[11rem]">
        <Categories
          title="We provide you streaming experience across various devices"
          details="With VastStreams, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        />
      </div>

      <div className="px-[100px] grid grid-cols-3 gap-y-[30px] mt-[3rem]">
        <DeviceCards
          icon={Smartphone}
          title="Smartphones"
          details="VastStreams is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <DeviceCards
          icon={Tablet}
          title="Tablet"
          details="VastStreams is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <DeviceCards
          icon={TV}
          title="Smart TV"
          details="VastStreams is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <DeviceCards
          icon={Laptop}
          title="Laptops"
          details="VastStreams is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <DeviceCards
          icon={Gaming}
          title="Gaming Consoles"
          details="VastStreams is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <DeviceCards
          icon={Headset}
          title="VR Headsets"
          details="VastStreams is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
      </div>
    </div>
  );
};

export default devices;
