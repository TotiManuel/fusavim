import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Doctors from './src/pages/Doctors';
import Convenios from "./src/pages/Convenios";
import Contact from './src/pages/Contact';
import Estudios from "./src/pages/Study";
import Appointment from './src/pages/Appointment';
import Novedades from './src/pages/News';
import RecetaDigital from './src/pages/Receta'
import CirculoMujer from './src/pages/news/pages/circulo-mujer';
import CampaniaVacunacion2025 from './src/pages/news/pages/campana-vacunacion-2025';
import LaboratorioHorarioExtendido from './src/pages/news/pages/laboratorio-extendido'
import Cardiologia from './src/pages/cardiologia/cardiologia'
import CirugiaGeneral from './src/pages/cirugiaGeneral/cirugia-general'
import Dialisis from './src/pages/dialisis/dialisis'
import Traumatologia from './src/pages/traumatologia/traumatologia'
import Gastroenterologia from './src/pages/gastroenterologia/gastroenterologia'
import Ginecologia from './src/pages/ginecologia/ginecologia'
import Hemodinamia from './src/pages/hemodinamia/hemodinamia'
import Nefrologia from './src/pages/nefrologia/nefrologia'
import Neumonologia from './src/pages/neumonologia/neumonologia'
import Nutricionista from './src/pages/nutricionista/nutricionista'
import Oncologia from './src/pages/oncologia/oncologia'
import PAMI from './src/pages/pami/pami'
import Urologia from './src/pages/urologia/urologia'
import MedicinaGeneral from './src/pages/medicinaGeneral/medicina-general'
import PageInDevelopment from './src/pages/page-in-development'
import NotFound from './src/pages/NotFound';

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen font-inter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path='/convenios' element={<Convenios /> } />
            <Route path='/estudios' element={<Estudios /> } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path='/news' element={<Novedades /> } />
            <Route path='/recetas' element={<RecetaDigital /> } />
            <Route path="/circulo-mujer" element={<CirculoMujer />} />
            <Route path="/campania-vacunacion" element={<CampaniaVacunacion2025 />} />
            <Route path="/laboratorio-extendido" element={<LaboratorioHorarioExtendido />} />
            <Route path="/cardiologia" element={<Cardiologia />} />
            <Route path="/cirugia general" element={<CirugiaGeneral />} />
            <Route path="/dialisis" element={<Dialisis />} />
            <Route path='/traumatologia' element={<Traumatologia />} />
            <Route path='/gastroenterologia' element={<Gastroenterologia />} />
            <Route path='/ginecologia' element={<Ginecologia /> } />
            <Route path='/hemodinamia' element={<Hemodinamia />}/>
            <Route path='/nefrologia' element={<Nefrologia />}/>
            <Route path='/neumonologia' element={<Neumonologia />}/>
            <Route path='/nutricionista' element={<Nutricionista />}/>
            <Route path='/oncologia' element={<Oncologia />}/>
            <Route path='/pami' element={<PAMI />}/>
            <Route path='/urologia' element={<Urologia />}/>
            <Route path="/medicina general" element={<MedicinaGeneral />} />
            <Route path="/page-in-development" element={<PageInDevelopment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;