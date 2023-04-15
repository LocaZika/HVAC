import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../../Routes';
import { Error404 } from '../../Errors';

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Routes>
        {publicRoutes}
        {privateRoutes}
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  )
}
