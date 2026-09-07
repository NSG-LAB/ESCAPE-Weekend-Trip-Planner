import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

/**
 * Accessible Toast Notification Component
 */
export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900/95 border border-indigo-500/40 text-white rounded-2xl shadow-2xl backdrop-blur-md animate-slide-up max-w-sm"
    >
      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="text-xs font-semibold text-slate-200">{message}</span>
      <button
        onClick={onClose}
        className="p-1 text-slate-400 hover:text-white transition-colors ml-auto"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
