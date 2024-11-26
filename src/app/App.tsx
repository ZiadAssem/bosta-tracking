import React, { useEffect } from 'react';
import './../App.css';
import { useTranslation } from 'react-i18next';
import './utils/il8n';
import NavBar from './components/nav_bar';
import LanguageContextProvider from './context/language_context';
import Divider from './components/divider';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, store } from './redux/store';
import { fetchShipment } from './redux/shipment_slice';
import { Welcome } from './components/welcome';
import { ShipmentHeading } from './components/shipment_heading';




function App() {


  const dispatch = useDispatch<AppDispatch>();
  const { shipment, status, error } = useSelector((state: RootState) => state.shipment);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchShipment("84043113"));

  }, [dispatch])
  return (
    <LanguageContextProvider>
        <div className=' font-cairo bg-white ' >
          <NavBar />
          <Divider />
          <div className='px-20'>
          {status=='idle' &&
            <Welcome/>
          }
          {status=='loading' &&
            <p>Loading...</p>
          }
          {status=='failed' &&
            <p>{error}</p>
          }
          {status=='succeeded' && shipment &&
            <ShipmentHeading shipment={shipment}/>
          }
          
          </div>
       
        </div>
    </LanguageContextProvider>
  );
}

export default App;
