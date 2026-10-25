
import { useState } from 'react';
import {
  ArrowRight,
  Users,
  Copy,
  ShieldCheck,
  Zap,
  Gift,
} from 'lucide-react';

import styles from './ReferEarnBanner.module.css';
import referEarnImage from '../../assets/refer-earn.png';

export default function ReferEarnBanner({ onNavigate }) {
  const referralCode = 'VELOOP123';
  const [copyMessage, setCopyMessage] = useState('');

  async function copyReferralCode() {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopyMessage('Referral code copied');
    } catch {
      setCopyMessage(`Your code: ${referralCode}`);
    }
  }

  return (
    <section>
     <div>adding the div there</div>
     <div>adding on new file also there</div>
     <div>therew we check or bullmq</div>
     <div>adding there one file also when somone update the file </div>
     <div>adding one new file also </div>
     <div>adding also one new file there adding one content also </div>
    </section>
  );
}
