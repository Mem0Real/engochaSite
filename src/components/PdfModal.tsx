import { FC } from 'react';

import { pdfjs, Document } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
  wasmUrl: '/wasm/',
};

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PDFModal: FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 overflow-scroll h-74'
      onClick={onClose}
    >
      <div
        className='bg-white w-11/12 max-w-5xl h-[85vh] rounded shadow-lg flex flex-col'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center p-2 border-b'>
          <h2 className='text-lg font-semibold'>PDF Viewer</h2>
          <button onClick={onClose} className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'>
            Close
          </button>
        </div>

        <div className='min-h-[82%]'>
          <Document file='/document.pdf' options={options} />
        </div>
      </div>
    </div>
  );
};
