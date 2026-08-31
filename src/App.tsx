import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { Layout } from '@/components/Layout';
import { PlaceholderPage } from '@/pages/PlaceholderPage';
import { Dashboard } from '@/pages/Dashboard';
import { PatientDetails } from '@/pages/PatientDetails';
import { Capture } from '@/pages/Capture';
import { QualityCheck } from '@/pages/QualityCheck';
import { Analyzing } from '@/pages/Analyzing';
import { Result } from '@/pages/Result';
import { Recommendation } from '@/pages/Recommendation';
import { History } from '@/pages/History';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/capture" element={<Capture />} />
            <Route path="/quality-check" element={<QualityCheck />} />
            <Route path="/analyzing" element={<Analyzing />} />
            <Route path="/result" element={<Result />} />
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/history" element={<History />} />
            <Route path="/referrals" element={<PlaceholderPage pageKey="referrals" />} />
            <Route path="/settings" element={<PlaceholderPage pageKey="settings" />} />
            <Route path="/screening" element={<PlaceholderPage pageKey="screening" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
