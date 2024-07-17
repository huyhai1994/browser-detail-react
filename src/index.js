import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <h4 className='text-danger fs-5 text-center'>Browser's details: {navigator.userAgent}</h4>
</div>);
