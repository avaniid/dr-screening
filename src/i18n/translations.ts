export type Language = 'EN' | 'HI';

export const translations: Record<Language, {
  appName: string;
  appTagline: string;
  dashboard: string;
  screening: string;
  history: string;
  referrals: string;
  settings: string;
  online: string;
  offline: string;
  pages: Record<string, string>;
}> = {
  EN: {
    appName: 'DR Screening',
    appTagline: 'Diabetic Retinopathy',
    dashboard: 'Dashboard',
    screening: 'Screening',
    history: 'History',
    referrals: 'Referrals',
    settings: 'Settings',
    online: 'Online',
    offline: 'Offline',
    pages: {
      'patient-details': 'Patient Details',
      capture: 'Capture',
      'quality-check': 'Quality Check',
      analyzing: 'Analyzing',
      result: 'Result',
      recommendation: 'Recommendation',
      dashboard: 'Dashboard',
      history: 'History',
      referrals: 'Referrals',
      settings: 'Settings',
      screening: 'Screening',
    },
  },
  HI: {
    appName: 'डीआर स्क्रीनिंग',
    appTagline: 'मधुमेह रेटिनोपैथी',
    dashboard: 'डैशबोर्ड',
    screening: 'स्क्रीनिंग',
    history: 'इतिहास',
    referrals: 'रेफरल',
    settings: 'सेटिंग्स',
    online: 'ऑनलाइन',
    offline: 'ऑफलाइन',
    pages: {
      'patient-details': 'मरीज विवरण',
      capture: 'कैप्चर',
      'quality-check': 'गुणवत्ता जांच',
      analyzing: 'विश्लेषण',
      result: 'परिणाम',
      recommendation: 'सुझाव',
      dashboard: 'डैशबोर्ड',
      history: 'इतिहास',
      referrals: 'रेफरल',
      settings: 'सेटिंग्स',
      screening: 'स्क्रीनिंग',
    },
  },
};
