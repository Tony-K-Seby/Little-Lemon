const pages = new Map();
pages.set("home", { name: "Home", path: "/", anchorable: true });
pages.set("about", { name: "About", path: "#", anchorable: true });
pages.set("menu", { name: "Menu", path: "#", anchorable: true });
pages.set("bookings", {
  name: "Reservations",
  path: "/bookings",
  anchorable: true,
});
pages.set("confirmedBooking", {
  name: "Confirmed Booking",
  path: "/confirmed-booking",
  anchorable: false,
});
pages.set("orderOnline", {
  name: "Order Online",
  path: "#",
  anchorable: true,
});
pages.set("login", { name: "Login", path: "#", anchorable: true });

export default pages;
