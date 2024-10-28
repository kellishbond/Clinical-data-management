// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import PatientRecords from './pages/PatientRecords';
// import DataAnalysis from './pages/DataAnalysis';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';

// const App = () => (
//   <Router>
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Header />
//         <main className="p-4">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/patient-records" element={<PatientRecords />} />
//             <Route path="/data-analysis" element={<DataAnalysis />} />
            
//           </Routes>
//         </main>
//       </div>
//     </div>
//   </Router>
// );

// export default App;


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PatientRecords from './pages/PatientRecords';
import DataAnalysis from './pages/DataAnalysis';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PatientDetail from './components/PatientDetail';

const App = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patient-records" element={<PatientRecords />} />
            <Route path="/data-analysis" element={<DataAnalysis />} />
            <Route path="/patients/:id" element={<PatientDetail />} />
            {/* Ensure this is the correct route you want */}
          </Routes>
        </main>
      </div>
    </div>
  </Router>
);

export default App;
