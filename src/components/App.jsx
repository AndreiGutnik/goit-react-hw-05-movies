import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ScrollUp } from './ScrollUp/ScrollUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';

export const App = () => {
  const [isScrollUp, setisScrollUp] = useState(false);

  const onScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 300) {
      setisScrollUp(true);
    } else {
      setisScrollUp(false);
    }
  };

  const onScrollUp = () => {
    scroll.scrollToTop();
    setisScrollUp(false);
  };

  return (
    <Layout>
      {isScrollUp && <ScrollUp onClick={onScrollUp} />}
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </Layout>
  );
};
