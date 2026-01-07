type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const getDeviceType = (width: number): DeviceType => {
  if (width <= 767) return 'mobile';

  if (width >= 768 && width <= 1199) return 'tablet';

  return 'desktop';
};

export const device = getDeviceType(window.innerWidth);
