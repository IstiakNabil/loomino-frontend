import type { ReactNode } from "react";
import { X } from "lucide-react";

interface AdminModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

function AdminModal({
  open,
  title,
  onClose,
  children,
}: AdminModalProps) {
  if (!open) return null;

  return (
    <div className="font-loomino fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <div className="relative z-10 w-full max-w-[480px] rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-[#2C2418]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-[#8A7C64] hover:text-[#2C2418]"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AdminModal;
