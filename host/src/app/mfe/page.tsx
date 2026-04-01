import MFEContainer from '@/components/MFEContainer';
import { getMFEUrl } from '@/config/mfe';

export default function MFEPage() {
  return (
    <div className="h-screen">
      <MFEContainer 
        src={getMFEUrl()} 
        title="MFE Application"
      />
    </div>
  );
} 