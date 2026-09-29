"use client";

import { useCallback, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Rooms from "./Rooms";
import BookingModal from "./BookingModal";
import Experiences from "./Experiences";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Location from "./Location";

export default function Site() {
  const [search, setSearch] = useState(null);
  const [activeRoom, setActiveRoom] = useState(null);

  const handleCheckAvailability = useCallback((details) => {
    setSearch(details);
    requestAnimationFrame(() => {
      document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  const closeModal = useCallback(() => setActiveRoom(null), []);

  return (
    <>
      <Navbar />
      <main>
        <Hero onCheckAvailability={handleCheckAvailability} />
        <Rooms search={search} onReserve={setActiveRoom} />
        <Experiences />
        <Gallery />
        <Testimonials />
      </main>
      <Location />
      {activeRoom && (
        <BookingModal room={activeRoom} search={search} onClose={closeModal} />
      )}
    </>
  );
}
