import { useState, useEffect } from "react";
import { useBookYourCourtContext } from "../../context/BookYourCourtContext";

export const UseStateCart = ({ court }) => {
  const [cartState, setCartState] = useState(true);
  const { bookCourt, setBookCourt } = useBookYourCourtContext();

  useEffect(() => {
    console.log(bookCourt);
  }, [bookCourt]);

  function handleCart() {
    if (cartState == true) {
      setCartState(false);
      const newCourt = {
        timecourt: court.id,
        state: "Pending",
        fkCourt: court.fk_court,
        description: court.description
      };
      setBookCourt((prevBookCourt) => ({
        ...prevBookCourt,
        courts: [...prevBookCourt.courts, newCourt],
      }));
    } else {
      setCartState(true);

      setBookCourt((prevBookCourt) => ({
        ...prevBookCourt,
        courts: prevBookCourt.courts.filter(
          (item) => item.timecourt !== court.court.id
        ),
      }));
    }
  }

  return {
    cartState,
    handleCart,
  };
};
