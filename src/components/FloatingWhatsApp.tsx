import React from 'react';
import { company } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Valve Bridge on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant hover-lift group"
      style={{ backgroundColor: '#25D366' }}
    >
      <span className="sr-only">Chat on WhatsApp</span>
      <svg viewBox="0 0 32 32" className="h-7 w-7 transition transform group-hover:scale-110" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.847 0 2.534-.945 3.092-1.876.56-.93.56-1.734.387-2.064-.17-.33-.63-.53-1.002-.53M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.49.684 4.82 1.87 6.817L2.667 29.333l6.685-1.84A13.27 13.27 0 0 0 16 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333" />
      </svg>
    </a>
  );
};
