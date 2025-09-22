import React, { FC, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Import the worker as a Vite web worker
// pdfjs-dist v3+ ships the worker entry at legacy/build/pdf.worker
// ?worker makes Vite bundle it as a real Worker
import pdfWorker from 'pdfjs-dist/legacy/build/pdf.worker?worker';

pdfjs.GlobalWorkerOptions.workerPort = new pdfWorker();

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: string;
}

const PdfModal: FC<PdfModalProps> = ({ isOpen, onClose, file }) => {
  const [numPages, setNumPages] = useState<number>(0);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg w-11/12 max-w-4xl h-5/6 flex flex-col overflow-hidden'>
        <div className='flex justify-between items-center p-4 border-b'>
          <h2 className='text-lg font-semibold'>PDF Preview</h2>
          <button onClick={onClose} className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'>
            Close
          </button>
        </div>

        <div className='flex-1 overflow-auto p-4'>
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(err) => console.error('PDF load error:', err)}
          >
            {Array.from(new Array(numPages), (_, idx) => (
              <Page
                key={`page_${idx + 1}`}
                pageNumber={idx + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
