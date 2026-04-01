import MFEContainer from '@/components/MFEContainer';
import { getMFEUrl } from '@/config/mfe';

export default function MFEProfilePage() {
  return (
    <div className="h-screen">
      <MFEContainer 
        src={getMFEUrl('/profile')} 
        title="MFE Profile"
      />
    </div>
  );
} 