import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string): string => {
  if (dateString === 'Present') return 'Present';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

export const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  
  const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + 
                      (end.getMonth() - start.getMonth());
  
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;
  
  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  }
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const getSkillColor = (level: number): string => {
  if (level >= 90) return 'from-green-400 to-green-600';
  if (level >= 80) return 'from-blue-400 to-blue-600';
  if (level >= 70) return 'from-yellow-400 to-yellow-600';
  if (level >= 60) return 'from-orange-400 to-orange-600';
  return 'from-red-400 to-red-600';
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
