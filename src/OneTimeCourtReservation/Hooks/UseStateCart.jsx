import { useState, useEffect } from "react";
import { useBookYourCourtContext } from "../../context/BookYourCourtContext";
import { useLocalStorage } from "../../Hooks/useLocalStorage.js";

export const UseStateCart = ({ court }) => {
  const [cartState, setCartState] = useState(true);
  const { bookCourt, setBookCourt } = useBookYourCourtContext();

  const { setItem, getItem } = useLocalStorage({ key: "cartState"});

  useEffect(() => {
    console.log(bookCourt);
  }, [bookCourt]);

  function handleCart() {
    if (cartState == true) {
      setCartState(false);
      setItem(cartState)
      const newCourt = {
        timecourt: court.id,
        state: "Pending",
        fkCourt: court.fk_court,
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
          (item) => item.fkCourt !== court.fk_court
        ),
      }));
    }
  }

  return {
    cartState,
    handleCart,
  };
};
