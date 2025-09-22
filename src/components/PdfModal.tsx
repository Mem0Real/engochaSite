import { FC, useState } from 'react';

import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

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

type PDFFile = string | File | null;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

export const PDFModal: FC<PdfViewerModalProps> = ({ isOpen, onClose }) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [file, setFile] = useState<PDFFile>('./sample.pdf');

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () => setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50' onClick={onClose}>
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

        <nav>
          <button onClick={goToPrevPage}>Prev</button>
          <button onClick={goToNextPage}>Next</button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </nav>

        <Document
          file='document.pdf' // Path to your PDF file.
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {/* <Page pageNumber={pageNumber} /> */}
          {Array.from(new Array(numPages), (_el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
};
