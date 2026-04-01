import MFEContainer from '@/components/MFEContainer';
import { getMFEUrl } from '@/config/mfe';

export default function MFEDashboardPage() {
  return (
    <div className="h-screen">
      <MFEContainer 
        src={getMFEUrl('/dashboard')} 
        title="MFE Dashboard"
      />
    </div>
  );
} 