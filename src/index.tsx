import React from 'react';
import { createRoot } from 'react-dom/client';
import $ from 'jquery';

import App from './App';

const root = createRoot($('#root')[0]);
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);