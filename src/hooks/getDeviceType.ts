import { useEffect, useState } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

const getDevice = (): DeviceType => {
  const width = window.innerWidth;

  if (width < 768) return 'mobile';
  if (width < 1200) return 'tablet';
  return 'desktop';
};

export const useDeviceType = (): DeviceType => {
  const [device, setDevice] = useState<DeviceType>(getDevice());

  useEffect(() => {
    const handleResize = () => setDevice(getDevice());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};
